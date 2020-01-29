import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TicketComponent } from './ticket.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';

const routes: Routes = [
    {
        path: 'ticket',
        component: TicketComponent,
        children: [
            { path: "", component: TicketListComponent }
        ]
    }

];

@NgModule({
    declarations: [
        TicketComponent,
        TicketListComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class TicketModule { }
