import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar/avatar"
import { Card } from "@/shared/ui/card/ui/card"

export const ChartShortInfo = () => {

  return (
    <Card 
      className="w-full h-fit flex items-center gap-2 p-2 cursor-pointer
        hover:opacity-70"
    >
      <Avatar 
        className='h-14 w-14'>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex-grow">
        <h1>Vlad</h1>
        <h1>Vlad2fvdfbg....</h1>
      </div>   
    </Card>
  )
}
