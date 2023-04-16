import { Ticket } from "src/entities/ticket.entity";

export interface ITicketService {


    getAllTicket(): Promise<Ticket[]>;

 
    getTicketById(refTicket : number) : Promise<Ticket>
   
   
    addTicket(ticket : Ticket) : Promise<Ticket>
   
    updateTicket(ticket : Ticket): Promise<Ticket>
   
     
    deleteTicket(refTicket : number) : Promise<void>
    
}