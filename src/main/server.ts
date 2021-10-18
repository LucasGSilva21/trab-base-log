
import { PgConnection } from '../infra/databases/postgres/helpers/connection'

const port = 3333

PgConnection.getInstance().connect()
  .then(async () => {
    const { app } = await import('./config/app')
    app.listen(port, () => console.log(`Server running at http://localhost:${port}`))
  })
  .catch(console.error)
