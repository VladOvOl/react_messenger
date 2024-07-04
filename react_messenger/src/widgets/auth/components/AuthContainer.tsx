import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs/tabs"
import { LoginForm } from "./LoginForm"
import { RegistrationForm } from "./RegistrationForm"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { auth, db } from "@/app/lib/firebase"
import { doc, getDoc } from "firebase/firestore"

export const AuthContainer = () => {

  /*
  const f = async() => {
    const onSub = await onAuthStateChanged(auth,async(user) => {
      const docRef = await doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef)
      console.log(docSnap.data())
    })
  }

  f()
*/
  return (
    <div className="w-full h-full flex  items-center justify-center">
      <Tabs defaultValue="login" className="w-[30%]" >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="registration">Registration</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <LoginForm/>
        </TabsContent>
        <TabsContent value="registration">
         <RegistrationForm/>
        </TabsContent>
      </Tabs>
    </div>
    
  )
}