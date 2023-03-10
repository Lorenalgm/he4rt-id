import './App.css';
import foto_perfil from './assets/foto_perfil.png';
import logo from './assets/logo.png';

function App() {
  return (
    <div className="container">
      <main className="card_container">

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="card_front">
                <div className="card_header">
                  <img src={logo} alt="Logo da He4rt" />
                  <h1>HE4RT ID</h1>
                </div>
                <div className="card_body">
                  <img src={foto_perfil} alt="Avatar" className="avatar" />
                  <div className="card_infos">
                    <h1>Lorena Montes</h1>
                    <h3>Desenvolvedora fullstack</h3>
                  </div>
                </div>
              </div>
              <div className="card_back">
                <div className="card_header">
                  <img src={logo} alt="Logo da He4rt" />
                  <h1>HE4RT ID</h1>
                </div>
                <div className="card_body">
                  <div>
                      <h1>Lorena Montes</h1>
                      <h3>Desenvolvedora fullstack</h3>
                      <h3>He4rt's member</h3>
                      <h3><b>Github:</b> Lorenalgm</h3>
                      <h3><b>Linkedin:</b> lorenagmontes</h3>
                  </div>
                  <h1 className="card_ano">2023</h1>
                </div>
              </div>
            </div>

          </div>

      </main>
    </div>
  );
}

export default App;
