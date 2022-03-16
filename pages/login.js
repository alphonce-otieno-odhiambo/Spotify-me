import React from 'react';
import {getProviders, signIn} from 'next-auth/react';

function login({providers}) {
  return (
    <div>
        <img src='https://links.papareact.com/9xl' alt='' 
        className=' w-30 mb-5'/>
        {Object.values(providers)}
    </div>
  )
}

export default login;

export async function getServerSideProps(){
    const providers = await getProviders();
    return {
        props:{
            providers,
        }
    }
}