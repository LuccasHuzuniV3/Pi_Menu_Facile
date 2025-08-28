import { Request, Response } from "express";
import { createStatusService, deleteStatusService, readAllStatusService, StatusReturn } from "../services/status.service";


//Adicionando um status novo
export const createStatusController = async(req:Request,res:Response):Promise<Response> => {

    try{
        const newStatus = await createStatusService(req.body)
        return res.status(200).json(newStatus)
    }catch(error){
        return res.status(500).json({message:'Erro ao adicionar o status'})
    }

}

//Pegando os status do sistema
export const realAllStatusController = async(req:Request,res:Response):Promise<Response> =>{
    try{
        const getStatus: StatusReturn[] = await readAllStatusService()
        return res.status(200).json(getStatus)
    }catch(error){
        return res.status(500).json({message:'Erro ao buscar os status'})
    }
}

//Apagando o status
export const deleteStatusController = async(req:Request,res:Response):Promise<Response> => {

    const { id } = req.params
    try{
        const delStatus = await deleteStatusService(Number(id))
        return res.status(200).json(delStatus)
    }catch(error){
        return res.status(500).json({message:'Erro ao apagar o status'})
    }

}