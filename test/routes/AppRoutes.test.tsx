import { render, screen } from "@testing-library/react"
import AppRoutes from "../../src/routes/AppRoutes"
import { useAuth } from "../../src/hooks/useAuth"
import { MemoryRouter } from "react-router-dom"
// import { CalendarPage } from "../../src/calendar"
jest.mock("../../src/hooks/useAuth")

jest.mock('../../src/calendar', () => ({
    CalendarPage: () => <h1>Hola Mundo</h1>
}))

describe('Test AppRouter', () => {

    const mockvalidateToken = jest.fn()

    beforeEach(() => jest.clearAllMocks())

    test('Valores por defecto ', () => {

        (useAuth as jest.Mock).mockReturnValue({
            stateAuth: 'pending',
            error: null,
            user: null,
            validateToken: mockvalidateToken
        })

        render(<AppRoutes />)

        expect(screen.getByText('Cargando....')).toBeTruthy()
        expect(mockvalidateToken).toBeCalled()
    })

    test('Al no  estar autenticado debe mostrar el login ', () => {

        (useAuth as jest.Mock).mockReturnValue({
            stateAuth: 'logout',
            error: null,
            user: null,
            validateToken: mockvalidateToken
        })

        const { container } = render(
            <MemoryRouter>
                <AppRoutes />
            </MemoryRouter>
        )

        expect(screen.getByText('Ingreso')).toBeTruthy()
        expect(screen.getByText('Registro')).toBeTruthy()
        expect(container).toMatchSnapshot()
    })

    test('Al mostrar el calendar si estamos autenticados', () => {

        (useAuth as jest.Mock).mockReturnValue({
            stateAuth: 'login',
            error: null,
            user: {
                id: '123',
                name: 'Oscar',
                email: 'oscar@gmal.com',
                status: true
            },
            validateToken: mockvalidateToken
        })

        render(
            <MemoryRouter>
                <AppRoutes />
            </MemoryRouter>
        )


        expect(screen.getByText('Hola Mundo')).toBeTruthy()

    })

})
