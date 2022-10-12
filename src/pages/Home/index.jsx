import {useState} from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import MCadastro from '../../components/ModalCadastro'
import BtnFlip from '../../components/BtnFlip'
import LiPerguntas from '../../components/LiPerguntas'
import Modal from '../../components/modal'
import FuncionaCard from '../../components/FuncionaCards'
import InputMask from 'react-input-mask'

import nmbBg from '../../images/bannernumeros.png'
import indicarbg from '../../images/indicarbg.png'

import {BannerDiv, ComoFuncionaDiv, PerguntasDiv, IndicarBannerDiv,RestInfoDiv} from './homeStyled'

import Email from '../../components/emailAutocompletee'
import ModalError from '../../components/modalError'


import {BsFillShareFill} from 'react-icons/bs'
import {RiUserUnfollowFill} from 'react-icons/ri'
import {VscDebugStackframeDot} from 'react-icons/vsc'
import {MdReportProblem} from 'react-icons/md'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AuthContext } from '../../contexts/auth'
import { useContext } from 'react'

export default function Home(){

  const { Login } = useContext(AuthContext)

  const [plataform, setPlataform] = useState('whatsapp')
  const [modalDescadastrar, setModalDescadastrar] = useState(false)
  const [modalReportar , setModalReportar] = useState(false)

  const [cadastrar, setCadastrar] = useState(false)
  const [formCadastro, setFormCadastro] = useState({})



  const sendCadastrar = async (e) => {
    e.preventDefault()
    let array = []
    let socialI = ''
    let contact= ''
    let loteriaArray = e.target.loteria
    loteriaArray.forEach(element => {
      if (element.checked === true) {
        array.push(element.id)
      }
    });
    
    e.target.social.forEach(element=>{
      if(element.checked === true) {
        socialI = element.id
      }
    })
    if(e.target.socialContact.id === 'socialContact-wpp'){
      var er = /[^a-z0-9]/gi;
		  let texto = e.target.socialContact.value.replace(er, "");
      
      if(texto.length < 11) {
        return ModalError('telefone invalido')
      }
      contact = texto
    }
    if(e.target.socialContact.id === 'socialContact-email') {
      
      let resulte = e.target.socialContact.value.indexOf('@') > -1
      
      if(resulte === false) {
        return ModalError('email invalido')
      } 
      contact = e.target.socialContact.value
    }

    let userObj = {
      loteria : array,
      social: socialI,
      socialContact : contact,
    }
    setFormCadastro(userObj)
    setCadastrar(true)
    
  }
  

  const sendLogin = async  (login) => {
    await Login(login)
  }


    return (
        <>
            <Header sendLogin={sendLogin}/>
              {cadastrar === true ? <MCadastro setCadastrar={setCadastrar} form={formCadastro}/> : null}
              {modalDescadastrar === true ? <Modal type={'descadastrar'} Modal={setModalDescadastrar}/> : null}
              {modalReportar === true ? <Modal type={'reportarError'} Modal={setModalReportar}/> : null}

              <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
     
            <BannerDiv bg={nmbBg}>
                <div className="bannerMain">
                  <form className='left' onSubmit={(e)=> sendCadastrar(e)}>
                    <h1 className='leftTitle'>
                      Receba gratuitamente no seu zap lembretes de encerramento 
                      de apostas eo resultado dos sorteios das principais
                      loterias brasileiras!
                    </h1>
                    <div className='divselection'>
                      <div className='leftOne'>
                          <h3> <p>1</p> Selecione os sorteios de quais loterias você
                            quer receber o resultado por whatsapp:
                          </h3>

                          <div className="divUls">
                            <ul id='ul-lis-inputs'>
                              <li>
                                <input type="checkbox" name="loteria" id="megasena"/>
                                <label htmlFor="megasena">Mega Sena</label>
                              </li>
                              <li>
                                <input type="checkbox" name="loteria" id="lotofacil"/>
                                <label htmlFor="lotofacil">Lotofácil</label>
                              </li>
                              <li>
                                <input type="checkbox" name="loteria" id="duplasena"/>
                                <label htmlFor="duplasena">Dupla Sena</label>
                              </li>
                              <li>
                                <input type="checkbox" name="loteria" id="quina"/>
                                <label htmlFor="quina">Quina</label>
                              </li>
                              <li>
                                <input type="checkbox" name="loteria" id="supersete"/>
                                <label htmlFor="supersete">Super sete</label>
                              </li>
                              <li>
                                <input type="checkbox" name="loteria" id="timemania"/>
                                <label htmlFor="timemania">Timemania</label>
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <input type="checkbox" name="loteria" id="lotomania"/>
                                <label htmlFor="lotomania">Lotomania</label>
                              </li>
                              <li>
                                <input type="checkbox" name="loteria" id="diadesorte"/>
                                <label htmlFor="diadesorte">Dia de sorte</label>
                              </li>
                              <li>
                                <input type="checkbox" name="loteria" id="federal"/>
                                <label htmlFor="federal">Federal</label>
                              </li>
                              <li>
                                <input type="checkbox" name="loteria" id="loteca"/>
                                <label htmlFor="loteca">Loteca</label>
                              </li>
                              <li>
                                <input type="checkbox" name="loteria" id="milionaria"/>
                                <label htmlFor="milionaria">Milionária</label>
                              </li>
                            </ul>
                          </div>
                      </div>
                      <div className='receber baseFont'>
                        <h3><p>2</p> Como quer receber ?</h3>
                        <div className='redesSelect'>
                          <div className='cardRede' onClick={()=> {setPlataform('whatsapp')}}>
                            <label htmlFor='whatsapp'><img src="/image/bwpp.png" alt=""/></label>
                            <input type="radio" name="social" id="whatsapp"  defaultChecked/>
                          </div>
                          <div className='cardRede' onClick={()=> {setPlataform('telegram')}}>
                            <label htmlFor="telegram" ><img src="/image/btele.png" alt="" /></label>
                            <input type="radio" name="social" id="telegram" />
                          </div>
                          <div className='cardRede' onClick={()=> {setPlataform('e-mail')}}>
                            <label htmlFor="e-mail" ><img src="/image/bemail.png" alt="" /></label>
                            <input type="radio" name="social" id="e-mail" />
                          </div>
                        </div>
                        { 
                          plataform === 'whatsapp' ?          
                          <InputMask  type='text' className='redeDado shadow' mask={'(99)99999-9999'} name='socialContact' id='socialContact-wpp'/>               
                          : plataform === 'telegram' ? <input type='text'className='redeDado shadow' name='socialContact' id='socialContact-telegram' required/>
                          : plataform === 'e-mail' ?<Email type='email' className='redeDado shadow' name='socialContact' id='socialContact-email' required/>
                          : null
                        } 
                        <div className='termosdiv'>
                          <input type="checkbox" name="termos" id="termos" required/>
                          <label htmlFor="termos"> Li e aceito os <a href='/termosss'>termos de uso</a></label>
                        </div>
                      <button className='cadastrarbtn'> CADASTRAR </button>                
                        
                      </div>  
                    </div>
                  </form>
                  <div className='right'>
                      <img src="/image/gratis.png" alt="" className='selo'/>
                      <img src="/image/telzap.png" alt="" className='zap'/>
                  </div>
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
            <IndicarBannerDiv bg={indicarbg}>
                <div className="indicaMain">
                <div className="indicarLeft">
                    <h1>Título texto alerta de Sorte exemplo</h1>
                    <button> Indicar Amigos <BsFillShareFill className='shareIcon'/></button>
                </div>
                <div className="indicarRight">
                    <img src="/image/indicarimg.png" alt="conjuntodeimages" />
                </div>
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
                      <BtnFlip text={'Calendário de Sorteios'}/>
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
                    <div onClick={()=>{setModalDescadastrar(true)}}>
                      <RiUserUnfollowFill className='lIcon baseColor'/>
                      <BtnFlip text={'descadastrar'}/>
                    </div>
                    <div onClick={()=> setModalReportar(true)}>
                      <MdReportProblem className='lIcon baseColor'/>
                      <BtnFlip text={'reportar erro'}/>
                    </div>
                  </div>

                  <div className='right'>
                    <span className='baseFont baseColor'>
                      compartilhe:
                    </span>
                    <div>
                      <img src="/image/wppicon.png" alt="wppicon" className='socialIcons'/>
                      <img src="/image/teleicon.png" alt="telegramicon" className='socialIcons'/>
                      <img src="/image/instaicon.png" alt="instagramicon" className='socialIcons'/>
                      <img src="/image/faceicon.png" alt="facebookicon" className='socialIcons'/>
                      <img src="/image/tticon.png" alt="twittericon" className='socialIcons'/>
                      <img src="/image/linkIcon.png" alt="linkedinicon" className='socialIcons'/>
                    </div>
                  </div>
                </div>
              </div> 
            </RestInfoDiv>

            <Footer/>
        </>
    )
}

