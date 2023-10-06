import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper/modules";

export default function Slider() {
  const styleObj = {
    fontSize: 16,
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="container_slide-first">
            <div className="container_text-first">
              <h3>Olá, Seja bem vindo(a)</h3>
              <p>
                Esse é o meu blog pessoal, aonde eu conto um pouco mais sobre
                mim, de uma forma mais interativa e visual. Para continuar lendo
                basta deslizar com o mouse para a esquerda ou clicar nos dots em
                baixo :3
              </p>
            </div>
            <div className="container_image">
              <img
                src={require("../assets/kero.png")}
                style={{ maxWidth: 450 }}
                alt=""
                className="image-slider-first"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <div className="container_text">
              <h3>Quem sou eu?</h3>
              <p>
                Bom, para começar nada mais justo que contar um pouco sobre
                minhas raízes hehe, eu nasci no litoral de São Paulo, conhecida
                por ser uma das cidades mais antigas do Brasil: Itanhaém, apesar
                deste fato, vivi apenas 2 anos na cidade natal, sendo assim, fui
                criada mesmo no interior de São Paulo. <br />
                Durante minha infância, por ser do interior, não tive muito
                contato com tecnologia no geral, meu primeiro celular foi um
                tijolão rosa que ganhei aos 11 anos, usava para ouvir música e
                jogar aqueles joguinhos que vinham extremamente nostálgicos.
                Apesar disso, sempre quando podia cutucava a internet e os
                softwares, dando um jeito de baixar as músicas que queria, algo
                que inclusive faço até hoje rsrsrs, ainda não me adaptei aos
                serviços de streaming de música. <br />
                Bom o tempo passou e de uma forma bem inesperada vim parar em
                Santa Catarina, o que além de ser marcante foi extremamente
                importante pro meu desenvolvimento.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="container_slide">
            <div className="container_image">
              <img
                src={require("../assets/sakura-heart.gif")}
                alt=""
                class="image-slider"
              />
            </div>
            <div className="container_text">
              <h3>Trabalhar com tecnologia? Sério?</h3>
              <p style={styleObj}>
                Assim como toda criança sempre tive muitos sonhos, gostava
                bastante de jogos, desenhos e tudo que envolvia história, me
                fascinava ver o talento dos professores em ensinar e dos grandes
                músicos de rock, mas nunca tive um desejo sólido por algo em
                específico, assuntos relacionados a profissão sempre me deixavam
                ansiosa. Isso mudou quando eu conheci um projeto aos 13 anos de
                idade, o Technovation Girls, projeto que estimula o interesse de
                garotas pelo ramo tecnológico, ele combate a falta de
                representatividade feminina nesse setor, predominantemente
                composto por homens. Foi nesse maravilhoso projeto que vi a
                possibilidade de ingressar na carreira tecnológica.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="container_slide">
            <div className="container_image">
              <img
                src={require("../assets/oportunidade.gif")}
                alt=""
                class="image-slider"
              />
            </div>
            <div className="container_text">
              <h3>Oportunidade de ouro</h3>
              <p>
                Após participar algumas vezes do Technovation, recebi o link
                sobre uma bolsa de estudos (Técnico em Desenvolvimento de
                sistemas), onde finalmente podia pôr em prática o meu
                desenvolvimento no ramo tecnológico, era uma grande oportunidade
                de mudar a minha vida, tive que fazer alguns sacrifícios já que
                o local do curso era um pouco longe e eu ainda tinha que
                terminar o ensino médio, foi a primeira vez que ouvi a palavra:
                resiliência, era sobre o que eu precisava ter para conseguir me
                adaptar à nova rotina, mas fui um pouco longe.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="container_slide">
            <div className="container_image">
              <img
                src={require("../assets/sakura-fight.gif")}
                alt=""
                class="image-slider"
              />
            </div>
            <div className="container_text">
              <h3>Início de Carreira</h3>
              <p>
                Após completar o primeiro semestre do curso de desenvolvimento
                de sistemas, consegui estagiar na empresa que me concedeu essa
                bolsa, um desafio ainda maior, trabalhar - ir pro curso - ir
                para escola, foi de fato complicado, mas apesar disso, pude ter
                uma grande experiência, de pôr em prática aquilo que aprendi e
                depois de um tempo tive que tomar uma decisão.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="container_slide">
            <div className="container_image">
              <img
                src={require("../assets/sakura-decisao.gif")}
                alt=""
                class="image-slider"
              />
            </div>
            <div className="container_text">
              <h3>A decisão</h3>
              <p>
                Meu maior desejo era me efetivar, e consegui, mas tive que fazer
                um sacrifício: trancar o meu curso técnico, já que eu passaria a
                ter que trabalhar 8 horas por dia e ainda tinha, sim, o ensino
                médio, mas foi uma ótima decisão, a prática de trabalhar no dia
                a dia, os desafios e os aprendizados eram constantes, a
                experiência que eu tanto queria.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="container_slide">
            <div className="container_image">
              <img
                src={require("../assets/sakura-facul.gif")}
                alt=""
                class="image-slider"
              />
            </div>
            <div className="container_text">
              <h3>O que eu faço agora?</h3>
              <p>
                Depois de terminar o ensino médio, pensei comigo mesmo que seria
                interessante começar uma graduação e me especializar, abrir
                caminhos e novas jornadas, e cá estou iniciando o curso de
                Gestão da Tecnologia da Informação, e quero poder conhecer
                diferentes tecnologias, métodos, ambientes, e poder fazer parte
                de um time mais uma vez.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="container_slide">
            <div className="container_image">
              <img
                src={require("../assets/sakura-bye.gif")}
                alt=""
                class="image-slider"
              />
            </div>
            <div className="container_text">
              <h3>Obrigada!</h3>
              <p>
                Se chegou até aqui, agradeço pela atenção e por conhecer um
                pouco sobre mim, ah e vale feedbacks é claro (github link), foi
                desenvolvido com atenção mas sempre é válido alguma sugestão,
                obrigado novamente por chegar até aqui!
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
