import express from 'express'
import path from 'path'

import axios from 'axios'
import OAuth from 'oauth-1.0a'
import cookieParser from 'cookie-parser'
import crypto from 'crypto'

try {
  var CREDENTIALS = require('./CREDENTIALS');
} catch (e) {
  console.log('WARNING: No CREDENTIALS file located.');
  console.log(e);
  var CREDENTIALS = null;
}

const app = express(),
			DIST_DIR = __dirname,
			HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(express.static(__dirname));
app.use(express.json());

var last_update = null;
var parts = {};
app.get('/gettechparts', (req,res) => {
  // check if parts have been updated recently
  var now = new Date();
  var mins_since = 9999;
  if ( last_update ) {
    mins_since = ( now.getTime() - last_update.getTime() ) / ( 1000 * 60 );
  }
  if ( mins_since > 60 && CREDENTIALS != null ) {
    // update parts from netsuite
    last_update = now;
    callPartRestlet().then( response => {
      parts = response.data;
    }, error => {
      console.log('ERROR GETTING PART CODES: '+JSON.stringify(error));
      parts = {};
    });
  }
  res.send(parts);
});

// calls the parts restlet from netsuite using the credentials stored in a file
// called 'CREDENTIALS'. Credentials are exported in the format:
//    {
//      token: {
//        key: KEY,
//        secret: SECRET
//      },
//      consumer: {
//        key: KEY,
//        secret: SECRET
//      }
//    }
function callPartRestlet() {

  var url = 'https://5238530-sb2.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=735&deploy=1';

  var request_data = {
    method: 'GET',
    url: url
  };

  var oauth = OAuth({
    consumer: CREDENTIALS.consumer,
    signature_method: 'HMAC-SHA256',
    hash_function(base_string,key) {
      return crypto.createHmac('sha256',key).update(base_string).digest('base64');
    }
  });

  var authorization = oauth.authorize(request_data,CREDENTIALS.token);
  var header = oauth.toHeader(authorization);
  header['Authorization'] += ', realm="5238530_SB2"';
  header['content-type'] = 'application/json';

  return axios({
    url: url,
    method: 'GET',
    headers: header,
  });
}; // end callPartRestlet

const PORT = process.env.PORT || 3000;
app.listen( PORT, () => {
	console.log(`Prod App listening to ${PORT}....`);
	console.log('Press Ctrl+C to quit.');
} );
