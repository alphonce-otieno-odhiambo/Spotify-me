import React from 'react';
import {getProviders, signIn} from 'next-auth/react';



function login({providers}) {
  return (
      <>
    <div className='flex flex-col items-center min-h-screen w-full justify-center bg-black'>
        <img src='https://links.papareact.com/9xl' alt='' 
        className='h-20 w-30 mb-5 '/>

{Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button 
              className='p-4 bg-[#18D860] rounded-lg text-white'
               onClick={() => signIn(provider.id, {callbackUrl:"/"})}>
                Login with {provider.name}
              </button>
            </div>
          ))};
    </div>
    </>
  )
}

export default login;


export async function getServerSideProps(){
    const providers = await getProviders();
    return {
        props:{
            providers
        }
    }
};

