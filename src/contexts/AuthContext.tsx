import { createContext, ReactNode, useState } from "react";
import UsuarioLogin from "../models/UsuarioLogin";
import { login } from "../services/Service";

interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
}
// qualquer componente react pode ser envolvido
interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        token: ''
    })

    const [isLoading, setIsLoading] = useState<boolean>(false)

    async function handleLogin(usuarioLogin: UsuarioLogin) {
        setIsLoading(true)

        try {

            await login('/usuarios/logar', usuarioLogin, setUsuario)
            alert("O usuário foi autenticado com sucesso")

        } catch (error) {
            alert("Os dados do Usuário estão inconsistentes!")

        }

        setIsLoading(false)
    }

    function handleLogout() {
        setUsuario({
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            token: '',
        })
    }

    return (
        <AuthContext.Provider
          value={{ usuario, handleLogin, handleLogout, isLoading }}
        >
          {children}
        </AuthContext.Provider>
      );
} 