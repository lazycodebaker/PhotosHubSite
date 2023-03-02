
import Image from 'next/image';
import { useRouter } from 'next/router';
import Logo from 'public/favicon.ico';
import { FaSearch, FaHome, FaUser } from 'react-icons/fa';

export const Navbar: React.FC = () => {

    const router = useRouter();

    return (
        <div className='fixed w-screen py-1 mt-4 rounded-md flex items-center justify-center md:lg:justify-around z-50 shadow-inner '>

            <div className='flex h-full px-3 py-1 bg-black/50 backdrop-blur-md rounded-md'>

                <div className='h-full flex items-center justify-center border-r-[1px] px-1 border-gray-50/50 '>
                    <Image src={Logo} alt='Logo' className='rounded-md w-5' />
                    <h1 className=' px-4 hidden lg:md:block font-bold text-gray-50 text-lg'>PhotosHub</h1>
                </div>

                <div className='md:lg:flex hidden h-full items-center justify-center space-x-2 px-1'>

                    <div className='flex cursor-pointer items-center justify-center px-2 py-1 rounded-md hover:bg-red-600/90'>
                        <h1><FaHome className='text-gray-50/90' /></h1>
                        <h1 className='px-2 text-gray-50/90 font-semibold text-md'>Home</h1>
                    </div>

                    <div className='flex cursor-pointer items-center justify-center px-2 py-1 rounded-md hover:bg-red-600/90'>
                        <h1 className=''><FaUser className='text-gray-50/90' /></h1>
                        <h1 className='px-2 text-gray-50/90 font-semibold text-md'>Profile</h1>
                    </div>

                </div>

            </div>

            <div className='flex h-full items-start justify-center'>

                <div className=' w-full h-full flex items-center justify-center px-5'>
                    <div className='items-center h-full w-full flex '>
                        <input type='text' className='w-full px-12 mx-4 py-2 font-semibold rounded-md border-none outline-none bg-black/50 backdrop-blur-md text-gray-50/90 placeholder-gray-50/60' placeholder='Search PhotosHub' />
                        <button className='absolute mx-5 w-10 h-10 rounded-md flex items-center justify-center'>
                            <FaSearch className='text-gray-50' />
                        </button>
                    </div>
                </div>

                <div onClick={() => router.push('/login')} className=' hover:bg-red-600/90 cursor-pointer items-center justify-center mr-4 md:lg:mr-14 px-6 py-2 md:lg:flex hidden rounded-md bg-black/50 backdrop-blur-sm'>
                    <h1 className='text-gray-50 font-semibold text-md'>Join</h1>
                </div>

            </div>
        </div>
    );
};