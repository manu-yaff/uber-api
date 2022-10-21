import request from 'supertest'
import { app } from '../src/server'

describe('Saying hi Palenca', () => {
  it('should return a greeting with 200 status', () => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .end((err, _) => {
        if (err) throw err
      })
  })
})

