import React, { useRef } from 'react' 
import CustomHook from './CustomHook';
function Home() {
const scrollTab = useRef();
CustomHook(scrollTab);

return (
    <section ref={scrollTab} className='home'>
        <div className="content">
            <div className="name">
                OLÁ, SOU <span>MAYSON</span>
            </div>
            <div className="des">
                {/* 30 */}
                um apaixonado desenvolvedor front-end com uma sede insaciável de criar experiências digitais memoráveis e funcionais. Meu percurso começa com minha formação em Análise e Desenvolvimento de Sistemas, uma jornada que solidificou minha compreensão dos pilares da computação e da lógica de programação. No entanto, é no desenvolvimento front-end que encontrei minha verdadeira vocação.
                Focando inteiramente no front-end, mergulhei de cabeça no universo do HTML, CSS e JavaScript, explorando cada linha de código . Cada projeto é uma oportunidade de dar vida a conceitos abstratos, transformando-os em interfaces intuitivas e visualmente deslumbrantes.</div>
            
            <a href="/democv.pdf" target="_blank" rel="noopener noreferrer" className='animation active '>
                Download Meu CV
            </a>
        </div>
        <div className="avatar">
            <div className="card">
                <img src="/avatar.png" alt="" />
                
            </div>
        </div>
    </section>
    )
}

export default Home
