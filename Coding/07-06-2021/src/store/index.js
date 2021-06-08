import {createSlice, configureStore} from '@reduxjs/toolkit';

const initialCounterState = { counter: 0 , showCounter : true}
const initialAuthState = { isAuthenticated: false }
const counterSlice = createSlice({
    name:'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter;
        }
    }
});

const authSlice = createSlice({
    name:'authentication',
    initialState:initialAuthState,
    reducers: {
        login(state){
            state.isAuthenticated = true;
        },
        logOut(state){
            state.isAuthenticated = false;
        }
    }
});

const store = configureStore({
    reducer : {
        counter: counterSlice.reducer,
        authentication : authSlice.reducer
    }
});

export const counterAction = counterSlice.actions;
export const authAction = authSlice.actions;
export default store;

