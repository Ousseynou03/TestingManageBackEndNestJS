
import { ScenarioDeTest } from "src/entities/scenarioDeTest.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(ScenarioDeTest)
export class ScenarioDeTestRepository extends Repository<ScenarioDeTest> {}