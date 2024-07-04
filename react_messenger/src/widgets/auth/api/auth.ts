import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {doc,setDoc } from "firebase/firestore"
import { db } from "@/app/lib/firebase"
import { ILoginForm, IRegistrationForm } from "../types/IAuth";


export const registrationUser = async(data:IRegistrationForm):Promise<string> => {
  let token = ''
  try {
    const auth = getAuth(); 
    const {user} = await createUserWithEmailAndPassword(auth, data.email, data.password)
    token = user.uid
    await setDoc(doc(db, "users",user.uid),{
      email: user.email,
      name: data.name,
      id: user.uid,
      chats:[]
    })  
  } catch (error) {
    console.log('RegistrationAuth')
    console.log(error)
  }

  return token 
}

export const loginUser = async(data:ILoginForm):Promise<string> => {
  let token = ''
  try {
    const auth = getAuth();
    const {user} = await signInWithEmailAndPassword(auth, data.email, data.password)
    token = user.uid
    
  } catch (error) {
    console.log('LoginAuth')
    console.log(error)
  }

  return token 
}