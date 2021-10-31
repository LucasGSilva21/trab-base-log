import { GetAverageTicketRepository } from '../../repositories/sale'

export class GetAverageTicket {
  private readonly getAverageTicketRepository: GetAverageTicketRepository

  constructor (getAverageTicketRepository: GetAverageTicketRepository) {
    this.getAverageTicketRepository = getAverageTicketRepository
  }

  async getAverageTicket (initialDate: Date, finalDate: Date): Promise<string> {
    const avg = await this.getAverageTicketRepository.getAverageTicket(initialDate, finalDate)

    return avg
  }
}
