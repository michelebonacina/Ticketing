const Ticket = require('../models/ticket');

exports.ticketList = function (request, response)
{

    Ticket.find({}).exec(
        function(error, ticketList)
        {
            if (error) {
                return response.status('500').send({ messaggio: 'Errore nella ricerca dei Ticket' });
            }
            return response.status('200').json(ticketList);
        }
    );
}