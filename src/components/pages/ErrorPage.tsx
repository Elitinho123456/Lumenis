import { AlertOctagon, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../layout/Header";

export default function ErrorPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen flex items-center justify-center text-center bg-lumenis-deep relative overflow-hidden">
                {/* Background Atmosphere */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-lumenis-dark rounded-full blur-[120px] opacity-40"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-lumenis-accent rounded-full blur-[120px] opacity-20"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col items-center justify-center space-y-6">
                        <AlertOctagon className="w-24 h-24 text-lumenis-accent opacity-80" strokeWidth={1.5} />

                        <h1 className="text-8xl md:text-9xl font-serif-title font-bold text-white tracking-widest opacity-90">
                            404
                        </h1>

                        <h2 className="text-3xl md:text-4xl font-serif-alt text-white uppercase tracking-wide">
                            Página não encontrada
                        </h2>

                        <p className="text-lg md:text-xl font-sans-body text-white max-w-2xl mx-auto leading-relaxed">
                            A beleza do desconhecido às vezes nos leva a caminhos que sem saida.
                            Parece que você encontrou um desses lugares.
                        </p>

                        <Link to="/"
                            className="mt-8 inline-flex items-center gap-3 bg-lumenis-accent text-white font-bold py-3 px-8 rounded-lg hover:bg-lumenis-bright transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-lumenis-accent/20">
                            <ArrowLeft size={20} />
                            Voltar para a Luz
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}