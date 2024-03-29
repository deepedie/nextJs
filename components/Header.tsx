import {BellIcon, SearchIcon} from '@heroicons/react/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'

function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const {logout} = useAuth()

    useEffect(() => {
      const handleScroll = () => {
        if(window.scrollY > 0){
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
      }
    
      window.addEventListener("scroll", handleScroll)

      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }, [])
    

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
        <div className="flex items-center space-x-2 md:space-x-10">
            <img
                src="https://rb.gy/ulxxee"
                width={100}
                height={100}
                className="cursor-pointer object-contain"
            />

            <ul className="hidden space-x-4 md:flex">
                <li className="headerLinks">TV Shows</li>
                <li className="headerLinks">Movies</li>
                <li className="headerLinks">New & Popular</li>
                <li className="headerLinks">My List</li>
            </ul>
        </div>
        <div className='flex items-center space-x-4 font-light'>
            <SearchIcon className='hidden sm:inline w-6 h-6'></SearchIcon>
            <p className='hidden lg:inline'>Kids</p>
            <BellIcon className='h-6 w-6'></BellIcon>
            {/* <Link href='/account'> */}
                <img
                    src="https://rb.gy/g1pwyx"
                    alt=""
                    className="cursor-pointer rounded"
                    onClick={logout}
                />
            {/* </Link> */}
        </div>
    </header>
  )
}

export default Header