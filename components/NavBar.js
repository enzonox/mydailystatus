import React from 'react';
import Link from 'next/link';
import { useAuth } from '../lib/AuthContext'

//esse componente recebe a propriedade href com o nome do link que é o children
const NavLink = ({ href, children }) => {
    return (
        <Link href={href}>
            <a className='p-2 hover:underline hover:text-red-800'>{children}</a>
        </Link>
    )
}

const NavBar = () => {
    const auth = useAuth()
    return (
        <div className="bg-gray-500 py-4 text-center">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/sobre">Sobre</NavLink>
            { !auth.isAuth && <NavLink href="/api/login">Entrar</NavLink>}
            {auth.isAuth && <NavLink href="/app">Ver Status</NavLink>}
            <NavLink href="https://www.linkedin.com/in/enzoleça/">Linkedin do Autor</NavLink>
            {auth.isAuth && <NavLink href="/api/logout">{auth.user.given_name} Sair</NavLink>}
        </div>
    )
}

export default NavBar