import {
  Entity,
  Column,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

import{v4 as uuid} from 'uuid'


@Entity()
export class UserDB {
    @PrimaryGeneratedColumn("uuid")
    readonly id:string;

    @Column()
    name:string;

    @Column()
    email:string;

    @Column()
    password:string;

    @Column()
    age:number;

    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn()
    update_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}
