'use client'
import Link from 'next/link'
import Logo from './Logo'

export default function UserMenu() {
    return (
        <header className="self-stretch flex justify-center items-center h-24 bg-black/60">
            <nav className="flex items-center justify-between container">
            <Logo /> 
            </nav>
        </header>
    )
}
