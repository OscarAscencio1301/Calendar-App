import { fireEvent, render, screen } from "@testing-library/react"
import { ButtonDelete } from "../../../src/calendar"
import { useCalendar } from "../../../src/hooks/useClendar"

jest.mock('../../../src/hooks/useClendar')



describe('Testing Button Delete', () => {

    const startAction = jest.fn();

    beforeEach(() => jest.clearAllMocks())


    test('Testing valores Iniciales ', () => {

        (useCalendar as jest.Mock).mockReturnValue({
            viewDelete: false,
            startDeleteEvent: jest.fn(),
            eventActive: null
        })

        render(<ButtonDelete />)
        const button = screen.getByLabelText('btn-delete')

        expect(button.classList.toString()).toContain('btn')
        expect(button.classList.toString()).toContain('btn-danger')
        expect(button.classList.toString()).toContain('buttonStyle2')


        expect(button.style.display).toBe('none')


    })

    test('Disparar funion al dar click en botón ', async () => {


        (useCalendar as jest.Mock).mockReturnValue({
            viewDelete: true,
            startDeleteEvent: startAction,
            eventActive: {
                id: 123
            }
        })

        render(<ButtonDelete />)
        const button = screen.getByLabelText('btn-delete')

        fireEvent.click(button)



        expect(startAction).toBeCalled()


    })

})