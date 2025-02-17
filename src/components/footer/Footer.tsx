import { LinkedinLogo, InstagramLogo, GithubLogo } from '@phosphor-icons/react'
import React from 'react'


function Footer() {
    let data = new Date().getFullYear()

    return (
        <div className='flex justify-center items-center bg-gradient-to-r from-gray-800 to-gray-500 text-white h-30'>
            <div className='container flex flex-col items-center py-4'>
                <p className='text-md font-bold'>
                    Blog Pessoal Vinicius Oliveira | Copyright: {data}
                </p>
                <p className='text-xs font-bold'>
                    Acesse minhas redes sociais
                </p>
                <div className='flex gap-3 mt-1'>
                    <a href="https://www.linkedin.com/in/vinicius-oliveira-dev-fullstack/" target='_blank'>
                        <LinkedinLogo size={48} weight='bold' />
                    </a>

                    <a href="https://www.instagram.com/viniciusribeiro.1/" target='_blank'>
                        <InstagramLogo size={48} weight='bold' />
                    </a>

                    <a href="https://github.com/viniciusoliveira-27" target='_blank'>
                        <GithubLogo size={48} weight='bold' />
                    </a>         
                    
                </div>
            </div>

        </div>
    )
}

export default Footer