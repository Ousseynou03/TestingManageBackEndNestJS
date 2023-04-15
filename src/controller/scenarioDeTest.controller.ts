import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ScenarioDeTest } from "src/entities/scenarioDeTest.entity";
import { ScenarioDeTestServiceImpl } from "src/serviceImpl/scenarioDeTest.serviceImpl";

@Controller('scenarioManager')
export class ScenarioDeTestController {


    constructor(private readonly scenarioDeTestServiceImpl : ScenarioDeTestServiceImpl){}

        //API de récupération de la liste des scenario de test
        @Get('/')
        public async getScenario() : Promise<ScenarioDeTest[]> {
            return this.scenarioDeTestServiceImpl.getAllScenario();
        }
    
        //API de récupération de un scenario de test sachant son id
        @Get(':id')
        public async getScenarioDeTestById(@Param('id') refScenario : number) : Promise<ScenarioDeTest>{
            return this.scenarioDeTestServiceImpl.getScenarioDeTestById(refScenario);
        }
    
    
        //API pour ajouter un cas de test
        @Post('/')
        public async createAnomalie(@Body() scenarioDeTest : ScenarioDeTest) : Promise<ScenarioDeTest>{
            return this.scenarioDeTestServiceImpl.addScenarioDeTest(scenarioDeTest);
        }
    
        //API pour modifier un scenario de test
        @Put('/')
        public async updateAnomalie(@Body() scenarioDeTest : ScenarioDeTest) : Promise<ScenarioDeTest>{
            return this.scenarioDeTestServiceImpl.updateScenarioDeTest(scenarioDeTest);
        }
    
    
        //API pour supprimer un scenario de test
        @Delete(':id')
        public async deleteAnomalie(@Param('id') refScenario : number) : Promise<void>{
            await this.scenarioDeTestServiceImpl.deleteScenarioDeTest(refScenario);
        }
    

}