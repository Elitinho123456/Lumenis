import { BriefcaseBusiness, Focus, WandSparkles, Image, LayoutList } from "lucide-react";
import Header from "../layout/Header"

export default function Home() {

    return (

        <>

            <Header />

            <main>

                {/* Hero Section */}
                <section className="min-h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(13, 13, 13, 0.7), rgba(13, 13, 13, 0.7)), url('https://placehold.co/1920x1080/260101/8C0303?text=Lumenis')" }}>

                    <div className="container mx-auto px-6">

                        {/* Título */}
                        <h2 className="text-5xl md:text-7xl font-serif-title font-bold text-white uppercase tracking-wider">O
                            diferente também é bonito.</h2>

                        {/* Subtítulo */}
                        <p className="mt-4 text-lg md:text-xl font-sans-body text-gray-300 max-w-2xl mx-auto">Capturando a essência
                            da beleza alternativa através de lentes que celebram a individualidade.</p>

                        {/* Botão */}
                        <a href="#portfolio"
                            className="mt-8 inline-block bg-lumenis-accent text-white font-bold py-3 px-8 rounded-lg hover:bg-lumenis-bright transition-transform duration-300 transform hover:scale-105">Veja
                            nosso trabalho</a>

                    </div>

                </section>

                <section id="servicos" className="py-20">

                    {/* Container */}
                    <div className="container mx-auto px-6">
                        <h3 className="text-4xl font-serif-title text-center mb-12">Serviços</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                            {/* Photoshoot */}
                            <div className="border border-lumenis-medium rounded-lg p-6 text-center flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-300">
                                <h4 className="text-2xl font-bold font-serif-alt mb-2">Fotos</h4>
                                <p className="text-4xl font-bold text-lumenis-accent mb-4">Encontre-se</p>
                                <Focus height={50} width={50} />
                                <p className="text-lg font-sans-body text-gray-600 max-w-2xl mx-auto">Capturando a essência
                                    da beleza alternativa através de lentes que celebram a individualidade.</p>
                                <ul className="text-center space-y-2 grow">
                                    <li>Tenha a liberdade de expressar-se</li>
                                    <li><b>Seja autêntico</b></li>
                                    <li>Contrate um de nosso Fotógrafos!</li>
                                </ul>
                                <a href="#duvidas"
                                    className="mt-6 bg-lumenis-accent text-white font-bold py-2 px-6 rounded-lg hover:bg-lumenis-bright transition-colors">Reservar</a>
                            </div>

                            {/* Makeup */}
                            <div className="border border-lumenis-medium rounded-lg p-6 text-center flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-300">
                                <h4 className="text-2xl font-bold font-serif-alt mb-2">Maquiagem</h4>
                                <p className="text-4xl font-bold text-lumenis-accent mb-4">Diferencie-se</p>
                                <WandSparkles height={50} width={50} />
                                <p className="text-lg font-sans-body text-gray-600 max-w-2xl mx-auto">Maquiagem que valoriza a individualidade. Mostre-se autêntico.</p>
                                <ul className="text-center space-y-2 grow">
                                    <li>Que tal uma Mudança?</li>
                                    <li><b>Mostre por que você é especial.</b></li>
                                    <li>Contrate um um serviço de Maquiagem!</li>
                                </ul>
                                <a href="#duvidas"
                                    className="mt-6 bg-lumenis-accent text-white font-bold py-2 px-6 rounded-lg hover:bg-lumenis-bright transition-colors">Reservar</a>
                            </div>

                            {/* Portfolio */}
                            <div className="border border-lumenis-medium rounded-lg p-6 text-center flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-300">
                                <h4 className="text-2xl font-bold font-serif-alt mb-2">Portfólio</h4>
                                <p className="text-4xl font-bold text-lumenis-accent mb-4">De um BOOM</p>
                                <BriefcaseBusiness height={50} width={50} />
                                <p className="text-lg font-sans-body text-gray-600 max-w-2xl mx-auto">Trazemos o seu melhor você para a tela. Deixe todos com inveja!</p>
                                <ul className="text-center space-y-2 grow">
                                    <li>Domine a sua individualidade</li>
                                    <li><b>Só pelo seu portifólio...</b></li>
                                    <li>Faça seu Portfolio conosco!</li>
                                </ul>
                                <a href="#duvidas"
                                    className="mt-6 bg-lumenis-accent text-white font-bold py-2 px-6 rounded-lg hover:bg-lumenis-bright transition-colors">Reservar</a>
                            </div>

                            {/* Editing */}
                            <div className="border border-lumenis-medium rounded-lg p-6 text-center flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-300">
                                <h4 className="text-2xl font-bold font-serif-alt mb-2">Edição</h4>
                                <p className="text-4xl font-bold text-lumenis-accent mb-4">Torne Especial</p>
                                <Image height={50} width={50} />
                                <p className="text-lg font-sans-body text-gray-600 max-w-2xl mx-auto">Moldamos o mundo ao seu gosto. Não você ao gosto do mundo.</p>
                                <ul className="text-center space-y-2 grow">
                                    <li>Vibrante e Elegante</li>
                                    <li><b>"Que fotos lindas!"</b></li>
                                    <li>Molde suas imagens para o seu gosto!</li>
                                </ul>
                                <a href="#duvidas"
                                    className="mt-6 bg-lumenis-accent text-white font-bold py-2 px-6 rounded-lg hover:bg-lumenis-bright transition-colors">Reservar</a>
                            </div>

                            {/* Curriculun */}
                            <div className="border border-lumenis-medium rounded-lg p-6 text-center flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-300">
                                <h4 className="text-2xl font-bold font-serif-alt mb-2">Curriculos</h4>
                                <p className="text-4xl font-bold text-lumenis-accent mb-4">Seja o Melhor</p>
                                <LayoutList height={50} width={50} />
                                <p className="text-lg font-sans-body text-gray-600 max-w-2xl mx-auto">Só oque te faz um vencedor, pois sua vida é cheia de conquistas!</p>
                                <ul className="text-center space-y-2 grow">
                                    <li>Seja o seu melhor</li>
                                    <li><b>Mais novo funcionário?</b></li>
                                    <li>Contrate um de nossos fotógrafos alternativos</li>
                                </ul>
                                <a href="#duvidas"
                                    className="mt-6 bg-lumenis-accent text-white font-bold py-2 px-6 rounded-lg hover:bg-lumenis-bright transition-colors">Reservar</a>
                            </div>

                            {/* Studio Objects */}
                            <div className="border border-lumenis-medium rounded-lg p-6 text-center flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-300">
                                <h4 className="text-2xl font-bold font-serif-alt mb-2">Objetos do Estúdio</h4>
                                <p className="text-4xl font-bold text-lumenis-accent mb-4">Profissionalize</p>
                                <WandSparkles height={50} width={50} />
                                <p className="text-lg font-sans-body text-gray-600 max-w-2xl mx-auto">Temos o que você precisa para expressar-se da forma que você quer.</p>
                                <ul className="text-center space-y-2 grow">
                                    <li>Monte seu arsenal!</li>
                                    <li><b>Vai uma mãosinha ai?</b></li>
                                    <li>Alugue nosso Equipamento!</li>
                                </ul>
                                <a href="#duvidas"
                                    className="mt-6 bg-lumenis-accent text-white font-bold py-2 px-6 rounded-lg hover:bg-lumenis-bright transition-colors">Reservar</a>
                            </div>

                        </div>
                    </div>

                </section>

                {/* Portfolio Section */}
                <section id="portfolio" className="py-20">

                    {/* Container */}
                    <div className="container mx-auto px-6">
                        <h3 className="text-4xl font-serif-title text-center mb-12">Portfólio</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                            {/* Imagem 1 de Exemplo */}
                            <div className="group relative overflow-hidden rounded-lg shadow-lg">
                                <img src="https://placehold.co/600x800/400101/F5F5F5?text=Modelo:+Lorrainy"
                                    alt="Foto de modelo alternativa Luna"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div
                                    className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4">
                                    <p className="text-white text-xl font-bold">Lorrainy</p>
                                    <a href="https://placehold.co/600x800/400101/F5F5F5?text=Modelo:+Lorrainy"
                                        download="Lumenis-Lorrainy.jpg"
                                        className="mt-4 bg-lumenis-accent text-white py-2 px-4 rounded-lg text-sm hover:bg-lumenis-bright transition-colors">Baixar
                                        Foto</a>
                                </div>
                            </div>

                            {/* Imagem 2 de Exemplo */}
                            <div className="group relative overflow-hidden rounded-lg shadow-lg">
                                <img src="https://placehold.co/600x800/730202/F5F5F5?text=Modelo:+Amanda"
                                    alt="Foto de modelo com maquiagem artística Amanda"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div
                                    className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4">
                                    <p className="text-white text-xl font-bold">Amanda</p>
                                    <a href="https://placehold.co/600x800/730202/F5F5F5?text=Modelo:+Amanda"
                                        download="Lumenis-Amanda.jpg"
                                        className="mt-4 bg-lumenis-accent text-white py-2 px-4 rounded-lg text-sm hover:bg-lumenis-bright transition-colors">Baixar
                                        Foto</a>
                                </div>
                            </div>

                            {/* Imagem 3  de Exemplo */}
                            <div className="group relative overflow-hidden rounded-lg shadow-lg">
                                <img src="https://placehold.co/600x800/260101/F5F5F5?text=Modelo:+Nicole"
                                    alt="Foto de modelo alternativa Nicole"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div
                                    className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4">
                                    <p className="text-white text-xl font-bold">Nicole</p>
                                    <a href="https://placehold.co/600x800/260101/F5F5F5?text=Modelo:+Nicole"
                                        download="Lumenis-Nicole.jpg"
                                        className="mt-4 bg-lumenis-accent text-white py-2 px-4 rounded-lg text-sm hover:bg-lumenis-bright transition-colors">Baixar
                                        Foto</a>
                                </div>
                            </div>

                            {/* Conforme necessário, podemos colocarr mais imagens aqui */}
                        </div>
                    </div>

                </section>

                {/* Sobre Section */}
                <section id="sobre" className="py-20 bg-lumenis-dark">

                    <div className="container mx-auto px-6 text-center max-w-3xl">
                        <h3 className="text-4xl text-lumenis-text font-serif-title mb-6">Sobre a Lumenis</h3>
                        <p className="text-lg text-lumenis-text leading-relaxed mb-4">
                            A Lumenis nasceu do desejo de iluminar a beleza que existe fora dos padrões. Nosso objetivo é criar
                            um espaço seguro e criativo onde pessoas alternativas e maquiadores artísticos possam se expressar
                            livremente.
                        </p>
                        <p className="text-lg text-lumenis-text leading-relaxed">
                            Acreditamos que cada indivíduo é uma obra de arte e nossa missão é capturar essa singularidade.
                            Queremos oferecer uma plataforma intuitiva e acessível para divulgar trabalhos incríveis e mostrar
                            para o mundo que o diferente não é apenas bonito, é extraordinário.
                        </p>
                    </div>

                </section>

                {/* Preços Section */}
                <section id="precos" className="py-20">

                    <div className="container mx-auto px-6">
                        <h3 className="text-4xl font-serif-title text-center mb-12">Orçamentos</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            {/* Kit 10 */}
                            <div className="border border-lumenis-medium bg-lumenis-dark rounded-lg p-6 text-center flex flex-col">
                                <h4 className="text-2xl text-lumenis-text font-bold font-serif-alt mb-2">Kit 10 Fotos</h4>
                                <p className="text-4xl font-bold text-lumenis-accent mb-4">R$17,00</p>
                                <ul className="text-left space-y-2 text-lumenis-text grow">
                                    <li>✓ 10 fotos digitais</li>
                                    <li>✓ Edição básica inclusa</li>
                                </ul>
                                <a href="#duvidas"
                                    className="mt-6 bg-lumenis-accent text-white font-bold py-2 px-6 rounded-lg hover:bg-lumenis-bright transition-colors">Reservar</a>
                            </div>

                            {/* Kit 15 */}
                            <div className="border border-lumenis-medium bg-lumenis-dark rounded-lg p-6 text-center flex flex-col">
                                <h4 className="text-2xl text-lumenis-text font-bold font-serif-alt mb-2">Kit 15 Fotos</h4>
                                <p className="text-4xl font-bold text-lumenis-accent mb-4">R$22,00</p>
                                <ul className="text-left space-y-2 text-lumenis-text grow">
                                    <li>✓ 15 fotos digitais</li>
                                    <li>✓ Edição básica inclusa</li>
                                </ul>
                                <a href="#duvidas"
                                    className="mt-6 bg-lumenis-accent text-white font-bold py-2 px-6 rounded-lg hover:bg-lumenis-bright transition-colors">Reservar</a>
                            </div>

                            {/* Kit 20 */}
                            <div className="border border-lumenis-medium bg-lumenis-dark rounded-lg p-6 text-center flex flex-col">
                                <h4 className="text-2xl text-lumenis-text font-bold font-serif-alt mb-2">Kit 20 Fotos</h4>
                                <p className="text-4xl font-bold text-lumenis-accent mb-4">R$27,00</p>
                                <ul className="text-left space-y-2 text-lumenis-text grow">
                                    <li>✓ 20 fotos digitais</li>
                                    <li>✓ Edição básica inclusa</li>
                                </ul>
                                <a href="#duvidas"
                                    className="mt-6 bg-lumenis-accent text-white font-bold py-2 px-6 rounded-lg hover:bg-lumenis-bright transition-colors">Reservar</a>
                            </div>

                            {/* Kit 50 */}
                            <div
                                className="border border-lumenis-accent bg-lumenis-medium rounded-lg p-6 text-center flex flex-col ring-2 ring-lumenis-accent">
                                <h4 className="text-2xl text-lumenis-text font-bold font-serif-alt mb-2">Kit 50 Fotos</h4>
                                <p className="text-4xl font-bold text-lumenis-accent mb-4">R$40,00</p>
                                <ul className="text-left space-y-2 text-lumenis-text grow">
                                    <li>✓ 50 fotos digitais</li>
                                    <li>✓ Edição completa inclusa</li>
                                </ul>
                                <a href="#duvidas"
                                    className="mt-6 bg-lumenis-accent text-white font-bold py-2 px-6 rounded-lg hover:bg-lumenis-bright transition-colors">Reservar</a>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Dúvidas & Reservas Section */}
                <section id="duvidas" className="py-20">
                    <div className="container mx-auto px-6 text-center max-w-3xl">
                        <h3 className="text-4xl font-serif-title mb-6">Dúvidas & Reservas</h3>
                        <p className="text-lg text-gray-500 leading-relaxed mb-8">
                            Tem alguma dúvida sobre os pacotes, o processo de agendamento ou precisa de um orçamento
                            personalizado? Entre em contato conosco. Estamos aqui para ajudar a transformar sua visão em
                            realidade.
                        </p>
                        <a href="mailto:contato@lumenis.com.br?subject=Reserva de Ensaio Fotográfico"
                            className="inline-block bg-lumenis-accent text-white font-bold py-4 px-10 text-lg rounded-lg hover:bg-lumenis-bright transition-transform duration-300 transform hover:scale-105">
                            Envie um E-mail
                        </a>
                        <p className="text-sm text-gray-400 mt-4">contato@lumenis.com.br</p>
                    </div>
                </section>

            </main>
        </>

    );

}