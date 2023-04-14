import { Anomalie } from "src/entities/Anomalie";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Anomalie)
export class AnomalieRepository extends Repository<Anomalie> {}