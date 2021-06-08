import {useReducer} from 'react';

const initialInputState = {
    value: '',
    isEntered : false
}

const inputStateReducer = (state,action) => {
    if(action.type === 'INPUT'){
        return { value: action.value, isEntered: state.isEntered}
    }

    if(action.type==='BLUR'){
        return{ value: state.value, isEntered:true}
    }

    if(action.type==='RESET'){
        return { isTouched: false, value: ''}
    }
    return initialInputState;
}

const useInput = (valueValidation) => {
    const [inputState, dispatch] = useReducer(
        inputStateReducer, 
        initialInputState
    );

    const valueIsValid = valueValidation(inputState.value);
    const hasError = !valueIsValid && inputState.isEntered;

    const updateValueHandler = (event) => {
        dispatch({type: 'INPUT', value: event.target.value})
    }    

    const inputBlurHandler = (event) => {
        dispatch({type: 'BLUR'})
    }

    const reset = () => {
        dispatch({type: 'RESET'});
    };

    return {
        value: inputState.value,
        isValid: valueIsValid,
        hasError,
        updateValueHandler,
        inputBlurHandler,
        reset
    };
}

export default useInput;