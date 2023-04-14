import { Testeur } from "src/entities/testeur.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Testeur)
export class TesteurRepository extends Repository<Testeur> {}