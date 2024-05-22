const tf = require('@tensorflow/tfjs-node');
const InputError = require('../exceptions/InputError');
 
async function predictClassification(model, image) {
    try {
        const tensor = tf.node
            .decodeJpeg(image)
            .resizeNearestNeighbor([224, 224])
            .expandDims()
            .toFloat()
 
        const classes = ['Cancer', 'Non-cancer'];
 
        const prediction = model.predict(tensor);
        const score = (await prediction.data())[0];
        const label = score * 100 > 50 ? classes[0] : classes[1];
 
        let suggestion;
 
        if(label === 'Non-cancer') {
            suggestion = "Tidak terdeteksi jenis kanker"
        }
 
        if(label === 'Cancer') {
            suggestion = "Segera konsultasi dengan dokter!"
        }
 
        return { label, suggestion };
    } catch (error) {
        throw new InputError(`Terjadi kesalahan dalam melakukan prediksi`)
    }
}
 
module.exports = predictClassification;