

exports.ticketList = function (request, response)
{
    console.log('elenco ticket');
    return response.status('200').send({ richiesta: 'ok' });
}