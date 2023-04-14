import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Anomalie } from './entities/Anomalie';
import { CasDeTest } from './entities/CasDeTest';
import { Releas } from './entities/Releas';
import { ScenarioDeTest } from './entities/ScenarioDeTest';
import { Testeur } from './entities/Testeur';
import { Ticket } from './entities/Ticket';
import { DataSource } from 'typeorm';
import { AnomalieRepository } from './repository/anomalie.repository';
import { CasDeTestRepository } from './repository/casDeTest.repository';
import { ReleasRepository } from './repository/releas.repository';
import { ScenarioDeTestRepository } from './repository/scenarioDeTest.repository';
import { TesteurRepository } from './repository/testeur.repository';
import { TicketRepository } from './repository/ticket.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'testingManageNestJS',
      entities: [Anomalie,CasDeTest,Releas,ScenarioDeTest,Testeur,Ticket],
      synchronize: false,
      ////synchronize: true, ne doit pas être utilisé en production
    }),
    //TypeOrmModule.forFeature([Anomalie, CasDeTest, Releas, ScenarioDeTest, Testeur,Ticket]),
  ],
  controllers: [AppController],
  providers: [AppService, AnomalieRepository, CasDeTestRepository,ReleasRepository,ScenarioDeTestRepository,TesteurRepository, TicketRepository],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}

}
