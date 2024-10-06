import { LockKeyhole, Mail ,Loader2, User, Phone} from "lucide-react"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { Separator } from "../components/ui/separator"
import { Link } from "react-router-dom"
import { ChangeEvent, FormEvent, useState } from "react"

type SignupInputState = {
    fullname:string,
    email:string,
    password:string,
    contact:string,
}

const Signup = () => {
    const [input, setInput] = useState<SignupInputState>({
        fullname:"",
        email:"",
        password:"",
        contact:"",
    })
    const changeEventHandler = (e:ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target;
        setInput({...input,[name]:value});
    }
    const SignupSubmitHandler = (e:FormEvent) => {
        e.preventDefault();
        console.log(input);
    }
    const loading = false;

  return (
 <div className=" flex items-center justify-center min-h-screen">
        <form onSubmit={SignupSubmitHandler} className=" text-center md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4 ">
            <div className=" mb-4 ">
                <h1 className=" font-bold text-2xl">FEASTOPIA</h1>
            </div>

            <div className="mb-4">
            <div className=" relative">
            <Input 
            name="fullname"
            type="text"
            className="pl-10 focus-visible:ring-1"
            placeholder="Full Name"
            value={input.fullname}
            onChange={changeEventHandler}
            />
            <User className=" absolute inset-y-2.5 left-2 text-gray-500 pointer-events-none"/>
            </div>
            </div>
           
            <div className="mb-4">
            <div className=" relative">
            <Input 
            name="email"
            type="email"
            className="pl-10 focus-visible:ring-1"
            placeholder="Email"
            value={input.email}
            onChange={changeEventHandler}
            />
            <Mail className=" absolute inset-y-2.5 left-2 text-gray-500 pointer-events-none"/>
            </div>
            </div>

           <div className="mb-4">
           <div className=" relative">
            <Input 
            name="password"
            type="password"
            className="pl-10 focus-visible:ring-1"
            placeholder="Password"
            value={input.password}
            onChange={changeEventHandler}
            />
            <LockKeyhole className=" absolute inset-y-2.5 left-2 text-gray-500 pointer-events-none"/>
            </div>
           </div>

           <div className="mb-4">
            <div className=" relative">
            <Input 
            name="contact"
            type="number"
            className="pl-10 focus-visible:ring-1"
            placeholder="Contact"
            value={input.contact}
            onChange={changeEventHandler}
            />
            <Phone className=" absolute inset-y-2.5 left-2 text-gray-500 pointer-events-none"/>
            </div>
            </div>

           <div className=" mb-10">
            {
            loading ?<Button disabled className=" min-w-full bg-orange hover:bg-hoverOrange"><Loader2 className=" mr-2 h-4 w-4 animate-spin"/>Please wait</Button>:
            <Button type="submit" className=" min-w-full bg-orange hover:bg-hoverOrange">Signup</Button>      
            }
           </div>
            
            <Separator/>
            <p className=" mt-2">
                Already have an account{" "}
                <Link to={"/login"} className=" text-blue-500">Login</Link>
            </p>
        </form>
    </div>   
  )
}

export default Signup