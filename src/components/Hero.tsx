

export const Hero : React.FC = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <img className='absolute top-0 left-0 -z-10 w-screen h-screen object-cover '
            src={"https://cdn.wallpaperhub.app/cloudcache/3/e/e/2/2/a/3ee22a464c4eb2183e7816306ca2976bcd541d25.jpg"}
            alt="random" />
            <div className="absolute top-0 left-0 w-screen h-screen bg-gray-900 opacity-40"></div>
        </div>
    );
};