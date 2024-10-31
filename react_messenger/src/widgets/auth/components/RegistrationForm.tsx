import { Button } from "@/shared/ui/button/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/ui/card/ui/card"
import { Input } from "@/shared/ui/input/input"
import { Label } from "@/shared/ui/label/label"
import { useForm } from "react-hook-form"
import { IRegistrationForm } from "../types/IAuth"
import { registrationUser } from "../api/auth"
import { useAuth } from "@/app/providers/AuthProvider"


export const RegistrationForm = () => {

  const {addToken} = useAuth()
  const {register, handleSubmit, formState} = useForm<IRegistrationForm>({
    mode:"onChange",
  })


  const nameValidate = formState.errors.name?.message
  const emailValidate = formState.errors.email?.message
  const passwordValidate = formState.errors.password?.message

  const onSubmit = async (data:IRegistrationForm) => {
    try{
      const response = await registrationUser(data)
      if(response.status==="success"){
        addToken(response.token)
      }else{
        alert(response.errorMessage)
      }
    }catch(errors){
      alert('RegistrationForm')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardHeader>
          <CardTitle>Password</CardTitle>
          <CardDescription>
            Change your password here. After saving, you'll be logged out.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
        <div className="space-y-1">
            <Label>Current password</Label>
            <Input 
              type="text"
              placeholder="User"
              {...register('name',
                {
                  required:'Enter user name',
                  minLength:{
                    value: 3,
                    message: 'Minimum 3 char'
                  }
                }
              )} 
            />
            {
              nameValidate && 
              <Label className="text-red-600" >
                {nameValidate}
              </Label>
            } 
          </div>
          <div className="space-y-1">
            <Label htmlFor="current">Current password</Label>
            <Input 
              type="email" 
              placeholder="example@gmail.com"
              {...register('email',
                {
                  required:'This fields is required',
                  pattern:{
                    value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                    message: 'Invalid email'
                  }
                }
              )}
            />
            {
              emailValidate && 
              <Label className="text-red-600" >
                {emailValidate}
              </Label>
            } 
          </div>
          <div className="space-y-1">
            <Label htmlFor="new">New password</Label>
            <Input
              type="text"
              placeholder="qwerty123"
              {...register('password',
                {
                  required:'This fields is required',
                  minLength:{
                    value: 6,
                    message: 'Minimum 6 char'
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
          <Button>Save password</Button>
        </CardFooter>
      </form>
    </Card>
  )
}