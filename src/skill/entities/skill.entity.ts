import { Column, DeleteDateColumn, Entity,  ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cv } from "../../cv/entities/cv.entity";

@Entity('skill')
export class Skill{
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  designation: string;
  @DeleteDateColumn({select:false})
  deletedAt: Date;
  @ManyToMany(()=>Cv,(cv)=>cv.skills)
  cvs: Cv[];




}
