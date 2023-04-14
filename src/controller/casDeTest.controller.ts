import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CasDeTest } from "src/entities/casDeTest.entity";
import { CasDeTestServiceImpl } from "src/serviceImpl/casDeTest.serviceImpl";

@Controller('casTestManager')
export class CasDeTestController {

    constructor(private readonly casDeTestServiceImpl : CasDeTestServiceImpl){}


        //API de récupération de la liste des cas de test
        @Get('/')
        public async getCasDeTest() : Promise<CasDeTest[]> {
            return this.casDeTestServiceImpl.getAllCasDeTest();
        }
    
        //API de récupération d' un cas de test sachant son id
        @Get(':id')
        public async getCasDeTestById(@Param('id') refCasTest : number) : Promise<CasDeTest>{
            return this.casDeTestServiceImpl.getCasDeTestById(refCasTest);
        }
    
    
        //API pour ajouter un cas de test
        @Post('/')
        public async createCasDeTest(@Body() casDeTest : CasDeTest) : Promise<CasDeTest>{
            return this.casDeTestServiceImpl.addCasDeTest(casDeTest);
        }
    
        //API pour modifier une anomalie
        @Put('/')
        public async updateCasDeTest(@Body() casDeTest : CasDeTest) : Promise<CasDeTest>{
            return this.casDeTestServiceImpl.updateCasDeTest(casDeTest);
        }
    
    
        //API pour supprimer une anomalie
        @Delete(':id')
        public async deleteCasDeTest(@Param('id') refCasTest : number) : Promise<void>{
            await this.casDeTestServiceImpl.deleteCasDeTest(refCasTest);
        }
    
}