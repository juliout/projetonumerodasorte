import {useState} from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import MCadastro from '../../components/ModalCadastro'
import BtnFlip from '../../components/BtnFlip'
import LiPerguntas from '../../components/LiPerguntas'
import Modal from '../../components/modal'
import FuncionaCard from '../../components/FuncionaCards'

import {BannerDiv, ComoFuncionaDiv, PerguntasDiv, IndicarBannerDiv,RestInfoDiv} from './homeStyled'

import InputName from '../../components/inputName'
import Email from '../../components/emailAutocompletee'


import {BsFillShareFill} from 'react-icons/bs'
import {RiUserUnfollowFill} from 'react-icons/ri'
import {VscDebugStackframeDot} from 'react-icons/vsc'
import {MdReportProblem} from 'react-icons/md'


export default function Home() {
    return (
        <>
            <Header/>
            <BannerDiv>
                <div className="bannerMain">

                </div>
                
            </BannerDiv>
            <ComoFuncionaDiv>
              <div className="funcionaMain">
                <div className='funcionaTop'>
                    <h1>Como Funciona?</h1>
                    <p>Para receber os lembretes, basta você seguir os passos abaixo:</p>
                </div>
                <div className='funcionaBottom'>
                    <FuncionaCard img={"/image/card1.png"} number={1} 
                    text={'Cadastre os horários que você termina suas refeições no nosso sistema.'}
                    />
                    <FuncionaCard
                      img={'/image/card2.png'} number={2} text={'cadastre seus dados e uma senha, para que você possa editar ou cancelar o envio dos lembretes aqui pelo site'}
                    />
                    <FuncionaCard
                      img={'/image/card3.png'} number={3} text={'Pronto! Todos os dias, ao fim de cada refeição, você receberá no zap um lembrete para escovar os dentes. O serviço é 100% gratuito e não precisa de instalação de nenhum tipo de aplicativo no seu celular.'}
                    />
                    <FuncionaCard 
                      img={'/image/card4.png'} number={4} text={'Se você quiser alterar os horários ou cancelar o envio dos lembretes, basta entrar aqui no site e acessar o sistema, usando a senha que você criou no momento do cadastro.'}
                    />
                </div>
              </div>        
            </ComoFuncionaDiv>
            <PerguntasDiv>
              <div className="perguntasMain">
                <h1>Perguntas Frequentes</h1>
                <div className="perguntasContainer">
                  <LiPerguntas>
                    <h3>Punctuation conventions used in Chinese languages</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lore</p>
                  </LiPerguntas>
                  <LiPerguntas>
                    <h3>Punctuation conventions used in Chinese languages</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lore</p>
                  </LiPerguntas>
                  <LiPerguntas>
                    <h3>Punctuation conventions used in Chinese languages</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lore</p>
                  </LiPerguntas>
                  <LiPerguntas>
                    <h3>Punctuation conventions used in Chinese languages</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lore</p>
                  </LiPerguntas>
                </div>
              </div>
            </PerguntasDiv>
            <IndicarBannerDiv>
                <div className="indicaMain">
                <div className="indicarLeft">
                    <h1>Título texto alerta de Sorte exemplo</h1>
                    <button> Indicar Amigos <BsFillShareFill className='shareIcon'/></button>
                </div>
                {/* <div className="indicarRight">
                    <img src="/image/indicarImg2.png" alt="conjuntodeimages" />
                </div> */}
                </div>
            </IndicarBannerDiv>
            <PerguntasDiv>
                <div className="perguntasMain">
                  <h1>Perguntas Frequentes</h1>
                  <div className="perguntasContainer">
                  <LiPerguntas>
                    <h3>Punctuation conventions used in Chinese languages</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lore</p>
                  </LiPerguntas>
                  <LiPerguntas>
                    <h3>Punctuation conventions used in Chinese languages</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lore</p>
                  </LiPerguntas>
                  <LiPerguntas>
                    <h3>Punctuation conventions used in Chinese languages</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lore</p>
                  </LiPerguntas>
                  <LiPerguntas>
                    <h3>Punctuation conventions used in Chinese languages</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lore</p>
                  </LiPerguntas>
                  </div>
                </div>
            </PerguntasDiv>
            <RestInfoDiv>
        <div className="restMain">
          <div className="restTop">
            <div className="list">
              <span className='hiddenmenu baseColor'>Menu</span>
              <div className='divLeft'>
                <VscDebugStackframeDot className='baseColor hidden'/>
                <BtnFlip className='textleft' text={'Quem somos'} />
              </div>
              <div className='divLeft'>
                <VscDebugStackframeDot className='baseColor point'/>
                <BtnFlip text={'Termos de uso'}/>
              </div>
              <div className='divLeft'>
                <VscDebugStackframeDot className='baseColor point'/>
                <BtnFlip text={'Fale conosco'}/>
              </div>
              <div className='divLeft'>
                <VscDebugStackframeDot className='baseColor point'/>
                <BtnFlip text={'Politica de privacidade'}/> 
              </div> 
            </div>
            <div className="bot">
              <span className='baseFont baseColor'> Apoio:</span>
              <img src="/image/submarino.png" alt="logosubmarino" className='restLogo'/>
              <img src="/image/americanas.png" alt="logoamericanas" className='restLogo'/>
              <img src="/image/genera.png" alt="logogenera" className='restLogo'/>
            </div>
          </div>
          <div className="restBot">
            <div className='left'>
              <div onClick={()=>{}}>
                <RiUserUnfollowFill className='lIcon baseColor'/>
                <BtnFlip text={'descadastrar'}/>
              </div>
              <div onClick={()=> {}}>
                <MdReportProblem className='lIcon baseColor'/>
                <BtnFlip text={'reportar erro'}/>
              </div>
            </div>

            <div className='right'>
              <span className='baseFont'>
                compartilhe:
              </span>
              <div>
                <img src="/image/wppicon.png" alt="wppicon" className='socialIcons'/>
                <img src="/image/teleicon.png" alt="telegramicon" className='socialIcons'/>
                <img src="/image/instaicon.png" alt="instagramicon" className='socialIcons'/>
                <img src="/image/faceicon.png" alt="facebookicon" className='socialIcons'/>
                <img src="/image/tticon.png" alt="twittericon" className='socialIcons'/>
                <img src="/image/linkicon.png" alt="linkedinicon" className='socialIcons'/>
              </div>
            </div>
          </div>
        </div> 
            </RestInfoDiv>

            <Footer/>
        </>
    )
}