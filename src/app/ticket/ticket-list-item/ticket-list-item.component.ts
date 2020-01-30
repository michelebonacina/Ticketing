import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from '../shared/ticket.model';

@Component({
    selector: '[tic-ticket-list-item]',
    templateUrl: './ticket-list-item.component.html',
    styleUrls: ['./ticket-list-item.component.scss']
})
export class TicketListItemComponent implements OnInit
{

    @Input() ticket: Ticket;

    constructor() { }

    ngOnInit()
    {
    }

}
