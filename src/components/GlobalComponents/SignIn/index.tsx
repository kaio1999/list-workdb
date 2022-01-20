import axios from "axios";
import React from "react";
import {
  Container,
  Input,
  DivInput,
  DivButton,
  ErrorModal,
  ButtonSignUp
} from "./styled";

interface Props {
  data?: any,
  edit?: boolean
}

const SignIn = () => {

  const [name, setName] = React.useState('')
  const [surname, setSurname] = React.useState('')
  const [height, setHeight] = React.useState<number | string>('')
  const [born, setBorn] = React.useState('')
  const [send, setSend] = React.useState(false)
  const [confirm, setConfirm] = React.useState(false)

  const sendForm = (name: string, surname: string, height: string | number, born: string) => {
    if (name && surname && height && born) {
      axios.post('https://games-dd788-default-rtdb.firebaseio.com/.json', {
        name: name,
        surname: surname,
        height: height,
        bornDate: born,
      }).then(() => {
        setSend(false)
        setConfirm(true)})

      setName('')
      setSurname('')
      setHeight('')
      setBorn('')
    }
    else {
      setSend(true)
    }

  }

  const date = new Date
    const actualYear = date.getFullYear()
    const actualMonth = date.getMonth() <= 9 ? date.getMonth() + '' + 1 : date.getMonth() + 1
    const actualDay = date.getDate()

    console.log(`${actualYear}-${actualMonth}-${actualDay}`,'data')

    if(parseInt(born.split('-')[0]) > actualYear) {
      setBorn('')
      setSend(true)
    }
  

  return (
    <>
      {send || confirm ? (
        <ErrorModal className='errorSend'>
          <div>
            <span>{send ? 'Por favor,verifique os campos e preencha-os corretamente.' : confirm && 'Formulario preenchido com sucesso!'}</span>
            <ButtonSignUp onClick={() => send ? setSend(false) : confirm && setConfirm(false)}>Ok</ButtonSignUp>
          </div>
        </ErrorModal>
      ) : (
        <>
          <Container>
            <DivInput className='divInput'>
              <Input className='input' required value={name} type='text' onChange={(e: any) => setName(e.target.value)} />
              <label>Nome</label>
            </DivInput>
            <DivInput className='divInput'>
              <Input className='input' required type='text' value={surname} onChange={(e: any) => setSurname(e.target.value)} />
              <label>Sobrenome</label>
            </DivInput>
            <DivInput className='divInput'>
              <Input className='input' required type='number' value={height} onChange={(e: any) => setHeight(e.target.value)} />
              <label>Altura</label>
            </DivInput>
            <DivInput className='divInput'>
              <div className='datePicker'>
                <label>Data de nascimento</label>
              </div>
              <Input className='input' required type='date' value={born} onChange={(e: any) => setBorn(e.target.value)}
               max={`${actualYear}-${actualMonth}-${actualDay}`} min="1900-12-30" />
            </DivInput>
            <DivButton>
              <ButtonSignUp onClick={() => sendForm(
                name,
                surname,
                height,
                born
              )}>ENVIAR</ButtonSignUp>
            </DivButton>
          </Container>
        </>
      )}
    </>
  );
};

export default SignIn;
