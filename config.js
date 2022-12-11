require('dotenv').config();

module.exports = {
    app: {
        port: process.env.PORT || 4000
    },
    mongodb: {
        uri: process.env.MONGODB_URI
    },
    secret_jwt: {
        frase: process.env.SECRET_JWT
    }
    
}