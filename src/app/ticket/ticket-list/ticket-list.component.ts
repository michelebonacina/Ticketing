import { Component, OnInit } from '@angular/core';
import { Ticket } from '../shared/ticket.model';

@Component({
    selector: 'tic-ticket-list',
    templateUrl: './ticket-list.component.html',
    styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit
{

    elencoTicket = [];

    constructor() {
        let ticket = new Ticket();
        ticket.id = '1';
        ticket.codice = 'XY001';
        ticket.dataApertura = new Date('2020-01-04');
        ticket.titolo = 'Ticket 1';
        ticket.utente = 'Mario';
        ticket.stato = 'Attesa Risposta';
        this.elencoTicket.push(ticket);
        ticket = new Ticket();
        ticket.id = '2';
        ticket.codice = 'AB001';
        ticket.dataApertura = new Date('2020-01-15');
        ticket.titolo = 'Ticket 2';
        ticket.utente = 'Michele';
        ticket.stato = 'In Corso';
        this.elencoTicket.push(ticket);
        ticket = new Ticket();
        ticket.id = '3';
        ticket.codice = 'XY002';
        ticket.dataApertura = new Date('2020-01-18');
        ticket.titolo = 'Ticket 3';
        ticket.utente = 'Mario';
        ticket.stato = 'Aperto';
        this.elencoTicket.push(ticket);
     }

    ngOnInit()
    {
    }

}
