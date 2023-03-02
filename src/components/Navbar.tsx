
import Image from 'next/image';
import { useRouter } from 'next/router';
import Logo from 'public/favicon.ico';
import { FaSearch } from 'react-icons/fa';

export const Navbar: React.FC = () => {

    const router = useRouter();

    return (
        <div className='w-screen fixed py-2 flex items-center z-50 bg-black/20 backdrop-blur-md  shadow-inner '>

            <div className=' px-4 h-full flex items-center mx-6 justify-center'>
                <Image src={Logo} alt='Logo' width={50} height={50} className='rounded-md' />
                <h1 className=' px-4 hidden lg:md:block font-bold text-gray-50 text-xl'>PhotosHub</h1>
            </div>

            <div className=' w-full h-full flex items-center justify-center md:px-5 lg:px-20'>
                <div className='items-center h-full w-full md:flex hidden'>
                    <input type='text' className='w-full px-12 mx-4 py-3 font-semibold rounded-md border-none outline-none bg-black/30 backdrop-blur-md text-gray-50/90 placeholder-gray-50/70' placeholder='Search for photos' />
                    <button className='absolute mx-5 w-10 h-10 rounded-md flex items-center justify-center'>
                        <FaSearch className='text-gray-50' />
                    </button>
                </div>
            </div>

            <div onClick={()=>router.push('/login')} className='cursor-pointer flex items-center justify-center mr-4 md:lg:mr-14 px-6 py-3 rounded-md bg-black/30 backdrop-blur-sm'>
                <h1 className='text-gray-50 font-semibold text-md'>Join</h1>
            </div>
        </div>
    );
};