import "./App.css";
import Slider from "./slider/";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-container">
          <div className="logo-container">
            <img src={require("./assets/cat_icon_header.gif")} alt="" />
            <h2>Developer Info</h2>
          </div>
          <div className="container_links">
            <div className="div_link">
              <img src={require("./assets/icon-linkedin.png")} alt="" />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/fernanda-guimarães-santana"
              >
                Linkedin
              </a>
            </div>
            <div className="div_link">
              <img src={require("./assets/icon_github.png")} alt="" srcset="" />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/annythingelse"
              >
                Github
              </a>
            </div>
            <div className="div_link">
              <img
                src={require("./assets/icon_instagram.png")}
                alt=""
                srcset=""
              />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/nanahguims"
              >
                Instagram
              </a>
            </div>
            <div className="div_link">
              <img src={require("./assets/icon_email.png")} alt="" srcset="" />
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:fernandadev0202@gmail.com"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </header>
      <body>
        <div className="home_container">
          <div className="info_container">
            <img
              src={require("./assets/profile.jpeg")}
              alt=""
              className="profile_img"
            />
            <p>
              Nome: Fernanda Guimarães <br />
              Idade: 18 anos <br />
              Jogo Favorito: Stardew Valley
            </p>
          </div>
          <Slider />
        </div>
      </body>
    </div>
  );
}
export default App;
