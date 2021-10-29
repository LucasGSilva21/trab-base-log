import paths from './paths'
import components from './components'
import schemas from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'BaseLog - Gestão de vendas',
    description: 'Essa é a documentação da API',
    version: '1.0.0'
  },
  servers: [{
    url: '/api',
    description: 'Servidor Principal'
  }],
  tags: [{
    name: 'Products',
    description: 'APIs relacionadas a produtos'
  }],
  paths,
  schemas,
  components
}
