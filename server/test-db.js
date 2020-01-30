const testDBData = require('./test-db.json');
const Ticket = require('./models/ticket');

class TestDB
{
    constructor()
    {
        this.ticket = testDBData.ticket;
    }

    async deleteData()
    {
        await Ticket.deleteMany({});
    }

    saveData()
    {
        this.ticket.forEach(
            function (ticket)
            {
                const newTicket = new Ticket(ticket);
                newTicket.save();
            }
        )
    }

    async initDB()
    {
        await this.deleteData();
        await this.saveData();
    }

}

module.exports = TestDB;