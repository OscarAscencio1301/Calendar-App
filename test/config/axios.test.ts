import connectAPI from "../../src/config/axios"

describe('Testing axios.ts', () => {
  test('Configuración por defecto ', () => {
    expect(connectAPI.defaults.baseURL).toBe(process.env.VITE_API_URL)
  })

  test('Debe de tener el jwt en los headers', async () => {

    const token = "ABCDE"

    localStorage.setItem('jwt', token)

    const res = await connectAPI.get('/auth')

    expect(res.config.headers['jwt']).toBe(token)

  })

})
