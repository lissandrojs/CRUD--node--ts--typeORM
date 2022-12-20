import { Request,Response,NextFunction } from "express";
import { AppDataSouce } from "../data-source";
import { UserDB } from "../entities/user.entity";

export const verifyEmail = async(request:Request,response:Response,next:NextFunction)=>{
    const {email} = request.body;
try {
    const userRepository =  AppDataSouce.getRepository(UserDB)

    const userFinEmail = await userRepository.findOne({where:{email}});
    
    if(!userFinEmail){
       return next()
    }

    return response.status(401).json({message:"Email Already Exists"})
    
    
} catch (error) {
    return response.status(401).json({message:"Email Already Exists"})
    
}
}

export default verifyEmail;