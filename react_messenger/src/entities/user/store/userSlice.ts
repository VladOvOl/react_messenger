import { createSlice, PayloadAction } from "@reduxjs/toolkit"


export interface IUserInitialState {
    user: IUser
}

export interface IUser {
  chats: [];
  email: string;
  id: string;
  name: string;
}

const initialState: IUserInitialState = {
   user:{
    chats:[],
    email:'',
    id:'',
    name:'',
   }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
        }
    }
})

export const { addUser} = userSlice.actions
export default userSlice.reducer