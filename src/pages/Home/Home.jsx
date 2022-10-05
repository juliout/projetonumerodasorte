import {useState} from 'react'
import InputMask from 'react-input-mask'

import InputName from '../../components/inputName'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import MCadastro from '../../components/ModalCadastro'
import BtnFlip from '../../components/BtnFlip'
import LiPerguntas from '../../components/LiPerguntas'
import Modal from '../../components/modal'

import Email from '../../components/emailAutocompletee'

import {BannerDiv, ComoFuncionaDiv, PerguntasDiv, IndicarBannerDiv, RestInfoDiv} from './homeStyled'

import { BsFillShareFill} from 'react-icons/bs'
import {RiUserUnfollowFill} from 'react-icons/ri'
import {VscDebugStackframeDot} from 'react-icons/vsc'
import {MdReportProblem} from 'react-icons/md'


export default function Home() {
  const [modalDescadastrar, setModalDescadastrar] = useState(false)
  const [modalReportar , setModalReportar] = useState(false)

  const [cadastrar, setCadastrar] = useState(false)
  const [formCadastro, setFormCadastro] = useState({})
  const [socialContact, setSocialContact] = useState('')
  const [plataform, setPlataform] = useState('whatsapp')


  const sendCadastrar = async (e) => {
    e.preventDefault()
    console.log(e.target)
    let {name, eMail, genero, nascimento, social, socialContact} = e.target

    social.forEach(i => {
      if (i.checked === true)
        return social = i.id
      })

    let form = {
      name: name.value,
      email: eMail.value,
      genero: genero.value,
      nascimento: nascimento.value,
      social: social,
      socialContact: socialContact.value,
      site: 'horoscopozap'
    }
    setFormCadastro(form)   
    setCadastrar(true)
  }

  return (
    <>
      <Header/>
     {cadastrar === true ? <MCadastro setCadastrar={setCadastrar} form={formCadastro}/> : null}
     {modalDescadastrar === true ? <Modal type={'descadastrar'} Modal={setModalDescadastrar}/> : null}
     {modalReportar === true ? <Modal type={'reportarError'} Modal={setModalReportar}/> : null}
      <BannerDiv>        
        <div className="bannerMain" id='BannerCadastrar'>
          <h1>Receba diariamente seu horóscopo no zap!</h1>
          <div className='content'>
            <div className='left'>
              <img src="/image/telzap.png" alt="telzap" className='telzap'/>
              <img src="/image/gratis.png" alt="gratis" className='gratis'/>
            </div>
            <form method="post" id='formCadastro' onSubmit={sendCadastrar}>
              <div className='forT'>
                <div className='input'>
                  <label htmlFor="name">Nome:</label>
                  <InputName/>
                </div>
                <div className='input'>
                  <label htmlFor="email">E-mail:</label>
                  <Email type="email" name='eMail' id='eMail'/>
                </div>
              </div>
              <dir className='fotB'>
                <div className='inputGenero'>
                  <p>Gênero:</p>
                  <div className='generos'>
                    <div>
                      <label htmlFor="asculino">M</label>
                      <input type="radio" name='genero' id='Masculino'/>
                    </div>
                    <div>
                      <label htmlFor="Feminino">F</label>
                      <input type="radio" name='genero' id='Feminino'/>
                    </div>'
                  </div>
                </div>
                <div className='input'>
                  <label htmlFor="nascimento">Data Nasc.:</label>
                  <InputMask type='date' name='nascimento' id='nascimento'/>
                </div>
              </dir>
              <div className='receber baseFont'>
                <span>Você quer receber seu Horóscopo por:</span>
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
                  <InputMask className='redeDado' mask={'(99)99999-9999'} name='socialContact' id='socialContact'/>               
                  : plataform === 'telegram' ? <input type='text'className='redeDado' name='socialContact' id='socialContact'/>
                  : plataform === 'e-mail' ?<Email type='email' className='redeDado' name='socialContact' id='socialContact'/>
                  : null
                } 
                <div className='termosdiv'>
                  <input type="checkbox" name="termos" id="termos" />
                  <label htmlFor="termos"> Li e aceito os <span>termos de uso</span></label>
                </div>
                <div className='cadastrarbtn'>
                  <button> CADASTRAR </button>                
                </div>
              </div>
                                         
            </form>
          </div>
          <span className='servico'>
            Serviço gratuito.
            Se quiser cancelar os envios basta clicar em "descadastrar" no rodapé do site
          </span>
        </div>      
      </BannerDiv>

      <ComoFuncionaDiv>
        <div className="funcionaMain">
          <div className='funcionaTop'>
            <h1>Como Funciona?</h1>
            <p>Para receber os lembretes, basta você seguir os passos abaixo:</p>
          </div>
          <div className='funcionaBottom'>
            <a className="funcionaCard" href='#BannerCadastrar'>
              <span className='cardN'>1</span>
              <p> 
                Cadastre os horários que você 
                termina suas refeições no 
                nosso sistema. 
              </p>
              <img src="/image/card1.png" alt="card" />
            </a>
            <a className="funcionaCard" href='#BannerCadastrar'>
              <span className='cardN'>2</span>
              <p>
                cadastre seus dados e uma senha, 
                para que você possa editar ou cancelar o envio dos 
                lembretes aqui pelo site
              </p>
              <img src="/image/card2.png" alt="card" />
            </a>
            <a className="funcionaCard" href='#BannerCadastrar'>
              <span className='cardN'>3</span>
              <p>
                Pronto! Todos os dias, ao fim de cada refeição,
               você receberá no zap um lembrete para escovar os dentes.
                O serviço é 100% gratuito e não precisa de instalação de 
                nenhum tipo de aplicativo no seu celular.
              </p>
              <img src="/image/card3.png" alt="card" />
            </a>
            <a className="funcionaCard" href='#BannerCadastrar'>
              <span className='cardN exclam'>!</span>
              <p>
                Se você quiser alterar os horários ou cancelar o envio dos 
                lembretes, basta entrar aqui no site e acessar o sistema, 
                usando a senha que você criou no momento do cadastro.
              </p>
              <img src="/image/card4.png" alt="card" />
            </a>

          </div>
        </div>
      
      </ComoFuncionaDiv>
    
      <PerguntasDiv>
        <div className="perguntasMain">
          <h1>Perguntas Frequentes</h1>
          <div className="perguntasContainer">
            <LiPerguntas></LiPerguntas>
            <LiPerguntas></LiPerguntas>
            <LiPerguntas></LiPerguntas>
            <LiPerguntas></LiPerguntas>
          </div>
        </div>

      </PerguntasDiv>
      
      <IndicarBannerDiv>
        <div className="indicaMain">
          <div className="indicarLeft">
            <h1>Título texto alerta de Horoscopo exemplo</h1>
            <button> Indicar Amigos <BsFillShareFill className='shareIcon'/></button>
          </div>
          <div className="indicarRight">
            <img src="/image/indicarImg2.png" alt="conjuntodeimages" />
          </div>
        </div>
      </IndicarBannerDiv>

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
  );
}
