export class Ticket 
{
    id: string;
    codice: string;
    dataApertura: Date;
    titolo: string;
    utente: string;
    stato: string;

    public getGiorniApertura(): number
    {
        const oggi = new Date();
        let differenza = oggi.getTime() - this.dataApertura.getTime();
        differenza = Math.round(differenza / 1000 / 3600 / 24);
        return differenza;
    }    

}

