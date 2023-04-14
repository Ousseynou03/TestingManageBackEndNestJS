import { ScenarioDeTest } from "src/entities/ScenarioDeTest";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(ScenarioDeTest)
export class ScenarioDeTestRepository extends Repository<ScenarioDeTest> {}