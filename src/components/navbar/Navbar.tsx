import { useContext, ReactNode } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { ToastAlerta } from '../../utils/ToastAlerta'

function Navbar() {
    const navigate = useNavigate()

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        ToastAlerta("O usuario foi desconectado com sucesso !", 'sucesso')
        navigate("/")        
    }

    let component: ReactNode

    if (usuario.token !== "") {

        component = ( <div className="flex justify-center items-center bg-gradient-to-r from-gray-800 to-gray-500 h-15">
            <div className="container flex justify-between text-white">
                <div className=''>
                    <Link to="/home" className="text-2xl font-bold"> Blog Pessoal</Link>
                </div>
                <div className=" ">
                    <nav>
                        <ul className="flex space-x-8 ">
                            <Link to='/postagens' className='hover:underline'>Postagens</Link>
                            <Link to='/temas' className='hover:underline'>Temas</Link>
                            <Link to='/cadastrartema' className='hover:underline'>Cadastrar tema</Link>                            
                            <Link to='/perfil' className='hover:underline'>Perfil</Link>
                            <Link to="" onClick={logout} className='hover:underline'><li> Sair </li></Link>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>

        )
    }

    return (

        <>
            {component}
        </>
        
    )
}

export default Navbar