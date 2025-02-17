import Tema from "./Tema"
import Usuario from "./Usuario"

export default interface Postagem {
    id: number;
    titulo: string;
    texto: string;
    data: string;
    tema: Tema | string;
    usuario: Usuario | string;
}