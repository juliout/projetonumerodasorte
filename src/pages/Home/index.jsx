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

import InputName from '../../components/inputName'
import Email from '../../components/emailAutocompletee'


import {BsFillShareFill} from 'react-icons/bs'
import {RiUserUnfollowFill} from 'react-icons/ri'
import {VscDebugStackframeDot} from 'react-icons/vsc'
import {MdReportProblem} from 'react-icons/md'


export default function Home(){
  const [plataform, setPlataform] = useState('whatsapp')
  const [modalDescadastrar, setModalDescadastrar] = useState(false)
  const [modalReportar , setModalReportar] = useState(false)

  const [cadastrar, setCadastrar] = useState(false)
  const [formCadastro, setFormCadastro] = useState({})
  const [socialContact, setSocialContact] = useState('')

  // const sendCadastrar = async (e) => {
  //   e.preventDefault()
  //   console.log(e.target)
  //   let {name, eMail, genero, nascimento, social, socialContact} = e.target

  //   social.forEach(i => {
  //     if (i.checked === true)
  //       return social = i.id
  //     })

  //   let form = {
  //     name: name.value,
  //     email: eMail.value,
  //     genero: genero.value,
  //     nascimento: nascimento.value,
  //     social: social,
  //     socialContact: socialContact.value,
  //     site: 'horoscopozap'
  //   }
  //   setFormCadastro(form)   
  //   setCadastrar(true)
  // }
  function openModal(e){
    e.preventDefault()
    setCadastrar(true)
  }


    return (
        <>
            <Header/>
              {cadastrar === true ? <MCadastro setCadastrar={setCadastrar} form={formCadastro}/> : null}
              {modalDescadastrar === true ? <Modal type={'descadastrar'} Modal={setModalDescadastrar}/> : null}
              {modalReportar === true ? <Modal type={'reportarError'} Modal={setModalReportar}/> : null}
     
            <BannerDiv bg={nmbBg}>
                <div className="bannerMain">
                  <form className='left'>
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
                            <ul>
                              <li>
                                <input type="checkbox" name="" id=""/>
                                <label htmlFor="">Mega Sena</label>
                              </li>
                              <li>
                                <input type="checkbox" name="" id=""/>
                                <label htmlFor="">Lotofácil</label>
                              </li>
                              <li>
                                <input type="checkbox" name="" id=""/>
                                <label htmlFor="">Dupla Sena</label>
                              </li>
                              <li>
                                <input type="checkbox" name="" id=""/>
                                <label htmlFor="">Quina</label>
                              </li>
                              <li>
                                <input type="checkbox" name="" id=""/>
                                <label htmlFor="">Super sete</label>
                              </li>
                              <li>
                                <input type="checkbox" name="" id=""/>
                                <label htmlFor="">Timemania</label>
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <input type="checkbox" name="" id=""/>
                                <label htmlFor="">Lotomania</label>
                              </li>
                              <li>
                                <input type="checkbox" name="" id=""/>
                                <label htmlFor="">Dia de sorte</label>
                              </li>
                              <li>
                                <input type="checkbox" name="" id=""/>
                                <label htmlFor="">Federal</label>
                              </li>
                              <li>
                                <input type="checkbox" name="" id=""/>
                                <label htmlFor="">Loteca</label>
                              </li>
                              <li>
                                <input type="checkbox" name="" id=""/>
                                <label htmlFor="">Milionária</label>
                              </li>
                            </ul>
                          </div>
                      </div>
                      <div className='receber baseFont'>
                        <h3><p>2</p> Como quer receber ?</h3>
                        <div className='redesSelect'>
                          <div className='cardRede' onClick={()=> {setPlataform('whatsapp')}}>
                            <label htmlFor='whatsapp'><img src="/image/bwpp.png" alt="" htmlFor='rede'/></label>
                            <input type="radio" name="social" id="whatsapp"  defaultChecked/>
                          </div>
                          <div className='cardRede' onClick={()=> {setPlataform('telegram')}}>
                            <label htmlFor="telegram"><img src="/image/btele.png" alt="" /></label>
                            <input type="radio" name="social" id="telegram" />
                          </div>
                          <div className='cardRede' onClick={()=> {setPlataform('e-mail')}}>
                          <label htmlFor="e-mail"><img src="/image/bemail.png" alt="" /></label>
                            <input type="radio" name="social" id="e-mail" />
                          </div>
                        </div>
                        { 
                          plataform === 'whatsapp' ?          
                          <InputMask className='redeDado shadow' mask={'(99)99999-9999'} name='socialContact' id='socialContact' />               
                          : plataform === 'telegram' ? <input type='text'className='redeDado shadow' name='socialContact' id='socialContact'/>
                          : plataform === 'e-mail' ?<Email type='email' className='redeDado shadow' name='socialContact' id='socialContact'/>
                          : null
                        } 
                        <div className='termosdiv'>
                          <input type="checkbox" name="termos" id="termos" />
                          <label htmlFor="termos"> Li e aceito os <a>termos de uso</a></label>
                        </div>
                      <button className='cadastrarbtn' onClick={(e)=>openModal(e)}> CADASTRAR </button>                
                        
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

