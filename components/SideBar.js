import React from 'react';
import {
    HomeIcon,
    SearchIcon,
    LibraryIcon,
    PlusCircleIcon,
} from '@heroicons/react/outline';

function SideBar() {
  return (
    <div>
        <div>
            <button>
                <HomeIcon className='h-6 w-5'/>
            </button>
        </div>
    </div>
  )
}

export default SideBar