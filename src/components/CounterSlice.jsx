import {createSlice} from '@reduxjs/toolkit'
const initialvalue ={
    value:0,
}

const CounterSlice = createSlice({
    name:'Counter',
    initialState:initialvalue,
    reducers:{
        increment:(state)=>{
            state.value+=1;
        }
    }

})

export const {increment}=CounterSlice.actions
export const Counterreducer= CounterSlice.reducer