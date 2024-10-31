import { useTheme } from "@/app/providers/ThemeProvoder"
import { AvatarShortInfo } from "@/features/avatar_short_info"
import { NavMobileFooter } from "@/features/nav_mobile_footer"
import { SearchDialog } from "@/features/search_dialogs" 
import { Card } from "@/shared/ui/card/ui/card"
import { ChatsListContainer } from "@/widgets/charts_list"
import { useEffect, useState } from "react"

type Props = {
  className: string
}

export const SideBar = ({className}:Props) => {

  const {setTheme} = useTheme()
  const [state, setState] = useState(true)

  useEffect(()=>{state?setTheme('light'):setTheme('dark')},[state])


  return (
    <Card className={className}>
      <SearchDialog/>
      <ChatsListContainer/>
      <AvatarShortInfo 
        className="
          w-full h-[10%] flex items-center gap-2 p-2
          mobile:hidden"
      />
      <NavMobileFooter className="
          hidden
          mobile:w-full mobile:h-[10%] mobile:flex mobile:justify-between mobile:items-center mobile:gap-2 mobile:p-2"/>
    </Card>
   
  )
}

