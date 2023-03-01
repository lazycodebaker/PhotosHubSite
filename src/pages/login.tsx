
import { Input } from '@/components/Input';
import useInput from '@/helpers/useInput';
import React from 'react';

const Login: React.FC<{}> = () => {

  const Username = useInput();

  return (
    <div className="container max-w-full mx-auto py-24 px-6 ">
      <div className="font-sans">
        <div className="max-w-sm mx-auto px-6">
          <div className="relative flex flex-wrap">
            <div className="w-full relative">
              <div className="mt-6">
                <div className="mb-5 pb-1border-b-2 text-center font-base text-gray-700">
                  <span className="font-bold ">By
                    <a target="_blank" className="text-gray-800-500 text-xl font-bold"
                      href="https://twitter.com/lazycodebaker">
                      @Lazycodebaker
                    </a>
                  </span>
                </div>
           
                <div className="text-center text-2xl font-bold text-gray-900">
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