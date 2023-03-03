
import Image from 'next/image';
import React, { ChangeEvent, useEffect } from 'react'
import { useRouter } from 'next/router';
import Logo from 'public/favicon.ico';
import { FaSearch, FaHome, FaUser, FaBars } from 'react-icons/fa';

export const Navbar: React.FC = () => {

    const router = useRouter();

    const [isSearchFocus, setIsSearchFocus] = React.useState<boolean>(false);
    const [searchText, setSearchText] = React.useState<string>('');

    const changeSearch: (event: ChangeEvent<HTMLInputElement>) => void = (e) => {
        setSearchText(e.target.value);
    };

    useEffect(() => {
        if (searchText.length > 0) {
            setIsSearchFocus(true);
        } else {
            setIsSearchFocus(false);
        };
    }, [searchText]);

    return (
        <div className='fixed py-1 mt-4 rounded-md flex items-center px-auto w-full z-50 shadow-inner '>

            <div className='flex h-full py-1 bg-black/50 backdrop-blur-md rounded-md px-1 mx-2'>

                <div className='h-full px-3 flex items-center justify-center md:border-r-[1px] py-1 md:border-gray-50/50 '>
                    <Image src={Logo} alt='Logo' className='rounded-md mx-3 ' width={25} height={24} />
                    <h1 className='mr-2 hidden lg:md:block font-bold text-gray-50 text-lg'>PhotosHub</h1>
                </div>

                <div className='sm:flex hidden h-full w-full items-center justify-center space-x-1 mt-[1.5px] px-2'>

                    <div className='flex cursor-pointer items-center justify-center px-2 rounded-md py-1 hover:bg-red-600/90'>
                        <FaHome className='text-gray-50' />
                        <h1 className='px-2 text-gray-50 font-semibold text-md'>Home</h1>
                    </div>

                    <div className='flex cursor-pointer items-center justify-center px-2 rounded-md py-1 hover:bg-red-600/90'>
                        <FaUser className='text-gray-50' />
                        <h1 className='px-2 text-gray-50 font-semibold text-md'>Profile</h1>
                    </div>

                </div>

            </div>

            <div className='flex h-full items-center justify-center w-screen  '>
                <div className=''>
                    <div className='items-center h-full w-full flex '>
                        <input value={searchText} onChange={(e) => changeSearch(e)} type='text' className='w-full px-12 mx-4 py-2 font-semibold rounded-md border-none outline-none bg-black/50 backdrop-blur-md text-gray-50/90 placeholder-gray-50/60' placeholder='Search PhotosHub' />
                        <button className='absolute mx-5 w-10 h-10 rounded-md flex items-center justify-center'>
                            <FaSearch className={`text-gray-50 ${isSearchFocus ? 'text-red-600/90' : ''}`} />
                        </button>
                    </div>
                </div>

                <div onClick={() => router.push('/login')} className=' hover:bg-red-600/90 cursor-pointer items-center justify-center mr-4 md:lg:mr-14 px-6 py-2 sm:flex hidden rounded-md bg-black/50 backdrop-blur-sm'>
                    <h1 className='text-gray-50 font-semibold text-md'>Join</h1>
                </div>

                <div className='py-2 px-3 bg-black/50 sm:hidden block rounded-md cursor-pointer backdrop-blur-md'>
                    <FaBars className='text-gray-50 ' size={"23"} />
                </div>
            </div>

        </div>
    );
};