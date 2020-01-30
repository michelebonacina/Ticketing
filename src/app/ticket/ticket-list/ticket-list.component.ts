import { Component, OnInit } from '@angular/core';
import { Ticket } from '../shared/ticket.model';
import { TicketService } from '../shared/ticket.service';

@Component({
    selector: 'tic-ticket-list',
    templateUrl: './ticket-list.component.html',
    styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit
{

    elencoTicket = [];

    constructor(
        private ticketService: TicketService
    ) { }

    ngOnInit()
    {
        this.ticketService.listTicket().subscribe(
            (ticketList: Ticket[]) =>
            {
                this.elencoTicket = ticketList;
            }

        )
    }

}
