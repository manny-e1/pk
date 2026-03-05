BigInt.prototype.toJSON = function() {       
  return this.toString();
};

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const { initGeoDb } = require('./utils/geoIpService');

const app = express();
const PORT = 4000;

const allowedOrigins = [
  'http://localhost:3000',
  'http://192.168.1.3:3000',
  'http://192.168.1.3:4000',
  'http://18.142.184.55:3000',
  'http://18.142.184.55:4000',
  'http://18.142.184.55',
  'https://www.authkey.my',
  'https://console.authkey.my',
  'https://api.authkey.my',
];

    
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true, 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: [
        'Content-Type', 
        'Authorization', 
        'x-client-type',
        'x-api-key',
        'x-signature',
        'x-timestamp'
    ]
}));


app.use(cookieParser());
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

app.use('/.well-known', express.static('.well-known'));

app.use('/', routes);

initGeoDb().then(() => {
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
        console.log(`Ready to process secure transactions.`);
    });
});