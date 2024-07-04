import { useTheme } from "@/app/providers/ThemeProvoder"
import { AvatarShortInfo } from "@/features/avatar_short_info"
import { SearchDialog } from "@/features/search_dialogs" 
import { Card } from "@/shared/ui/card/ui/card"
import { Switch } from "@/shared/ui/switch/switch"
import { useEffect, useState } from "react"


export const SideBar = () => {

  const {setTheme} = useTheme()
  const [state, setState] = useState(false)

  useEffect(()=>{state?setTheme('light'):setTheme('dark')},[state])


  return (
    <Card className="w-full h-full p-3 flex flex-col justify-between rounded-2xl gap-3">
      <SearchDialog/>
      <Switch
        checked={state}
        onCheckedChange={() => setState(!state)}
      />
      <AvatarShortInfo/>
    </Card>
   
  )
}

