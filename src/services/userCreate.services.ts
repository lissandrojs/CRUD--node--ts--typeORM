import { AppDataSouce } from "../data-source";
import { UserDB } from "../entities/user.entity";
import { IUserCreate } from "../interfaces/users";
import bcrypt from "bcrypt"


const userCreateService =async ({name,email,age,password}:IUserCreate)=>{

    console.log("oi")
    const userRepository = AppDataSouce.getRepository(UserDB)
    const users = await userRepository.find();

    const user =  new UserDB();
    user.name = name;
    user.email = email;
    user.password = bcrypt.hashSync(password,10)
    user.age =age;
    
    userRepository.create(user);
    await userRepository.save(user);

    return user;
}

export default userCreateService;