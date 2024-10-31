import { Button } from "@/shared/ui/button/ui/button"
import { Card } from "@/shared/ui/card/ui/card"
import {LucideMessageCircle, User, Search} from 'lucide-react'

type Props = {
  className:string
}


export const NavMobileFooter = ({className}:Props) => {

  return (
    <Card className={className}>

      <Button>
        <Search/>
      </Button>

      <Button>
        <LucideMessageCircle/>
      </Button>

      <Button>
        <User/>
      </Button>
     
    </Card>
  )
}
