export interface DeleteCustomerRepository {
  delete (id: string): Promise<void>
}
