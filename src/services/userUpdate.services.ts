import { UserDB } from "../entities/user.entity";
import { AppDataSouce } from "../data-source";
import bcrypt from "bcrypt"
import { IUserUpdate } from "../interfaces/users";

const userUpdateService = async ({id,name,email,password,age}:IUserUpdate)=> {
    const userRepository = AppDataSouce.getRepository(UserDB);

    const users = await userRepository.find();

    const account = users.find((user)=> user.id === id)
    
    const newPassword = bcrypt.hashSync(password as string,10)

    await userRepository.update(account!.id,{name:name || account!.name, email:email || account!.email, password:newPassword || account!.password, age:age || account!.age})
    return true
}

export default userUpdateService;