import { Body, Controller, Delete, Get, InternalServerErrorException, Param, Post, Put } from "@nestjs/common";
import { Ticket } from "src/entities/ticket.entity";
import { TicketServiceImpl } from "src/serviceImpl/ticket.serviceImpl";

@Controller('ticketManager')
export class TicketController {
    anomalieServiceImpl: any;

    constructor(private readonly ticketServiceImpl : TicketServiceImpl){}

        //API de récupération de la liste des tickets
        @Get('/')
        public async getTicket() : Promise<Ticket[]> {
            return this.ticketServiceImpl.getAllTicket();
        }
    
        //API de récupération d'un ticket sachant son id
        @Get(':id')
        public async getTicketById(@Param('id') refTicket : number) : Promise<Ticket>{
            return this.ticketServiceImpl.getTicketById(refTicket);
        }
    
    
        //API pour ajouter un ticket
        @Post('/')
        public async createTicket(@Body() ticket : Ticket) : Promise<Ticket>{
            try {
                return await this.ticketServiceImpl.addTicket(ticket);
            } catch (error) {
                throw new InternalServerErrorException('Une erreur est survenue lors de l\'ajout d\'un ticket');
                }
            }
    
        //API pour modifier un ticket
        @Put(':id')
        public async updateTicket(@Param('id') refTicket: number,@Body() ticket : Ticket) : Promise<Ticket>{
            ticket.refTicket = refTicket;
            return this.ticketServiceImpl.updateTicket(ticket);
        }
    
    
        //API pour supprimer une anomalie
        @Delete(':id')
        public async deleteTicket(@Param('id') refTicket : number) : Promise<void>{
            await this.ticketServiceImpl.deleteTicket(refTicket);
        }

}