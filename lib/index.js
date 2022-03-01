import { createServer } from 'vite'

export async function dev () {
  const server = await createServer({

  })
  await server.listen()

  server.printUrls()
}
