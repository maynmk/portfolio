import React, { useState, useRef } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import CustomHook from './CustomHook';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contacts() {
const [listContacts] = useState([
  {
    
    link:'isd',
    icon: faLinkedin
  },{
    link:'isd',
    icon: faWhatsapp
  },{
    link:'isd',
    icon: faEnvelope
  },
  {
    link:'isd',
    icon: faGithub
  }
])
const divs = useRef([]);
const scrollTab = useRef();
CustomHook(scrollTab, divs);

  return (
    <section className='contacts' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        Meus Contatos
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        Olá! Estou sempre aberto a novas oportunidades e adoraria conectar-me com você. Não hesite em entrar em contato se quiser discutir projetos interessantes, colaborações ou apenas para trocar ideias sobre tecnologia e desenvolvimento web. Estou ansioso para conversar e conhecer mais pessoas incríveis como você!
       </div>
       <div className="list"  ref={(el) => el && divs.current.push(el)}>
        {
          listContacts.map((value, key) => (
            <div className='item' key={key}>
              <a href={value.link} key={key} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={value.icon} />
              </a>
            </div>
          ))
        }
       </div>
    </section>
  )
}
export default Contacts
