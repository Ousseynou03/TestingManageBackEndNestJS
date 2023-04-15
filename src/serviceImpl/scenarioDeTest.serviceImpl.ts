import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ScenarioDeTest } from "src/entities/scenarioDeTest.entity";
import { ScenarioDeTestRepository } from "src/repository/scenarioDeTest.repository";
import { IScenarioDeTestService } from "src/service/IScenarioDeTest.service";


@Injectable()
export class ScenarioDeTestServiceImpl implements IScenarioDeTestService {

    constructor(@InjectRepository(ScenarioDeTest) private scenarioDeTestRepository : ScenarioDeTestRepository){}


    //Méthode pour récupérer la liste des scenario de test
    async getAllScenario(): Promise<ScenarioDeTest[]> {
        return this.scenarioDeTestRepository.find();
    }


    //Méthode pour récupérer un scénario de test sachant son id
    async getScenarioDeTestById(refScenario: number): Promise<ScenarioDeTest> {
        const scenarioDeTest = await this.scenarioDeTestRepository.findOneBy({refScenario});
        if (!scenarioDeTest) {
          throw new NotFoundException(`Scenario de test with ID:${refScenario} not found`);
        }
        return scenarioDeTest;
      }
    //Méthode pour mettre à jour un scenario de test
    async updateScenarioDeTest(scenarioDeTest: ScenarioDeTest): Promise<ScenarioDeTest> {
        return this.scenarioDeTestRepository.save(scenarioDeTest);
    }

    //Méthode pour mettre à jour un scenario de test
    async addScenarioDeTest(scenarioDeTest: ScenarioDeTest): Promise<ScenarioDeTest> {
        return this.scenarioDeTestRepository.save(scenarioDeTest);
    }

    //Méthode pour supprimer un scenario de test
    async deleteScenarioDeTest(refScenario: number): Promise<void> {
        await this.deleteScenarioDeTest(refScenario);
    }

}