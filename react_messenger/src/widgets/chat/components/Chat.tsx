import { InputMessagePanel } from "@/features/input_message_panel"
import { ChatMessages } from "./ChatMessages"
import { AvatarChatInfo } from "@/features/avatar_chat_info/components/AvatarChatInfo"
import { Separator } from "@/shared/ui/separator/separator"


export const Chat = () => {
  return (
    <div className="w-full h-full flex">
      <div className="w-[70%] h-full flex flex-col justify-between">
        <AvatarChatInfo/>
        <Separator/>
        <ChatMessages/>
        <Separator/>
        <InputMessagePanel/>
      </div>
      <Separator orientation="vertical" className="ml-3"/>
    </div>
  )
}