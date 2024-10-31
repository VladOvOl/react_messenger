import { Button } from "@/shared/ui/button/ui/button"
import { Input } from "@/shared/ui/input/input"
import {SendHorizonalIcon,Paperclip} from 'lucide-react'



export const InputMessagePanel = () => {
  return (
    <div className="h-[10%] w-[100%] gap-5 flex items-center">
      <Button>
        <Paperclip/>
      </Button>
      <Input />
      <Button>
        <SendHorizonalIcon />
      </Button>
    </div>
  )
}
