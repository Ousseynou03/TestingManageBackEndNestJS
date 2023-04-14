import { Ticket } from "src/entities/Ticket";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Ticket)
export class TicketRepository extends Repository<Ticket> {}