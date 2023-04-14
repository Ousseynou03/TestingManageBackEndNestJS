import { Releas } from "src/entities/Releas";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Releas)
export class ReleasRepository extends Repository<Releas> {}