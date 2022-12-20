import { Request, Response } from "express";
import userCreateService from "../services/userCreate.services";
import { IUserCreate } from "../interfaces/users";
import userListService from "../services/userList.services";
import userShowService from "../services/userShow.services";
import userDeleteService from "../services/userDelete.services";
import userUpdateService from "../services/userUpdate.services";

export default class userController {
  async store(request: Request, response: Response) {
    try {
        const {name,email,age,password} = request.body;

        const newUser = await userCreateService({name,email,age,password})

        return response.status(201).send(newUser);

    } catch (error) {
        if(error instanceof Error){
            return response.status(400).send({
                error: error.name,
                message:error.message
            })
        }
    }
  }

  async index(request: Request, response: Response) {
    try {
        const users = await userListService();

        return response.send(users)

    } catch (error) {
        if(error instanceof Error){
            return response.status(400).send({
                error: error.name,
                message:error.message
            })
        }
    }
  }

  async show(request: Request, response: Response) {
     const {id}= request.params;
    try {
        const userFind = await userShowService(id)
        return response.send(userFind)
    } catch (error) {
        if(error instanceof Error){
            return response.status(400).send({
                error: error.name,
                message:error.message
            })
        }
    }
  }

  async update(request: Request, response: Response) {
    try {
        const {id}= request.params;
        const {name,email,password,age} = request.body;

        const userUpdate = userUpdateService({id,name,email,password,age})

        return response.status(201).json({message: "User Update"})

    } catch (error) {
        if(error instanceof Error){
            return response.status(400).send({
                error: error.name,
                message:error.message
            })
        }
    }
  }

  async  delete(request: Request, response: Response) {
    try {
        const {id}= request.params;
        const userDelete = await userDeleteService(id)

        return response.status(200).json({message: "User deleted with sucess!"})

    } catch (error) {
        if(error instanceof Error){
            return response.status(400).send({
                error: error.name,
                message:error.message
            })
        }
    }
  }
}
