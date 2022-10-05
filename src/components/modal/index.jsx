import {ModalMain, DesDiv, RepoDiv} from './styledModal'
import Email from '../emailAutocompletee'
import InputName from '../inputName'

export default function Modal({type , Modal}) {
    
    const modalClose = () => {
       return Modal(false)
    }


    if (type === 'descadastrar') {
        return (
            <ModalMain>
                <DesDiv>
                    <button className='btnClose' onClick={modalClose}>X</button>
                    <form action="" method="post" id="descadastrar">
                        <h2>Descadastrar</h2>
                        <p>Para se descadastrar do site e cancelar o envio de receitas e promoções, preencha os campos abaixo:</p>
                        <div className='firstDiv'>
                            <div className='top'>
                                <div className='divinput'>
                                    <label htmlFor="">Nome Completo</label>
                                    <InputName type="text" name="" id="" />
                                </div>
                                <div className='divinput'>
                                    <label htmlFor="">Data Nasc.:</label>
                                    <input type="date" name="" id="" />
                                </div>
                            </div>
                            <div className='botton'>
                                <div className='divinput'>
                                    <label htmlFor="">Email</label>
                                    <Email type="email" name="" id="inputEmail" className='inputEmail'/>
                                </div>
                                <div className='divinput'>
                                    <label htmlFor="">senha</label>
                                    <input type="text" name="" id="" />
                                </div>
                            </div>
                        </div>
                        <button className='btnDescadastrar'> Descadastrar </button>
                    </form>
                </DesDiv>
            </ModalMain>
        )
    }

    if (type === 'reportarError') {
        return (
            <ModalMain>
                <RepoDiv>
                    <button className='btnClose' onClick={modalClose}> X </button>
                    <form action="" method="post" id='reportar'>
                        <h2>Comunicar Erro!</h2>
                        <p>Se você encontrou algum problema em nosso sistema, por favor nos comunique preenchendo os campos abaixo</p>

                        <div className='nameEmail'>
                            <InputName type="text" name="" id="" placeholder='Nome'/>
                            <Email type="email" name="" id="" placeholder='E-mail'/>
                        </div>
                        <input type="text" className='linkinput' placeholder='Link da pagina com erro '/>
                        <textarea name="" id="textArea" cols="30" rows="10" className='textArea' placeholder='Descrição do problema'/>
                        <button className='btnEnviar'>Enviar</button>
                    </form>
                </RepoDiv>
            </ModalMain>
        )
    
    }
}