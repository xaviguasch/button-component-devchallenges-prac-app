import './App.css'
import ButtonWrapper from './components/ButtonWrapper'

function App() {
  return (
    <div className='container'>
      <h1 className='title'>Buttons</h1>

      <div className='main-content'>
        <div className='row'>
          <ButtonWrapper
            descr='<Button />'
            descrColor='default'
            background='soft-grey'
            border='border-none'
            color='dark-text'
          />
          <ButtonWrapper
            descr='&:hover, &:focus'
            descrColor='hover-color'
            background='dark-grey'
            border='border-none'
            color='dark-text'
          />
        </div>

        <div className='row'>
          <ButtonWrapper
            descr='<Button variant=”outline” />'
            descrColor='default'
            background='white'
            border='border-blue'
            color='blue-text'
          />
          <ButtonWrapper
            descr='&:hover, &:focus'
            descrColor='hover-color'
            background='blue-2-semi-trans'
            border='border-blue'
            color='blue-text'
          />
        </div>

        <div className='row'>
          <ButtonWrapper
            descr='<Button variant=”text” />'
            descrColor='default'
            background='white'
            border='border-none'
            color='blue-text'
          />
          <ButtonWrapper
            descr='&:hover, &:focus'
            descrColor='hover-color'
            background='blue-2-semi-trans'
            border='border-none'
            color='blue-text'
          />
        </div>

        <div className='row'>
          <ButtonWrapper
            descr='<Button disableShadow />'
            descrColor='default'
            background='blue'
            border='border-blue'
            color='white-text'
          />
        </div>

        <div className='row'>
          <ButtonWrapper
            descr='<Button disabled />'
            descrColor='default'
            background='white'
            border='border-none'
            color='blue-text'
            content='Disabled'
          />
          <ButtonWrapper
            descr='&:hover, &:focus'
            descrColor='hover-color'
            background='blue-2-semi-trans'
            border='border-none'
            color='blue-text'
          />
        </div>
      </div>
    </div>
  )
}

export default App
