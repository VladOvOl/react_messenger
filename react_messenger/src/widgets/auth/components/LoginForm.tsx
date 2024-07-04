import { Button } from "@/shared/ui/button/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/ui/card/ui/card"
import { Input } from "@/shared/ui/input/input"
import { Label } from "@/shared/ui/label/label"
import {useForm} from 'react-hook-form'
import { useAuth } from "@/app/providers/AuthProvider"
import { ILoginForm } from "../types/IAuth"
import { loginUser } from "../api/auth"


/* const docRef = await doc(db, "users", resp.user.uid);
    const docSnap = await getDoc(docRef)


    console.log(docRef,docSnap)*/


export const LoginForm = () => {

  //const dispatch = useAppDispatch()
  const {addToken} = useAuth()
  const {register, handleSubmit, formState} = useForm<ILoginForm>({
    mode:"onChange",
  })

  const emailValidate = formState.errors.email?.message
  const passwordValidate = formState.errors.password?.message
  
  
  const onSubmit = async(data:ILoginForm) => {
    try {
      const token = await loginUser(data)
      addToken(token)
    } catch (error) {
      console.log('LoginForm')
    }

  }


  return (
    
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Make changes to your account here. Click save when you're done.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label> Email</Label>
            <Input 
              type="email"
              placeholder="example@gmail.com"
              {...register('email',
                {
                  required:"This fields is required",
                  pattern:{
                    value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                    message: 'Invalid email'
                  }
                })
              }
            /> 
            {
              emailValidate && 
              <Label className="text-red-600" >
                {emailValidate}
              </Label>
            }        
          </div>
          <div className="space-y-1">
            <Label htmlFor="username">Username</Label>
            <Input 
              placeholder="qwerty123"
              {...register('password',
                {
                  required:"Enter password",
                  minLength:{
                    value:6,
                    message:'Minimum 6 charts'
                  }

                }
              )}
            />
            {
              passwordValidate && 
                <Label className="text-red-600" >
                  {passwordValidate}
                </Label>
            }
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit">
            Login
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}