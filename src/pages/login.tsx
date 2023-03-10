
import { AuthContext } from '@/context/AuthContext';
import { Input } from '@/customs/Input';
import useInput from '@/helpers/useInput';
import { FaArrowCircleRight } from 'react-icons/fa';
import { useRouter } from 'next/router';
import React, { MouseEventHandler, useContext, useEffect } from 'react';

const Login: React.FC<{}> = () => {

  const Username = useInput();
  const Password = useInput();

  const router = useRouter();

  const { Login, user } = useContext(AuthContext);

  const handleLogin: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    Login(Username.value, Password.value);
  };

  useEffect(() => {
    if (user?.IsLoggedIn) router.push('/');
  }, [user?.IsLoggedIn]);

  return (
    <div className="container max-w-full mx-auto py-24 px-6 ">
      <div className="font-sans">
        <div className="max-w-sm mx-auto px-6">
          <div className="relative flex flex-wrap">
            <div className="w-full relative">
              <div className="">
                <div className="mb-5 pb-1border-b-2 text-center font-base text-gray-500">
                  <span className="font-bold ">By
                    <a target="_blank" className="text-gray-800-500 text-xl font-bold"
                      href="https://twitter.com/lazycodebaker">
                      @Lazycodebaker
                    </a>
                  </span>
                </div>

                <div className="text-center text-2xl font-bold text-gray-50">
                  Login
                </div>

                <div className="mt-8">
                  <h1 className="text-red-400 font-bold text-lg">
                    error
                  </h1>
                  <div className="mx-auto max-w-lg">

                    <Input
                      placeholder="Enter Username"
                      error={Username.error}
                      key={"Username"}
                      label={"Username"}
                      name={"Username"}
                      onChange={Username.handleChange}
                      type={"text"}
                      value={Username.value}
                    />
                  </div>

                  <Input
                    placeholder="Enter Password"
                    error={Password.error}
                    key={"Password"}
                    label={"Password"}
                    name={"Password"}
                    onChange={Password.handleChange}
                    type={"password"}
                    value={Password.value}
                  />

                  <button
                    className="mt-3 text-lg font-semibold 
                        bg-gray-800 w-full text-white rounded-md
                        px-6 py-2 block shadow-xl hover:text-white 
                        hover:bg-gray-900"
                    onClick={handleLogin}
                  >
                    <h1 className="text-white font-bold text-lg">
                      Login
                    </h1>

                  </button>

                  <button
                    className="mt-3 text-lg font-semibold 
                        bg-red-800 w-full text-white rounded-md
                        px-6 py-2 block shadow-xl hover:text-white 
                        hover:bg-red-900"
                    onClick={() => router.push('/register')}
                  >
                    <div className="text-white font-bold text-lg flex w-full h-full items-center justify-evenly">
                      <div className=''>Register</div>
                      <FaArrowCircleRight className="" size={20} />
                    </div>
                  </button>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;