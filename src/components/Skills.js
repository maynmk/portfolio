import React, { useRef, useState } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJs, faFigma, faNodeJs, faWordpress, faJoomla, faVuejs, faElementor, faSearch, faGolang, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
const [listSkills] = useState([
  {
    name: 'HTML',
    des: ' é a linguagem fundamental para criar páginas da web. Ele define a estrutura e o conteúdo de uma página, permitindo que os desenvolvedores criem experiências de usuário ricas e interativas na web. Dominar HTML é essencial para qualquer pessoa envolvida no desenvolvimento web e é frequentemente combinado com outras tecnologias, como CSS e JavaScript, para criar páginas da web dinâmicas e atraentes.',
    icon: faHtml5
  },
 
  {
    name: 'CSS',
    des: 'é uma linguagem de estilo usada para controlar a apresentação e o layout de páginas da web. Enquanto o HTML define a estrutura e o conteúdo de uma página, o CSS é responsável por estilizar esse conteúdo, permitindo que os desenvolvedores controlem aspectos visuais como cores, fontes, espaçamento e posicionamento.',
    icon: faCss3
  },
  {
    name: 'Javascript',
    des: 'é uma linguagem de programação amplamente utilizada para desenvolvimento web. Ela permite adicionar interatividade e dinamismo às páginas da web, permitindo que os desenvolvedores criem funcionalidades como animações, validação de formulários, manipulação de eventos e muito mais.',
    icon: faJs
  },
  {
    name: 'Golang',
    des: 'Uma linguagem de programação desenvolvida pelo Google, conhecida por sua simplicidade e eficiência em aplicações de rede.',
    icon: faGolang, 
  },
  {
    name: 'ReactJs',
    des: 'ReactJS segue uma abordagem baseada em componentes, o que significa que as interfaces de usuário são construídas a partir de pequenos blocos de construção chamados componentes. Esses componentes podem ser reutilizados em toda a aplicação, facilitando a manutenção e a escalabilidade do código.',
    icon: faReact
  },
  {
    name: 'Figma',
    des: 'possui uma interface de usuário intuitiva e fácil de usar, que permite aos designers criar e editar designs sem a necessidade de software desktop pesado. A interface é baseada em navegadores da web, tornando-a acessível em diferentes sistemas operacionais e dispositivos.',
    icon: faFigma
  },
  {
    name: 'Node',
    des: 'possui um ecossistema robusto de módulos, fornecido pelo npm (Node Package Manager), que é o maior repositório de pacotes de software do mundo. Os desenvolvedores podem facilmente instalar e gerenciar dependências de seus projetos usando o npm, o que acelera o desenvolvimento e permite a reutilização de código.',
    icon: faNodeJs
  },
  {
    name: 'MySQL',
    des: 'é um tipo de banco de dados relacional, o que significa que organiza os dados em tabelas relacionadas umas às outras. Isso torna mais fácil para os desenvolvedores encontrar, manipular e analisar os dados.',
    icon: faDatabase
  },
  {
    name: 'WordPress',
    des: 'é um sistema de gerenciamento de conteúdo (CMS) popular que permite aos usuários criar e gerenciar sites com facilidade. Com uma vasta biblioteca de temas e plugins, o WordPress é altamente personalizável e acessível para iniciantes e profissionais.',
    icon: faWordpress
  },
  {
    name: 'GitHub',
    des: 'Uma plataforma de hospedagem de código-fonte e controle de versão usando Git, muito popular entre desenvolvedores.',
    icon: faGithub, 
  },
  {
    name: 'Vue.js',
    des: 'Um framework progressivo para construir interfaces de usuário. É projetado para ser adotado de forma incremental e é conhecido por sua simplicidade e flexibilidade.',
    icon: faVuejs,
  }

]);
  return (
    <section className='skills' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        Minhas Skills
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        Comprometido em manter-me atualizado com as últimas tendências e tecnologias do mundo da web.
       </div>
       <div className="list">
        {
          listSkills.map((value, key) => (
            <div className={'item '} key={key} ref={(el) => el && divs.current.push(el)}>
              <FontAwesomeIcon icon={value.icon} />
              <h3>{ value.name }</h3>
              <div className="des">{value.des}</div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills

