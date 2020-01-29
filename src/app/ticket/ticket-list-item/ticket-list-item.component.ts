import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: '[tic-ticket-list-item]',
    templateUrl: './ticket-list-item.component.html',
    styleUrls: ['./ticket-list-item.component.scss']
})
export class TicketListItemComponent implements OnInit
{

    @Input() ticket;

    constructor() { }

    ngOnInit()
    {
    }

}
