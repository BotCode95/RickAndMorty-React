import {useState} from 'react';

export const useForm = <T extends Object>(initState: T) => {
    const [state, setState] = useState(initState);

    const onChange =(e: any, field: keyof T) => {
        setState({
            ...state,
            [field] : e.target.value
        })
    }

    const reset = (field: keyof T) => {
        setState({
            ...state,
            [field] :''
        })
    }
    
    return {
        ...state,
        form: state,
        onChange,
        reset
    }
}
