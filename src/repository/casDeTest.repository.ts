import { CasDeTest } from "src/entities/CasDeTest";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(CasDeTest)
export class CasDeTestRepository extends Repository<CasDeTest> {}