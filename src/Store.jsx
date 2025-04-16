import { configureStore } from '@reduxjs/toolkit'
import {Counterreducer} from './components/CounterSlice'


export const store = configureStore({
    reducer:{
        counter:Counterreducer
    }
})