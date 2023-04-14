
import { Releas } from "src/entities/releas.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Releas)
export class ReleasRepository extends Repository<Releas> {}