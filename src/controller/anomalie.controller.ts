import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Anomalie } from "src/entities/anomalie.entity";
import { AnomalieServiceImpl } from "src/serviceImpl/anomalie.serviceImpl";

@Controller('anomalieManager')
export class AnomalieController {

    constructor(private readonly anomalieServiceImpl : AnomalieServiceImpl){}


    //API de récupération de la liste des anomalie
    @Get('/')
    public async getAnomalie() : Promise<Anomalie[]> {
        return this.anomalieServiceImpl.getAllAnomalie();
    }

    //API de récupération de l'anomalie sachant son id
    @Get(':id')
    public async getAnomalieById(@Param('id') refAnomalie : number) : Promise<Anomalie>{
        return this.anomalieServiceImpl.getAnomalieById(refAnomalie);
    }


    //API pour ajouter une anomalie
    @Post('/')
    public async createAnomalie(@Body() anomalie : Anomalie) : Promise<Anomalie>{
        return this.anomalieServiceImpl.addAnomalie(anomalie);
    }

    //API pour modifier une anomalie
    @Put('/')
    public async updateAnomalie(@Body() anomalie : Anomalie) : Promise<Anomalie>{
        return this.anomalieServiceImpl.updateAnomalie(anomalie);
    }


    //API pour supprimer une anomalie
    @Delete(':id')
    public async deleteAnomalie(@Param('id') refAnomalie : number) : Promise<void>{
        await this.anomalieServiceImpl.deleteAnomalie(refAnomalie);
    }







}