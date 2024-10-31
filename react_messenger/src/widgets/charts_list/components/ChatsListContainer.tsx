import { ChartShortInfo } from "@/features/chat_short_info/components/ChartShortInfo"
import { useAppSelector } from "@/app/store/hooks"
import { useEffect, useState } from "react"
import { doc, DocumentData, onSnapshot } from "firebase/firestore"
import { db } from "@/app/lib/firebase"
import { unSub } from "../api/getUserChats"

const arr=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
export const ChatsListContainer = () => {

  const userId = useAppSelector(state => state.userSlice.user.id)
  const [data,setData] = useState([])
  
  useEffect(() => {
    if(userId){
      const unSub = onSnapshot(doc(db, "user_chats", userId), (doc) => {
        if(doc.data()){
          console.log(Array.isArray(doc.data()))
          setData(doc.data().chats)
          console.log(Array.isArray(data))
        }
       })
       
    }
    
    return () => {
      unSub(userId)
    }
  },[userId])

  console.log(Array.isArray(data))

  return (
    <div className="w-full h-full flex flex-col gap-3 overflow-y-scroll">
      { data.length === 1
        ? <p>Empty</p>
        :arr.map((index) => <ChartShortInfo key={index}/>)
      } 
    </div>
  )
}