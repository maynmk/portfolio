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
                        <h4>Mission</h4>
                        <div className="des">{value.mission}</div>
                    </div>
                </div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                    <div>
                        <h4>Languages</h4>
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
