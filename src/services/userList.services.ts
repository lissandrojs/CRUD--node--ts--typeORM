import { UserDB } from "../entities/user.entity";
import { AppDataSouce } from "../data-source";

const userListService = async()=>{
    const userRepository = AppDataSouce.getRepository(UserDB)
    
    const users = userRepository.find();

    return users;
}

export default userListService;