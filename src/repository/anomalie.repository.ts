
import { Anomalie } from "src/entities/anomalie.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Anomalie)
export class AnomalieRepository extends Repository<Anomalie> {}