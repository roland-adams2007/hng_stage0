// security.js
const rateLimit = require('express-rate-limit');

const security = rateLimit({
    windowMs: 1 * 60 * 1000, 
    max: 100, 
    message: {
        status: 'error',
        message: 'Too many requests, please try again later.',
    },
    standardHeaders: true,
    legacyHeaders: false, 
});

module.exports = security;
