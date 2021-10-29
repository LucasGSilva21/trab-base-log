export const getAllProductsPath = {
  get: {
    security: [{
      apiKeyAuth: []
    }],
    tags: ['Products'],
    summary: 'API para listar todos os produtos',
    description: 'Essa rota pode ser executa por qualquer usuário',
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/products'
            }
          }
        }
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}
