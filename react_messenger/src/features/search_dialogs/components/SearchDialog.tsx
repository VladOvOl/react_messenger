import { Input } from "@/shared/ui/input/input"
import {useState } from "react"
import {X, Search} from 'lucide-react'

export const SearchDialog = () => {

  const [onFocus, setOnFocus] = useState(false)
  

  return (
    <div className="relative">
      <Input 
        className="rounded-lg"
        placeholder='Search' 
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
      />
      <X 
        className={onFocus ? 'absolute right-1 top-2 cursor-pointer hover:scale-110' : 'hidden'}
        color="grey"
      />
      <Search 
        className={onFocus ? 'hidden' : 'absolute right-1 top-2 cursor-pointer hover:scale-110'}
        color="grey"
      />
    </div>


    
  )
}