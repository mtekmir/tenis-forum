import next from 'next'
import express from 'express'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev }) as any
const handle = app.getRequestHandler()
const PORT = 4000

app
  .prepare()
  .then(() => {
    const server = express()

    server.get('/uyelik/dogrulama/:token', (req, res) => {
      const actualPage = '/uyelik/dogrula'
      const queryParams = { token: req.params.token }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('/uyelik/yeni-sifre/:token', (req, res) => {
      const actualPage = '/uyelik/yeni-sifre'
      const queryParams = { token: req.params.token }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('/forum/:id/baslik/yeni', (req, res) => {
      const queryParams = { forumId: req.params.id }
      app.render(req, res, '/baslik/yeni', queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(PORT, (err: any) => {
      if (err) {
        throw err
      }
      console.log(`> Ready on http://localhost://${PORT}`)
    })
  })
  .catch((ex: any) => {
    console.error(ex.stack)
    process.exit(1)
  })
