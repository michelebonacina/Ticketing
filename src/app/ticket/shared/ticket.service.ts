import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from './ticket.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TicketService
{

    constructor(
        private httpClient: HttpClient
    ) { }

    public getTicketFromAPI(apiTicket: any): Ticket
    {
        // get data from api activity
        let ticket: Ticket = null;
        if (apiTicket)
        {
            ticket = new Ticket();
            ticket.id = apiTicket._id;
            ticket.codice = apiTicket.codice;
            ticket.dataApertura = new Date(apiTicket.dataApertura);
            ticket.titolo = apiTicket.titolo;
            ticket.descrizione = apiTicket.descrizione;
            ticket.utente = apiTicket.utente;
            ticket.stato = apiTicket.stato;
        }
        // return activity
        return ticket;
    } // getActivityFromAPI    

    public listTicket(): Observable<Ticket[]> 
    {
        return new Observable<Ticket[]>(
            (observer) =>
            {
                this.httpClient.get('/api/v1/ticket').subscribe(
                    (findedTicketList: any[]) =>
                    {
                        const ticketList: Ticket[] = [];
                        findedTicketList.forEach(
                            (findedTicket) =>
                            {
                                ticketList.push(this.getTicketFromAPI(findedTicket));
                            }
                        );
                        observer.next(ticketList);
                        observer.complete();
        
                    },
                    (error) =>
                    {
                        observer.error(error);
                    }
                );
            }
        )
    }

}
