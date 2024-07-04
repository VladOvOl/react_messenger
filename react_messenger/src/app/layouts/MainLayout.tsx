import { Card } from '@/shared/ui/card/ui/card'
import { SideBar } from '@/widgets/sidebar'
import { Outlet } from 'react-router-dom'


const MainLayout = () => {
  return (
    <section 
      className='h-full w-full p-5 flex 
        mobile:p-2'>
      <div 
        className='h-full w-full flex gap-5 
          mobile:flex-col-reverse mobile:gap-2'
      >
        <nav 
          className='w-[29%] h-full 
            mobile:w-full mobile:h-[10%]'
        >
          <SideBar/>
        </nav>
        <Card 
          className='w-[70%] h-full p-3 rounded-2xl 
            mobile:w-full'
        >
          <Outlet/>
        </Card>
      </div>
    </section>

  )
}

export default MainLayout