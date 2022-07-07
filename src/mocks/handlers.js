import { rest } from 'msw'

const BASE_URL = 'https://bp-pokemons.herokuapp.com'

export const handlers = [
  rest.get(`${BASE_URL}/?idAuthor=1`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 43,
          name: 'Wartortle Editado',
          image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png',
          attack: 18,
          defense: 76,
          hp: 0,
          type: 'Prueba',
          id_author: 1
        },
        {
          id: 127,
          name: 'Pikachu',
          image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
          attack: 43,
          defense: 37,
          hp: 100,
          type: 'Test type',
          id_author: 1
        }
      ])
    )
  }),
  rest.post(`${BASE_URL}/?idAuthor=1`, (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        name: 'New Pokemon',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/099.png',
        attack: 43,
        defense: 37,
        hp: 100,
        type: 'Test type',
        id_author: 1
      })
    )
  }),
  rest.get(`${BASE_URL}/:id`, (req, res, ctx) => {
    return res(
      ctx.json({
        id: 127,
        name: 'Pikachu',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
        attack: 43,
        defense: 37,
        hp: 100,
        type: 'Test type',
        id_author: 1
      })
    )
  }),
  rest.get(`${BASE_URL}/:count?idAuthor=1`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 43,
          name: 'Wartortle Editado',
          image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png',
          attack: 18,
          defense: 76,
          hp: 0,
          type: 'Prueba',
          id_author: 1
        },
        {
          id: 127,
          name: 'Pikachu',
          image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
          attack: 43,
          defense: 37,
          hp: 100,
          type: 'Test type',
          id_author: 1
        }
      ])
    )
  }),
  rest.put(`${BASE_URL}/:id`, (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        name: 'Updated Pokemon',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/099.png',
        attack: 43,
        defense: 37,
        hp: 100,
        type: 'Test type',
        id_author: 1
      })
    )
  }),
  rest.delete(`${BASE_URL}/:id`, (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        name: 'Deleted Pokemon',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/099.png',
        attack: 43,
        defense: 37,
        hp: 100,
        type: 'Test type',
        id_author: 1
      })
    )
  })
]
