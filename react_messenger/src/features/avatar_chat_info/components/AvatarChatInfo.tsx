import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar/avatar"

export const AvatarChatInfo = () => {



  return (
    <div className="w-full h-[10%] flex items-center gap-2">
      <Avatar 
        className='h-14 w-14'>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex-grow">
        <h1>tgtgtgt</h1>
        <h1>tgtgtgtgthtg</h1>
      </div>   
    </div>
  )
}
