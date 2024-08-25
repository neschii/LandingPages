'use client'
import Logo from './Logo'

export default function UserMenu() {
    return (
        <header className="self-stretch flex justify-center items-center h-24 bg-violet-500/90">
            <nav className="flex items-center justify-between container h-20">
            <Logo /> 
            </nav>
        </header>
    )
}
