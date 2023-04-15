import { ScenarioDeTest } from "src/entities/scenarioDeTest.entity";

export interface IScenarioDeTestService {

    getAllScenario(): Promise<ScenarioDeTest[]>;

 
    getScenarioDeTestById(refScenario : number) : Promise<ScenarioDeTest>
   
   
   
    updateScenarioDeTest(scenarioDeTest : ScenarioDeTest): Promise<ScenarioDeTest>
   
    
    
    addScenarioDeTest(scenarioDeTest : ScenarioDeTest) : Promise<ScenarioDeTest>
   
    
    
    deleteScenarioDeTest(refScenario : number) : Promise<void>
    
}