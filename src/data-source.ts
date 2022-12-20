import { DataSource } from "typeorm";
import { UserDB } from "./entities/user.entity";
require("dotenv").config();


export const AppDataSouce = new DataSource({
    type:"postgres",
    host:"localhost",
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,

    synchronize:true,
    logging:true,
    entities: [UserDB],
    migrations:["src/migrations/*.ts"]
})

AppDataSouce.initialize().then(()=>{console.log("inicializou o banco de dados")}).catch((err)=>{console.error("eeerrrou",err)})