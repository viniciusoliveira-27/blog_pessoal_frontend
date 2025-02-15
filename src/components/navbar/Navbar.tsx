import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-gray-800 to-gray-500 h-15">
        <div className="container flex justify-between text-white">
            <div className=''>
               <Link to="/home" className="text-2xl font-bold"> Blog Pessoal</Link>
            </div>
            <div className=" ">
                <nav>
                    <ul className="flex space-x-8 ">
                        <li> <a href="#">Postagens </a></li>
                        <li> <a href="#">Temas </a></li>
                        <li> <a href="#">Cadastrar temas </a></li>
                        <li> <a href="#">Perfil </a></li>
                        <Link to="/login"><li> <a href="#">Sair </a></li></Link>
                        
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Navbar