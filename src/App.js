import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Skills from './components/Skills'
import Projetos from './components/Projects'
import Contatos from './components/Contacts'


function App() {

  return (
    <main>
      <NavBar />
      <Home />
      <Skills />
      <Projetos />
      <Contatos />
    </main>
  );
}

export default App;
