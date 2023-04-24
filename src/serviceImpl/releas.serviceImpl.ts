import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";
import { Releas } from "src/entities/releas.entity";
import { ReleasRepository } from "src/repository/releas.repository";
import { IReleasService } from "src/service/IReleas.service";
import { DataSource } from "typeorm";



@Injectable()
export class ReleasServiceImpl implements IReleasService {

    constructor(@InjectRepository(Releas) private releasRepository : ReleasRepository,
    @InjectDataSource() private dataSource: DataSource) {}


    //Méthode pour récupérer la liste des Releases
    async getAllRelease(): Promise<Releas[]> {
        return this.releasRepository.find();
    }


    //Méthode pour récupérer une release sachant son id
    async getReleasById(refRelease: number): Promise<Releas> {
        const releas = await this.releasRepository.findOneBy({refRelease});
        if (!releas) {
          throw new NotFoundException(`Anomalie with ID:${refRelease} not found`);
        }
        return releas;
    }


    //Méthode pour ajouter une release
    async addReleas(releas: Releas): Promise<Releas> {
        return this.releasRepository.save(releas);
    }

    //Méthode pour mettre à jour une release
    async updateReleas(releas: Releas): Promise<Releas> {
        return this.releasRepository.save(releas);
    }


    //Méthode pour supprimer une release
    async deleteReleas(refRelease: number): Promise<void> {
        await this.releasRepository.delete({refRelease})
    }



    //Récupération de la liste des tickets pour chaque release
    async findReleasesWithTickets(): Promise<any[]> {
        return await this.dataSource.query(`SELECT * FROM releas LEFT JOIN ticket ON releas.ref_release = ticket.release_ref_release`);
      }

}