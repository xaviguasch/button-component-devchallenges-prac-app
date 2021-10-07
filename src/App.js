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
            descrColor='black-text'
            background='soft-gray'
            border='border-none'
            color='greyed-out-text'
            content='Disabled'
          />
          <ButtonWrapper
            descr='<Button variant=”text” disabled />'
            descrColor='gray-1'
            background='white'
            border='border-none'
            color='greyed-out-text'
            content='Disabled'
          />
        </div>

        <div className='row'>
          <ButtonWrapper
            descr='<Button startIcon=”local_grocery_store” />'
            descrColor='black-text'
            background='blue-2'
            border='border-none'
            color='white-text'
            content='Default'
            icon={true}
          />
          <ButtonWrapper
            descr='<Button variant=”text” disabled />'
            descrColor='black-text'
            background='blue-2'
            border='border-none'
            color='white-text'
            content='Default'
            icon={true}
          />
        </div>

        <div className='row'>
          <ButtonWrapper
            descr='<Button size=”sm” />'
            descrColor='black-text'
            background='blue-2'
            border='border-none'
            color='white-text'
            content='Default'
            width='sm'
          />
          <ButtonWrapper
            descr='<Button size=”md” />'
            descrColor='black-text'
            background='blue-2'
            border='border-none'
            color='white-text'
            content='Default'
          />
          <ButtonWrapper
            descr='<Button size=”lg” />'
            descrColor='black-text'
            background='blue-2'
            border='border-none'
            color='white-text'
            content='Default'
            width='lg'
          />
        </div>

        <div className='row'>
          <ButtonWrapper
            descr='<Button color=”default” />'
            descrColor='black-text'
            background='soft-gray'
            border='border-none'
            color='dark-text'
            content='Default'
          />
          <ButtonWrapper
            descr='<Button color=”primary” />'
            descrColor='black-text'
            background='blue-2'
            border='border-none'
            color='white-text'
            content='Default'
          />
          <ButtonWrapper
            descr='<Button color=”secondary” />'
            descrColor='black-text'
            background='dark-green'
            border='border-none'
            color='white-text'
            content='Secondary'
          />
          <ButtonWrapper
            descr='<Button color=”danger” />'
            descrColor='black-text'
            background='red'
            border='border-none'
            color='white-text'
            content='Danger'
          />
        </div>

        <div className='row'>
          <ButtonWrapper
            descr='&:hover, &:focus'
            descrColor='hover-color'
            background='dark-grey'
            border='border-none'
            color='dark-text'
            content='Default'
          />
          <ButtonWrapper
            descr=''
            descrColor='black-text'
            background='blue-3'
            border='border-none'
            color='white-text'
            content='Default'
          />
          <ButtonWrapper
            descr=''
            descrColor='black-text'
            background='darkest-green'
            border='border-none'
            color='white-text'
            content='Secondary'
          />
          <ButtonWrapper
            descr=''
            descrColor='black-text'
            background='dark-red'
            border='border-none'
            color='white-text'
            content='Danger'
          />
        </div>
      </div>
    </div>
  )
}

export default App
