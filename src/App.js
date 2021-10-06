import './App.css'
import ButtonWrapper from './components/ButtonWrapper'

function App() {
  return (
    <div className='container'>
      <h1 className='title'>Buttons</h1>

      <div className='main-content'>
        <div className='row'>
          <ButtonWrapper descr='<Button />' />
          <ButtonWrapper descr='&:hover, &:focus' background='dark-grey' />
        </div>
      </div>
    </div>
  )
}

export default App
