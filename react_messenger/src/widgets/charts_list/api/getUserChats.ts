import { db } from "@/app/lib/firebase";
import { doc, onSnapshot } from "firebase/firestore";

export const unSub = async (userId: string) => {
  const response=''
   onSnapshot(doc(db, "user_chats", userId), (doc) => {
    
  })
  return response
}