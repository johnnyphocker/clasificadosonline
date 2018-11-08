const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addSchema = new Schema({
    title: {
        type: String,
        maxlength: 25,
        required: [true, 'El título es obligatorio']
    },
    body: {
        type: String,
        maxlength: 250,
        required: [true, 'El texto es obligatorio']
    },
    name: {
        type: String,
        required: [true, 'Su nombre es obligatorio']
    },
    phone: {
        type: String,
        required: [true, 'Su teléfono es obligatorio']
    },
    email: {
        type: String,
        required: [true, 'Su correo es obligatorio']
    },
    category: {
        type: String,
        enum: ['Niños y Bebes','Deportes y Tiempo Libre','Electrónica','Empleos','Inmuebles','Moda y Hogar','negocios','Servicios','Vehículos','Otros'],
        required: true
    },
    state: {
        type: String
    },
    city: {
        type: String
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isVisible: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
}, {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = mongoose.model('Add', addSchema);

