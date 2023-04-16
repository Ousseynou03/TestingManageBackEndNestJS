import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Ticket } from "src/entities/ticket.entity";
import { TicketRepository } from "src/repository/ticket.repository";
import { ITicketService } from "src/service/ITicket.service";


@Injectable()
export class TicketServiceImpl implements ITicketService {


    constructor(@InjectRepository(Ticket) private ticketRepository : TicketRepository){}


    //Méthode pour récupérer la liste des tickets
    async getAllTicket(): Promise<Ticket[]> {
        return this.ticketRepository.find()
    }


    //Méthode pour récupérer un ticket sachant son id
    async getTicketById(refTicket: number): Promise<Ticket> {
        const ticket = await this.ticketRepository.findOneBy({refTicket});
        if (!ticket) {
          throw new NotFoundException(`Ticket with ID:${refTicket} not found`);
        }
        return ticket;
      }



    //Méthode pour ajouter un ticket
    async addTicket(ticket: Ticket): Promise<Ticket> {
        return this.ticketRepository.save(ticket);
    }


    //Méthode pour mettre à jour un ticket
    async updateTicket(ticket: Ticket): Promise<Ticket> {
        return this.ticketRepository.save(ticket);
    }


    //Méthode pour supprimer un ticket
    async deleteTicket(refTicket: number): Promise<void> {
        await this.ticketRepository.delete(refTicket);
    }

}