import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Testeur } from "src/entities/testeur.entity";
import { TesteurRepository } from "src/repository/testeur.repository";
import { ITesteurService } from "src/service/ITesteur.service";


@Injectable()
export class TesteurServiceImpl implements ITesteurService {

    constructor(@InjectRepository(Testeur) private testeurRepository : TesteurRepository){}

    //Méthode pour récupérer la liste des testeurs
    async getAllTesteur(): Promise<Testeur[]> {
        return this.testeurRepository.find();
    }


    //Méthode pour récupérer un testeur sachant son id
    async getTesteurById(idTesteur: number): Promise<Testeur> {
        const testeur = await this.testeurRepository.findOneBy({idTesteur});
        if (!testeur) {
          throw new NotFoundException(`Testeur with ID:${idTesteur} not found`);
        }
        return testeur;
      }

    //Méthode pour ajouter un testeur
    async addTesteur(testeur: Testeur): Promise<Testeur> {
        return this.testeurRepository.save(testeur);
    }


    //Méthode pour mettre à jour un testeur 
    async updateTesteur(testeur: Testeur): Promise<Testeur> {
        return this.testeurRepository.save(testeur);
    }


    //Méthode pour supprimer un testeur
    async deleteTesteur(idTesteur: number): Promise<void> {
        await this.testeurRepository.delete({idTesteur})
    }
    
}