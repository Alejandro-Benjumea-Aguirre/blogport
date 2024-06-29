require('dotenv').config()

const mongoose = require('mongoose');


mongoose.connect(process.env.PORT_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB conectado'))
    .catch(err => console.error('Error de conexión a MongoDB:', err));
