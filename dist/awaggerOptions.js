"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = void 0;
exports.options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'RESTAPI APICHEF',
            version: '1.0.0',
            description: 'Api que servira a las aplicacion movil'
        },
        servers: [
            {
                url: 'http://localhost:4000'
            },
            {
                url: 'https://apichef.herokuapp.com'
            }
        ]
    },
    apis: ['./src/routes/*.js'], // files containing annotations as above
};
