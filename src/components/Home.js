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
                Com experiência sólida em desenvolvimento web e design gráfico, sou um desenvolvedor front-end dedicado à criação de interfaces funcionais e otimizadas. Atualmente atuando como web designer na ATN Tecnologia, desenvolvo sites institucionais e páginas de destino personalizadas com tecnologias como PHP, HTML, CSS e Elementor no WordPress. Minha expertise inclui a criação de identidades visuais e logomarcas, desenvolvimento de interfaces no Figma, e a aplicação de estratégias de SEO e copywriting para aumentar a visibilidade digital.
                Possuo habilidades em Vue.js, React.js, Node.js, e sou especializado em design de UI/UX, desenvolvimento de landing pages e SEO. Além disso, gerencio campanhas de tráfego pago em plataformas como Facebook Ads, Google Ads e TikTok Ads, com foco em maximizar o alcance e conversões.</div>
            
            <a href="Cvmaysonsantos.pdf" target="_blank" rel="noopener noreferrer" className='animation active '>
                Meu currículo
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
