/*
import { Request, Response } from "express"
import { createEventService, EventReturn, ReadAllEventsService, updateEventService,deleteEventService } from "../services/event.service"

//Grava dados
export const createEventController = async (req: Request,res:Response):Promise<Response> => {

    const newEvent: EventReturn = await createEventService(req.body)

    return res.status(201).json(newEvent)
}

//Ler dados
export const readAllEventController = async (req: Request,res:Response):Promise<Response> => {

    const events: EventReturn[] = await ReadAllEventsService()
    return res.status(200).json(events)
}

//Atualiza
export const updateEventController = async(req: Request,res:Response):Promise<Response> => {

    const { id } = req.params

    const event: EventReturn = await updateEventService(Number(id),req.body)

    return res.status(200).json(event)
}

//delete 
export const DeleteEventController = async(req:Request, res: Response):Promise<Response> => {

    const { id } = req.params

    const delEvent: EventReturn = await deleteEventService(Number(id))

    return res.status(200).json(delEvent)
}



*/