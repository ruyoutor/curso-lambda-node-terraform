const winston = require('winston');
const { v4: uuidv4 } = require('uuid')

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: {service: 'bmi', correlationId: uuidv4()},
    transports: [
        new winston.transports.Console({
            format: winston.format.simple()
        })
    ]
});

exports.Logger = logger;
