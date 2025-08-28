/*
import { prisma } from ".."

export interface EventCreate {
    name: string
    location: string
    participants_quantity: number
    date: Date
    responsible: string
}

export interface EventReturn extends EventCreate{
    id:number
}

interface EventUpdate {
    name: string
    location: string
    participants_quantity: number
    date: Date
}

//Grava um servico novo
export const createEventService = async({name,location,participants_quantity,date,responsible}:EventCreate): Promise<EventReturn> => {
    const EventDate = new Date(date)
    const newEvent: EventReturn = await prisma.event.create({
        data:{
            name,
            location,
            participants_quantity,
            date:EventDate,
            responsible
        }
    })
    return newEvent
}

//Retorna todos os servicos
export const ReadAllEventsService = async ():Promise<EventReturn[]> => {
    return await prisma.event.findMany()
}

//Atualiza um determinado serviço
export const updateEventService = async(id:number,data:EventUpdate):Promise<EventReturn> => {
    const event: EventReturn = await prisma.event.update({
        where:{
            id
        },
        data
    })

    return event
}

//Deletar item
export const deleteEventService = async(id:number):Promise<EventReturn> => {
    const event: EventReturn = await prisma.event.delete({
        where:{
            id
        },
    })
    return event
}
*/