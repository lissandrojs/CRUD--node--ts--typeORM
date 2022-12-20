import { UserDB } from "../entities/user.entity";
import { AppDataSouce } from "../data-source";

const userShowService = async(id:string)=>{
    const userRepository =  AppDataSouce.getRepository(UserDB)

    const userFind = await userRepository.findOne({where:{id}});

    if(!userFind){
        throw new Error("User not exists")
    }
    return userFind
}

export default userShowService