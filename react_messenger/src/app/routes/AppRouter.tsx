import {  Navigate, Route, Routes} from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import { AuthPage } from '@/pages/auth/Auth'
import Home from '@/pages/home/Home'
import { useAuth } from '../providers/AuthProvider'
import { useEffect } from 'react'
import { doc, getDoc, onSnapshot } from 'firebase/firestore'
import Cookies from 'js-cookie'
import { db } from '../lib/firebase'
import { useAppDispatch} from '../store/hooks'
import { addUser, IUser } from '@/entities/user/store/userSlice'



const AppRouter = () => {

  
  //const token = Cookies.get('token');
  //const user = useAppSelector((state:RootState)=>state.userSlice.user)
  //const[token2,setToken2] = useState(false)

  //const isChan = auth.onIdTokenChanged

  /*useEffect(()=>{
    console.log('Token changed')
    console.log(!!Cookies.get('token'))
    setToken2(!token2)
  },[user.token])
  */
  const dispatch = useAppDispatch()
  //const user = useAppSelector((state:RootState) => state.userSlice.user)
  const {isAuth} = useAuth()

  useEffect(() => {
    const getUser = async () => {
      try {
        let id = Cookies.get('token')
        if(id){
          const docRef = doc(db, "users", id);
          const docSnap =  await getDoc(docRef)
          if(docSnap.data()){
            dispatch(addUser(docSnap.data() as IUser))

            onSnapshot(doc(db, "user_chats", id), (doc) => {
              console.log("Current data: ", doc.data());
          });
          } 
        }
      } catch (error) {
        
      }
    }
    getUser()
  },[isAuth])

  console.log(isAuth)
  return (
      <Routes >
        {
          isAuth
          ?
          <>
            <Route path='/' element={<MainLayout/>}>
              <Route index element={<Navigate to='/home' replace />}/>
              <Route path='/home' element={<Home/>}/>
              <Route path='/home/:id' element={<h1>dvdv</h1>}/>
              </Route>
            <Route path='*' element={<Navigate to='/home' replace />}/>
          </>
          :
          <>
            <Route path='/auth' element={<AuthPage/>}/>
            <Route path='*' element={<Navigate to='/auth' replace/>}/>
          </>
                 
        }
          
      </Routes>
  )
}

export default AppRouter