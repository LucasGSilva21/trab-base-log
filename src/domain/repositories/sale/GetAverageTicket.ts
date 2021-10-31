export interface GetAverageTicketRepository {
  getAverageTicket (initialDate: Date, finalDate: Date): Promise<string>
}
