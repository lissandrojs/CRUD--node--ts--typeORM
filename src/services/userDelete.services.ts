import { AppDataSouce } from "../data-source"
import { UserDB } from "../entities/user.entity"

const userDeleteService =async(id:string)=>{
    const userRepository = AppDataSouce.getRepository(UserDB)

    const users = await userRepository.find()

    const account = users.find((user)=> user.id === id)

    await userRepository.delete(account!.id)

    return true
}

export default userDeleteService;