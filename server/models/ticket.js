const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema(
    {
        codice: {
            type: String,
            minlength: [4, 'Il codice deve essere almeno 4 caratteri'],
            maxlength: [20, 'Il codice deve essere al messimo 20 caratteri'],
            uppercase: true,
            required: ['Il codice è obligatorio'],
            unique: true
        },
        dataApertura: {
            type: Date,
            required: ['La data apertura è obligatoria']
        },
        titolo: {
            type: String,
            minlength: [4, 'Il titolo deve essere almeno 4 caratteri'],
            maxlength: [60, 'Il titolo deve essere al messimo 60 caratteri'],
            required: ['Il titolo è obligatorio']
        },
        descrizione: {
            type: String
        },
        utente: {
            type: String
        },
        stato: {
            type: String,
            enum: ['Aperto', 'In lavorazione', 'Attesa risposta', 'Attesa conferma', 'Chiuso'],
            required: ['Lo stato è obbligatorio']
        }
    },
    {
        collection: 'ticket'
    }
);

module.exports = mongoose.model("Ticket", ticketSchema);