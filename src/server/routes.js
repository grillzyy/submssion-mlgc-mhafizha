const handler = require('./handler');
 
const routes = [
  {
    path: '/predict',
    method: 'POST',
    handler: handler.postPredictHandler,
    options: {
      payload: {
        /*Mengizinkan data berupa gambar*/
        allow: 'multipart/form-data',
        multipart: true
      }
    }
  },
  {
    path: '/predict/histories',
    method: 'GET',
    handler: handler.getHistories
  }
]

module.exports = routes