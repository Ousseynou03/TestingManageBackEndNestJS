import {Column,Entity,Index,JoinColumn,ManyToOne,PrimaryGeneratedColumn,
} from "typeorm";
import { Releas } from "./Releas";
import { Anomalie } from "./Anomalie";
import { CasDeTest } from "./CasDeTest";
import { Testeur } from "./Testeur";
import { Types } from "src/enums/Types.enum";


@Entity("ticket")
export class Ticket {
  @PrimaryGeneratedColumn({ type: "bigint", name: "ref_ticket" })
  refTicket: string;

  @Column("varchar", { name: "titre", nullable: true, length: 255 })
  titre: string | null;

  @Column("varchar", { name: "type", nullable: true, length: 30 })
  type: Types | null;

  @Column("bigint", { name: "anomalies_ref_anomalie", nullable: true })
  anomaliesRefAnomalie: string | null;

  @Column("bigint", { name: "cas_de_test_ref_cas_test", nullable: true })
  casDeTestRefCasTest: string | null;

  @Column("bigint", { name: "release_ref_release" })
  releaseRefRelease: string;

  @Column("bigint", { name: "testeur_id_testeur", nullable: true })
  testeurIdTesteur: string | null;

  @ManyToOne(() => Releas, (releas) => releas.tickets, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([
    { name: "release_ref_release", referencedColumnName: "refRelease" },
  ])
  releaseRefRelease2: Releas;

  @ManyToOne(() => Anomalie, (anomalie) => anomalie.tickets, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([
    { name: "anomalies_ref_anomalie", referencedColumnName: "refAnomalie" },
  ])
  anomaliesRefAnomalie2: Anomalie;

  @ManyToOne(() => CasDeTest, (casDeTest) => casDeTest.tickets, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([
    { name: "cas_de_test_ref_cas_test", referencedColumnName: "refCasTest" },
  ])
  casDeTestRefCasTest2: CasDeTest;

  @ManyToOne(() => Testeur, (testeur) => testeur.tickets, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([
    { name: "testeur_id_testeur", referencedColumnName: "idTesteur" },
  ])
  testeurIdTesteur2: Testeur;
}
