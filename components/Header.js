import Image from 'next/image';
import profilePic from '../public/profile.jpg';
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import { signOut, useSession } from 'next-auth/client';

function Header(){
    const [session] = useSession();
    return (
    <header className="sticky top-0 z-50 flex items-center px-4 py-1 shadow-md bg-white">
        <Button color="gray" buttonType="outline" rounded={true} iconOnly={true}
        ripple="dark" className="h-20 w-20 border-0">
            <Icon name="menu" size="2xl"/>
        </Button>
    <Icon name="description" size="5xl" color="blue"/>
    <h1 className="md:inline-flex ml-2 text-gray-700 text-2xl">Docs</h1>

    {/*Middle: Search box */}
    <div className="flex flex-grow max-w-3xl mx-auto
     items-center px-5 py-2 bg-gray-100 text-gray-600
      rounded-lg focus-within:text-gray-600 focus-within:shadow-md focus-within:bg-white">
        <Icon name="search" size="3xl" color="gray" />
        <input className="flex-grow px-5 text-base bg-transparent outline-none" type="text" placeholder="Search"/>
    </div>

    {/*Right: User's profile pic */}
    <Button
    color="gray"
    buttonType="outline"
    rounded={true}
    iconOnly={true}
    ripple="dark"
    className="ml-5 md:ml-20 h-20 w-20 border-0">
        <Icon name="apps" size="2xl" color="gray"/>
    </Button>

    <img
    loading="lazy"
    onClick={signOut}
    className="cursor-pointer h-10 w-10 rounded-full ml-2"
    src={session?.user?.image}
    alt="User's profile picture"
    />
    </header>
    
    );
}
export default Header;