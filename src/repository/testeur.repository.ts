import { Testeur } from "src/entities/Testeur";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Testeur)
export class TesteurRepository extends Repository<Testeur> {}