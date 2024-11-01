import React, { useState, useRef } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import CustomHook from './CustomHook';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contacts() {
const [listContacts] = useState([
  {
    
    link:'https://www.linkedin.com/in/mayson-santos-silva-a61543144',
    icon: faLinkedin
  },{
    link:'https://wa.me/5562981929920?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços!',
    icon: faWhatsapp
  },{
    link:'href="mailto:maysonsantos46@gmail.com?subject=Contato%20do%20Site&body=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços!">',
    icon: faEnvelope
  },
  {
    link:'https://github.com/maynmk',
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
