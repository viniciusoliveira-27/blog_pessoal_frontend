import ListaPostagens from "../../components/postagens/listapostagens/ListaPostagens";
import ModalPostagem from "../../components/postagens/modalpostagem/ModalPostagem";

function Home() {
    return (
        <>
            <div className="flex justify-center bg-gradient-to-r from-gray-800 to-gray-500" >

                <div className="container grid grid-cols-2 text-white">

                    <div className="flex flex-col items-center justify-center gap-4 py-4">

                        <h2 className="text-5xl font-bold ">
                            Seja Bem Vindo!
                        </h2>
                        <p className="text-xl">
                            Expresse aqui seus pensamentos e opiniões
                        </p>
                        <div className=" flex justify-around gap-4 ">
                            <div className="rounded border-white py-2 px-4 text-white">
                                <ModalPostagem />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="https://ik.imagekit.io/ecspdivlw/gif%20svg/design-inspiration-animate.svg?updatedAt=1739584656991"
                            alt="Imagem da Página Home"
                            className="w-2/3"
                        />
                    </div>
                </div>
            </div>
            <ListaPostagens />
        </>
    );
}

export default Home;