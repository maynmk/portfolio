import React, { useState, useRef } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Projects() {
const [listProjects] = useState([
  {
    name: 'BELÉM M LIMP',
    des: 'O design da página é responsivo, o que significa que se adapta de forma elegante a diferentes tamanhos de tela e dispositivos. Isso garante uma experiência de usuário consistente, independentemente do dispositivo utilizado para acessar a página.',
    mission: 'Como desenvolvedor, minha missão é garantir realizar análise e design do sistema para oferecer uma experiência de usuário fluida e segura.',
    language: 'HTML5, CSS3, JS.',
    images: 'project1.png',
    link: 'https://maynmk.github.io/Belem-m-limp/'
  },
  {
    name: 'Design & Construction',
    des: 'O design da página é responsivo, o que significa que se adapta de forma elegante a diferentes tamanhos de tela e dispositivos. Isso garante uma experiência de usuário consistente, independentemente do dispositivo utilizado para acessar a página.',
    mission: 'Como desenvolvedor, minha missão é garantir realizar análise e design do sistema para oferecer uma experiência de usuário fluida e segura.',
    language: 'HTML5, CSS3, JS.',
    images: 'project2.png',
    link: 'https://maynmk.github.io/WELCOME-TO-NBDA-ARCHITECTS/'
  },
  {
    name: 'How I Met Your Mother',
    des: 'O design da página é responsivo, o que significa que se adapta de forma elegante a diferentes tamanhos de tela e dispositivos. Isso garante uma experiência de usuário consistente, independentemente do dispositivo utilizado para acessar a página.',
    mission: 'Como desenvolvedor, minha missão é garantir realizar análise e design do sistema para oferecer uma experiência de usuário fluida e segura.',
    language: 'HTML5, CSS3, JS.',
    images: 'how.jpg',
    link: 'https://maynmk.github.io/HIMYM/'
  },
  {
    name: 'ESTETITEC ESTÉTICA GOIAS',
    des: 'Desenvolvido com Elementor no WordPress, o layout é estruturado para reorganizar elementos visuais como menus, botões e blocos de texto conforme o tamanho da tela, mantendo a legibilidade e a acessibilidade em qualquer resolução.',
    mission: 'O site da ESTETITEC ESTÉTICA GOIÁS foi desenvolvido para comunicar de forma clara e profissional os serviços de manutenção técnica especializada oferecidos pela empresa.',
    language: 'WordPress,Elementor.',
    images: 'estetitec.png',
    link: 'https://estetitecgoias.com.br/'
  },
  {
    name: 'Loja Cloud',
    des: 'Desenvolvido com Elementor no WordPress, o layout é otimizado para oferecer uma experiência de compra intuitiva e acessível, adaptando-se a diferentes tamanhos de tela e dispositivos, garantindo uma navegação fluida e a visualização adequada dos produtos.',
    mission: 'O site da Loja Cloud tem como missão fornecer uma plataforma online confiável e amigável, onde os clientes podem encontrar uma variedade de produtos de qualidade, com informações claras e um processo de compra simplificado.',
    language: 'WordPress,Elementor,Php',
    images: 'drop.png',
    link: 'https://lojacloud.com.br/'
  },
  {
    name: 'CLASSIFICADOS MÉDICOS BRASIL',
    des: 'Essa plataforma de marketplace foi projetada com cuidado para conectar compradores e vendedores de maneira segura e eficiente. Com uma interface intuitiva e recursos práticos, é possível anunciar produtos e serviços com facilidade, maximizando suas oportunidades de negócio.',
    mission: 'Facilitar conexões entre compradores e vendedores, promovendo transações seguras, rápidas e descomplicadas, enquanto ampliamos as oportunidades de negócio para todos os nossos usuários.',
    language: 'WordPress,Elementor,Php,html,css,API.',
    images: 'classificados.png',
    link: 'https://classificadosmedicosbrasil.com.br/'
  },
  {
    name: ' Landing Pages Que Convertem',
    des: 'Este projeto foi desenvolvido para demonstrar meu conhecimento em Figma e na aplicação de princípios de UX Writing e UX Design. A landing page foi cuidadosamente projetada para oferecer uma experiência intuitiva, combinando textos claros e objetivos que guiam o usuário em cada etapa, com um design visual atraente e funcional. Os textos foram criados seguindo práticas de UX Writing, priorizando mensagens diretas, consistentes e alinhadas aos objetivos do usuário, garantindo uma navegação fluida e sem fricções.',
    mission: 'Demonstrar habilidades técnicas e criativas no uso do Figma, integrando UX Writing para criar textos estratégicos que complementam o design, promovendo uma navegação eficiente, acessível e centrada no usuário.',
    language: 'Figma',
    images: 'Landing.JPG',
    link: 'https://www.figma.com/design/SWT0c3bx7hqsoq4G2qTVbP/PORTIFOLIO-FIGMA?node-id=1-2229&t=6Zy5Z6cfRZPfTtFZ-1'
  }
 

]);
const divs = useRef([]);
const scrollTab = useRef();
CustomHook(scrollTab, divs);
  return (
    <section className='projects' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        Meus Projetos
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        Estou animado para compartilhar alguns dos projetos em que tenho trabalhado recentemente. Cada projeto é uma oportunidade para aprender, crescer e criar algo significativo. Explore abaixo para saber mais sobre minhas iniciativas e o que estou desenvolvendo atualmente.</div>
       <div className="list">
        {
          listProjects.map((value, key) => (
            <div className='item' key={key} ref={(el) => el && divs.current.push(el)}>
              <div className="images">
                <a href={value.link} key={key} target="_blank" rel="noopener noreferrer">
                  <img src={value.images} alt="" />
                  </a>
              </div>
              <div className="content">
                <h3>{value.name}</h3>
                <div className="des">{value.des}</div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                    <div>
                        <h4>Missão</h4>
                        <div className="des">{value.mission}</div>
                    </div>
                </div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                    <div>
                        <h4>Linguagem</h4>
                        <div className="des">{value.language}</div>
                    </div>
                </div>
              </div>
            </div>
            
          ))
        }
       </div>
    </section>
  )
}
export default Projects
