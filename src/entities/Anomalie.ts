import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Ticket } from "./Ticket";
import { Statut } from "src/enums/statut.enum";
import { Priorite } from "src/enums/priorite.enum";
import { Criticite } from "src/enums/criticite.enum";
import { Cloturee } from "src/enums/cloturee.enum";
import { EnCours } from "src/enums/enCours.enum";

@Entity("anomalie")
export class Anomalie {
  @PrimaryGeneratedColumn({ type: "bigint", name: "ref_anomalie" })
  refAnomalie: string;

  @Column("varchar", { name: "cloturee", nullable: true, length: 30 })
  cloturee: Cloturee | null;

  @Column("varchar", { name: "criticite", nullable: true, length: 30 })
  criticite: Criticite | null;

  @Column("varchar", { name: "en_cours", nullable: true, length: 30 })
  enCours: EnCours | null;

  @Column("varchar", { name: "priorite", nullable: true, length: 30 })
  priorite: Priorite | null;

  @Column("varchar", { name: "statut", nullable: true, length: 30 })
  statut: Statut | null;

  @OneToMany(() => Ticket, (ticket) => ticket.anomaliesRefAnomalie2)
  tickets: Ticket[];
}
