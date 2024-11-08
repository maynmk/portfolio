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
