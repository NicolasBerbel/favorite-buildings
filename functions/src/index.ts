import * as functions from 'firebase-functions';
import axios from 'axios';

const cors = require('cors')({
  origin: true,
});

const { api_url : apiUrl, api_token : apiToken } = functions.config().orulo;
const api = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${apiToken}`
  }
});

export const buildings = functions.https.onRequest((req, res) => {
  return cors(req, res, async () => {

    try {
      const { data } = await api.get('/buildings', {
        params: {
          page: req.query.page,
          results_per_page: 12
        }
      });
  
      return res.json( data );
    } catch ( error ) {
      const { status, data : { error_message } } = error.response;
  
      return res.status(status).json({
        status,
        error_message
      })
    }
  })
});
