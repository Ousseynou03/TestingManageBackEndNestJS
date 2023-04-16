import { Body, Controller, Post, Get, Param, Put, Delete, InternalServerErrorException } from "@nestjs/common";
import { Releas } from "src/entities/releas.entity";
import { ReleasServiceImpl } from "src/serviceImpl/releas.serviceImpl";


@Controller('releaseManager')
export class ReleasController {

    constructor(private readonly releasServiceImpl : ReleasServiceImpl){}

    //API de récupération de la liste des releases
    @Get('/')
    public async getRelease() : Promise<Releas[]> {
        return this.releasServiceImpl.getAllRelease();
    }

    //API de récupération d'une release sachant son id
    @Get(':id')
    public async getReleasById(@Param('id') refRelease : number) : Promise<Releas>{
        return this.releasServiceImpl.getReleasById(refRelease);
    }


    //API pour ajouter une release
    @Post('/')
    public async createReleas(@Body() releas : Releas) : Promise<Releas>{
        try {
            return await this.releasServiceImpl.addReleas(releas);
        } catch (error) {
            throw new InternalServerErrorException('Une erreur est survenue lors de l\'ajout d\'une release');
            }
        }



    //API pour modifier une anomalie
    @Put(':id')
    public async updateReleas(@Param('id') refRelease: number,@Body() releas : Releas) : Promise<Releas>{
        releas.refRelease = refRelease;
        return this.releasServiceImpl.updateReleas(releas);
    }
    
    
    //API pour supprimer une release
    @Delete(':id')
    public async deleteRelease(@Param('id') refReleas : number) : Promise<void>{
        await this.releasServiceImpl.deleteReleas(refReleas);
    }
}

