import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Ticket } from "./Ticket";

@Entity("testeur")
export class Testeur {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id_testeur" })
  idTesteur: string;

  @Column("varchar", { name: "matricule", nullable: true, length: 255 })
  matricule: string | null;

  @Column("varchar", { name: "nom", nullable: true, length: 255 })
  nom: string | null;

  @Column("varchar", { name: "prenom", nullable: true, length: 255 })
  prenom: string | null;

  @OneToMany(() => Ticket, (ticket) => ticket.testeurIdTesteur2)
  tickets: Ticket[];
}
