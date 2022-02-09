import { useState} from 'react';

export const useForm = <T extends Object>(initState: T) => {
    const [state, setState] = useState(initState);

    const onChange =(e: any, field: keyof T) => {
        setState({
            ...state,
            [field] : e.target.value
        })
    }

    const reset = () => {
        setState(initState)
    }
    
    return {
        ...state,
        form: state,
        onChange,
        reset
    }
}
