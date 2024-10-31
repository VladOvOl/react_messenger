import { useAuth } from "@/app/providers/AuthProvider"
import { useAppSelector } from "@/app/store/hooks"
import { RootState } from "@/app/store/store"
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar/avatar"
import { Button } from "@/shared/ui/button/ui/button"
import { Card } from "@/shared/ui/card/ui/card"
import { getAuth, signOut } from "firebase/auth"
import {LogOut} from 'lucide-react'

type Props = {
  className:string
}


export const AvatarShortInfo = ({className}:Props) => {

  const {removeToken} = useAuth()
  const user = useAppSelector((state:RootState) => state.userSlice.user)
  const onClick = async () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      removeToken()
    }).catch((error) => {
      console.log(error)
    });
  }

  return (
    <Card className={className}>
      <Avatar 
        className='h-14 w-14'>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex-grow">
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
      </div>
      <Button 
        className="w-fit h-fit flex items-center justify-end"
        onClick={() => onClick()}
      >
        <LogOut/>
      </Button>    
    </Card>
  )
}
