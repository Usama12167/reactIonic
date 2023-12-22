import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number,
  imageUrl:any
}

const initialState: CounterState = {
  value: 0,
  imageUrl:""
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   
    saveImage: (state:any,action) => {
        return{
            ...state,
            imageUrl: action.payload,
        }
     

    },
  
  },
})

// Action creators are generated for each case reducer function
export const { saveImage } = counterSlice.actions

export default counterSlice.reducer