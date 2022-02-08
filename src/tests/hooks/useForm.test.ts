import { act, renderHook } from '@testing-library/react-hooks'
import { useForm } from '../../hooks/useForm'

describe('Test useForm', () => {
    const initValues = {
        location : 'Citadel of Ricks'
    }

    test('default form', () => {
        const {result} = renderHook(() => useForm(initValues));
        const {form,onChange,reset } = result.current;
        expect(form).toEqual(initValues);
        expect(typeof onChange).toBe('function');
        expect(typeof reset).toBe('function');
    })

    test('change value location', () => {
        const {result} = renderHook(() => useForm(initValues));
        const { onChange } = result.current;
        act(() => {
            onChange({target: {
                name: 'location',
                value: 'Cita'
            }}, 'location');
        });
        const { form } = result.current;
        expect(form).toEqual({...initValues, location: 'Cita'})
    })

    
    test('reset form', () => {
        const {result} = renderHook(() => useForm(initValues));
        const {onChange, reset } = result.current;
        act(() => {
            onChange({target: {
                name: 'location',
                value: 'Cita'
            }}, 'location');

            reset();
        });
        const { form } = result.current;
        expect(form).toEqual({...initValues, location: 'Citadel of Ricks'})
    })
})