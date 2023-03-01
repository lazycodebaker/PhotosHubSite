
import Image from 'next/image';
import Logo from 'public/favicon.ico';
import { FaSearch } from 'react-icons/fa';

export const Navbar: React.FC = () => {
    return (
        <div className='w-screen h-20 flex items-center '>

            <div className=' px-4 h-full flex items-center mx-6 justify-center'>
                <Image src={Logo} alt='Logo' width={50} height={50} className='rounded-md' />
                <h1 className=' px-4 hidden md:block font-bold text-gray-50 text-xl'>PhotosHub</h1>
            </div>

            <div className=' w-full h-full flex items-center justify-center px-24'>
                <div className='items-center h-full w-full md:flex hidden'>
                    <input type='text' className='w-full px-10 mx-4 py-3 rounded-md border-none outline-none' placeholder='Search for photos' />
                    <button className='absolute mx-5 w-10 h-10 rounded-md flex items-center justify-center'>
                        <FaSearch className='text-gray-900' />
                    </button>
                </div>
            </div>

            <div className='flex items-center justify-center mr-6 px-3 py-3  rounded-md bg-gray-50'>
                <h1 className='text-gray-900 font-semibold text-lg'>Join</h1>
            </div>
        </div>
    );
};