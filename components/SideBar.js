import React from 'react';
import {
    HomeIcon,
    SearchIcon,
    LibraryIcon,
    PlusCircleIcon,
    HeartIcon,
    RssIcon,
} from '@heroicons/react/outline';

function SideBar() {
  return (
    <div className='text-gray-500 p-5 text-xs border-r border-gray-900'>
        <div>
            <button className='flex items-center space-x-2 hover:bg-white'>
                <HomeIcon className='h-6 w-5'/>
                <p>Home</p>
            </button>
            <button className='flex items-center space-x-2 hover:bg-white'>
                <SearchIcon className='h-6 w-5'/>
                <p>Search</p>
            </button>
            <button className='flex items-center space-x-2 hover:bg-white'>
                <LibraryIcon className='h-6 w-5'/>
                <p>Yoour Library</p>
            </button>
            <hr className='border-t-[0.1px] border-gray-400'/>
           
            <button className='flex items-center space-x-2 hover:bg-white'>
                <PlusCircleIcon className='h-6 w-5'/>
                <p>Create playlist</p>
            </button>
            <button className='flex items-center space-x-2 hover:bg-white'>
                <HeartIcon className='h-6 w-5'/>
                <p>Liked songs</p>
            </button>
            <button className='flex items-center space-x-2 hover:bg-white'>
                <RssIcon className='h-6 w-5'/>
                <p>Your Episodes</p>
            </button>
            <hr className='border-t-[0.1px] border-gray-400'/>
        </div>
    </div>
  )
}

export default SideBar