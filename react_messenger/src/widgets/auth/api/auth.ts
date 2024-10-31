import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {doc,setDoc } from "firebase/firestore"
import { db } from "@/app/lib/firebase"
import { ILoginForm, IRegistrationForm } from "../types/IAuth";
import { FirebaseError } from "firebase/app";

type Response = {
  status: 'success'|'error',
  token: string,
  errorMessage?: string
}

export const registrationUser = async(data:IRegistrationForm):Promise<Response> => {
  let response: Response ={
    status:'success',
    token:''
  }
  try {
    const auth = getAuth(); 
    const {user} = await createUserWithEmailAndPassword(auth, data.email, data.password)
    response = {
      status: "success",
      token: user.uid,
    } 
    await setDoc(doc(db, "users",user.uid),{
      email: user.email,
      name: data.name,
      id: user.uid,
      chats:[]
    })  

    await setDoc(doc(db, "user_chats",user.uid),{
      chats:[]
    })  

    return response 
  } catch (error) {
    if (error instanceof FirebaseError) {
      return {
        status: "error",
        token:'',
        errorMessage:error.code
      }
    }else{
      return {
        status: "error",
        token:'',
        errorMessage:"Unknown error"
      }
    }
  }
}

export const loginUser = async(data:ILoginForm):Promise<Response> => {
  let response: Response ={
    status:'success',
    token:''
  }
  try {
    const auth = getAuth();
    const {user} = await signInWithEmailAndPassword(auth, data.email, data.password)
    response = {
      status: "success",
      token: user.uid,
    } 
    return response 
    
  } catch (error) {
      if (error instanceof FirebaseError) {
        return {
          status: "error",
          token:'',
          errorMessage:error.code
          
        }
      }else{
        return {
          status: "error",
          token:'',
          errorMessage:"Unknown error"
        }
      }
    }
  }
