import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'

interface CardTemasProps {
    tema: Tema
}

function CardTemas({ tema }: CardTemasProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-gradient-to-r from-gray-800 to-gray-500 h-15 text-white font-bold text-2xl'>
                Tema
            </header>
            <p className='p-8 text-3xl bg-slate-200 h-full'>{tema.descricao}</p>

            <div className="flex">
                <Link to={`/editartema/${tema.id}`}
                    className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 
                        flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to='' className='text-slate-100 bg-red-400 hover:bg-red-700 w-full 
                    flex items-center justify-center'>
                    <Link to={`/deletartema/${tema.id}`}
                        className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
                        <button>Deletar</button>
                    </Link>
                </Link>
            </div>

        </div>
    )
}

export default CardTemas