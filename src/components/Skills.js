import React, { useRef, useState } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJs, faFigma, faNodeJs} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
const [listSkills] = useState([
  {
    name: 'HTML',
    des: 'é a linguagem fundamental para criar páginas da web. Ele define a estrutura e o conteúdo de uma página, permitindo que os desenvolvedores criem experiências de usuário ricas e interativas na web. Dominar HTML é essencial para qualquer pessoa envolvida no desenvolvimento web e é frequentemente combinado com outras tecnologias, como CSS e JavaScript, para criar páginas da web dinâmicas e atraentes.',
    icon: faHtml5
  },
  {
    name: 'CSS',
    des: 'é uma linguagem de estilo usada para controlar a apresentação e o layout de páginas da web. Enquanto o HTML define a estrutura e o conteúdo de uma página, o CSS é responsável por estilizar esse conteúdo, permitindo que os desenvolvedores controlem aspectos visuais como cores, fontes, espaçamento e posicionamento.',
    icon: faCss3
  },
  {
    name: 'JavaScript',
    des: 'é uma linguagem de programação amplamente utilizada para desenvolvimento web. Ela permite adicionar interatividade e dinamismo às páginas da web, permitindo que os desenvolvedores criem funcionalidades como animações, validação de formulários, manipulação de eventos e muito mais.',
    icon: faJs
  },
  {
    name: 'ReactJS',
    des: 'ReactJS segue uma abordagem baseada em componentes, o que significa que as interfaces de usuário são construídas a partir de pequenos blocos de construção chamados componentes. Esses componentes podem ser reutilizados em toda a aplicação, facilitando a manutenção e a escalabilidade do código.',
    icon: faReact
  },
  {
    name: 'Vue.js',
    des: 'é um framework progressivo para construir interfaces de usuário. Ele é projetado para ser incrementavelmente adaptável e pode ser usado para criar desde projetos simples até aplicações complexas. A simplicidade e a flexibilidade do Vue.js tornam-no uma escolha popular entre os desenvolvedores.',
    icon: faVuejs
  },
  {
    name: 'Figma',
    des: 'possui uma interface de usuário intuitiva e fácil de usar, que permite aos designers criar e editar designs sem a necessidade de software desktop pesado. A interface é baseada em navegadores da web, tornando-a acessível em diferentes sistemas operacionais e dispositivos.',
    icon: faFigma
  },
  {
    name: 'Node.js',
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
    name: 'Joomla',
    des: 'é um sistema de gerenciamento de conteúdo (CMS) que oferece flexibilidade e escalabilidade para criar sites e aplicativos online. É conhecido por sua robustez e é uma ótima escolha para sites de médio a grande porte.',
    icon: faJoomla
  },
  {
    name: 'Elementor',
    des: 'é um construtor de páginas para WordPress que permite criar layouts personalizados usando uma interface drag-and-drop. Ele oferece uma ampla gama de widgets e templates que facilitam a criação de sites visualmente atraentes.',
    icon: faElementor
  },
  {
    name: 'PHP',
    des: 'é uma linguagem de programação server-side amplamente utilizada para desenvolvimento web. É especialmente eficaz para criar páginas dinâmicas e interagir com bancos de dados.',
    icon: faPhp
  },
  {
    name: 'SEO',
    des: 'refere-se à otimização para mecanismos de busca, um conjunto de práticas que ajudam a aumentar a visibilidade de um site nos resultados de busca. A implementação eficaz de SEO pode aumentar o tráfego orgânico e melhorar a experiência do usuário.',
    icon: faSearch
  },
  {
    name: 'Adobe Premiere Pro',
    des: 'é um software de edição de vídeo profissional amplamente utilizado na indústria para criar e editar vídeos de alta qualidade. Com uma interface rica em recursos, ele é ideal para cineastas e criadores de conteúdo.',
    icon: faAdobe
  },
  {
    name: 'Adobe Firefly',
    des: 'é uma ferramenta de design que permite aos usuários criar gráficos e elementos visuais de forma fácil e intuitiva, aproveitando a tecnologia de inteligência artificial para otimizar o processo criativo.',
    icon: faAdobe
  },
  {
    name: 'Photoshop',
    des: 'é um software de edição de imagens líder de mercado, amplamente utilizado para retoques, composição e design gráfico. É a ferramenta ideal para fotógrafos e designers que desejam criar imagens impactantes.',
    icon: faPhotoshop
  },
  {
    name: 'Illustrator',
    des: 'é um software de design gráfico que permite criar ilustrações vetoriais, logotipos e outros elementos gráficos. É amplamente utilizado por designers para criar arte digital de alta qualidade.',
    icon: faIllustrator
  },
  {
    name: 'Canva',
    des: 'é uma plataforma de design gráfico online que permite a criação de designs para redes sociais, apresentações, cartazes e muito mais, oferecendo uma interface amigável e uma vasta biblioteca de templates.',
    icon: faCanva
  },
  {
    name: 'Facebook Ads',
    des: 'é uma plataforma de publicidade que permite aos anunciantes criar e gerenciar anúncios direcionados para o público do Facebook e Instagram. É uma ferramenta poderosa para alcançar uma ampla audiência.',
    icon: faFacebook
  },
  {
    name: 'TikTok Ads',
    des: 'é a plataforma de publicidade do TikTok, permitindo que as marcas criem campanhas de anúncios interativos e envolventes para alcançar usuários jovens e criativos.',
    icon: faTikTok
  },
  {
    name: 'Google Ads',
    des: 'é uma plataforma de publicidade online que permite que as empresas exibam anúncios em resultados de pesquisa do Google e em sites parceiros. É uma ferramenta essencial para direcionar tráfego e aumentar as conversões.',
    icon: faGoogle
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

