import { NotFoundException } from "@nestjs/common";
import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";
import { Anomalie } from "src/entities/anomalie.entity";
import { AnomalieRepository } from "src/repository/anomalie.repository";
import { IAnomalieService } from "src/service/IAnomalie.service";
import { DataSource } from "typeorm/data-source";

export class AnomalieServiceImpl implements IAnomalieService {

    constructor(@InjectRepository(Anomalie) private anomalieRepository:AnomalieRepository, @InjectDataSource() private dataSource: DataSource){}


    //Méthode de récupération d'une anomalie sachant son id
    async getAnomalieById(refAnomalie: string): Promise<Anomalie> {
        const anomalie = await this.anomalieRepository.findOneBy({refAnomalie});
        if (!anomalie) {
          throw new NotFoundException(`Anomalie with ID ${refAnomalie} not found`);
        }
        return anomalie;
      }


    //Méthode pour la mise à jour d'une anomalie
    async updateAnomalie(anomalie: Anomalie): Promise<Anomalie> {
        return this.anomalieRepository.save(anomalie);
    }



    //Méthode pour ajouter une anomalie
    async addAnomalie(anomalie: Anomalie): Promise<Anomalie> {
        return this.anomalieRepository.save(anomalie);
    }


    //Méthode pour supprimer une anomalie
    async deleteAnomalie(refAnomalie: number): Promise<void> {
        await this.anomalieRepository.delete(refAnomalie);
      }
      

    //Methode pour récupérer la liste des anomalies
    async getAllAnomalie(): Promise<Anomalie[]> {
        return this.anomalieRepository.find();
    }

}