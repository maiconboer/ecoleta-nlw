import { Request, Response } from 'express'
import knex from '../database/connection'

class ItemsController {
    async index(request: Request, response: Response) {
        const items = await knex('items').select('*')

        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                // url para acesso local no celular - voltar para correta
                image_url: `http://192.168.15.7:3333/uploads/${item.image}`

                // url correta
                // image_url: `http://localhost:3333/uploads/${item.image}`
            }
        })

        return response.json(serializedItems)
    }
}

export default ItemsController;