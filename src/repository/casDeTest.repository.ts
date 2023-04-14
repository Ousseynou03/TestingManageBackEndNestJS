
import { CasDeTest } from "src/entities/casDeTest.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(CasDeTest)
export class CasDeTestRepository extends Repository<CasDeTest> {}