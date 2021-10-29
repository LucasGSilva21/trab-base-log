import { DeleteProductRepository } from '../../repositories/product'

export class DeleteProduct {
  private readonly deleteProductRepository: DeleteProductRepository

  constructor (deleteProductRepository: DeleteProductRepository) {
    this.deleteProductRepository = deleteProductRepository
  }

  async delete (id: string): Promise<void> {
    await this.deleteProductRepository.delete(id)
  }
}
