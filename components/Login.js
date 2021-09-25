import {signIn} from "next-auth/client";
import Image from "next/image";
import Button from "@material-tailwind/react/Button";
function Login(){
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Image src="http://links.papareact.com/1ui"
            height="300"
            width="550"
            objectFit="contain"
            />
            <Button
            className="w-44 mt-10"
            color="blue"
            buttonType="filled"
            ripple="light"
            onClick={signIn}>Login</Button>
            
        </div>
    );
}
export default Login;