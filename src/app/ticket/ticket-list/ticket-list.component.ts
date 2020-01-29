import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'tic-ticket-list',
    templateUrl: './ticket-list.component.html',
    styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit
{

    elencoTicket = [
        {codice: 'XY001', data: '01/01/2020', titolo: "Ticket 1", utente: "Mario", stato: "Aperto"},
        {codice: 'AB001', data: '01/01/2020', titolo: "Ticket 2", utente: "Mario", stato: "In Corso"},
        {codice: 'XY002', data: '04/01/2020', titolo: "Ticket 3", utente: "Michele", stato: "Aperto"},
        {codice: 'AB002', data: '02/01/2020', titolo: "Ticket 4", utente: "Mario", stato: "Attesa Risposta"},
        {codice: 'AB003', data: '20/01/2020', titolo: "Ticket 5", utente: "Michele", stato: "Aperto"},
    ];

    constructor() { }

    ngOnInit()
    {
    }

}
