import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/login/login';
import Sobre from './pages/sobre/sobre';
import Cadastrar from './pages/cadastrar/cadastrar';
import Home_usuario from './pages/home-usuario/home-usuario';
import Home_servidor from './pages/home-servidor/home-servidor';
import Processos from './pages/processos/processos';
import Novo_processo from './pages/novo-processo/novo-processo';
import Home_adm from './pages/home-adm/home-adm';
import Cadastros from './pages/cadastros/cadastros';
import Cadastro from './pages/cadastro/cadastro';
import Processo from './pages/processo/processo';
import Carteira from './pages/carteira/carteira';
import Sugestoes from './pages/sugestoes/sugestoes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/cadastrar' element={<Cadastrar />} />
        <Route path='/home-usuario' element={<Home_usuario />} />
        <Route path='/home-servidor' element={<Home_servidor />} />
        <Route path='/processo' element={<Processo />} />
        <Route path='/processos' element={<Processos />} />
        <Route path='/novo-processo' element={<Novo_processo />} />
        <Route path='/home-adm' element={<Home_adm />} />
        <Route path='/cadastros' element={<Cadastros />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/carteira' element={<Carteira />} />
        <Route path='/sugestoes' element={<Sugestoes />} />

      </Routes>
    </Router>
  );
}

export default App;