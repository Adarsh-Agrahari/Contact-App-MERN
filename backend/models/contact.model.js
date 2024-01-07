const mongoose = require('mongoose');
const contactSchema = new mongoose.Schema(
    {
        name: { type: String },
        avatar: {
            type: String,
            default: 'https://media.istockphoto.com/vectors/male-profile-flat-blue-simple-icon-with-long-shadow-vector-id522855255?k=20&m=522855255&s=612x612&w=0&h=fLLvwEbgOmSzk1_jQ0MgDATEVcVOh_kqEe0rqi7aM5A='

        },
        phone: { type: String },
        tag: { type: String },
        status: {
            type: String,
            default: 'active',
            enum: ['active','inactive']
        }
    },
    { timestamps: true}
);

const Contact = mongoose.model('contact',contactSchema);
module.exports = Contact;