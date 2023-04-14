import { Body, Controller, Post, Get, Param, Put, Delete } from "@nestjs/common";
import { Releas } from "src/entities/releas.entity";
import { ReleasServiceImpl } from "src/serviceImpl/releas.serviceImpl";


@Controller('releaseManager')
export class ReleasController {

    constructor(private readonly releasServiceImpl : ReleasServiceImpl){}

    //API de récupération de la liste des releases
    @Get('/')
    public async getAnomalie() : Promise<Releas[]> {
        return this.releasServiceImpl.getAllRelease();
    }

    //API de récupération de l'anomalie sachant son id
    @Get(':id')
    public async getReleasById(@Param('id') refReleas : number) : Promise<Releas>{
        return this.releasServiceImpl.getReleasById(refReleas);
    }


    //API pour ajouter une release
    @Post('/')
    public async createReleas(@Body() releas : Releas) : Promise<Releas>{
        return this.releasServiceImpl.addReleas(releas);
    }



    //API pour modifier une anomalie
    @Put('/')
    public async updateReleas(@Body() releas : Releas) : Promise<Releas>{
        return this.releasServiceImpl.updateReleas(releas);
    }
    
    
    //API pour supprimer une anomalie
    @Delete(':id')
    public async deleteRelease(@Param('id') refReleas : number) : Promise<void>{
        await this.releasServiceImpl.deleteReleas(refReleas);
    }
}

