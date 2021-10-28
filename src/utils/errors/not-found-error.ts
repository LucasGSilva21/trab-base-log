export class NotFoundError extends Error {
  constructor (id: string) {
    super(`Not Found: ${id}`)
    this.name = 'NotFoundError'
    this.message = `Id: ${id} is invalid`
  }
}
