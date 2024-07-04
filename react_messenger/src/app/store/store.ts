import userSlice from '@/entities/user/store/userSlice'
import { configureStore } from '@reduxjs/toolkit'


const store = configureStore({
  reducer: {
    userSlice:userSlice
  } ,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store