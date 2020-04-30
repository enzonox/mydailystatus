import React from 'react';
import Link from 'next/link';

//esse componente recebe a propriedade href com o nome do link que é o children
const NavLink = ({ href, children }) => {
    return (
        <Link href={href}>
            <a className='p-2 hover:underline hover:text-red-800'>{children}</a>
        </Link>
    )
}

const NavBar = () => {
    return (
        <div className="bg-gray-500 py-4 text-center">
            <NavLink href="/sobre">Sobre</NavLink>
            <NavLink href="/cadastro">Cadastro</NavLink>
            <NavLink href="/entrar">Entrar</NavLink>
        </div>
    )
}

export default NavBar