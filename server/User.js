const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    assessmentYear: {
        type: String,
        required: true
    },
    taxPayer: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    residentialStatus: {
        type: String,
        required: true
    },
    netTaxableIncome: {
        type: Number,
        required: true
    }
});

const Register = mongoose.model('Register', registerSchema);

module.exports = Register;
