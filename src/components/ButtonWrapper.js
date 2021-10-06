import Button from './Button'
import './ButtonWrapper.css'

const ButtonWrapper = (props) => {
  return (
    <div className='btnWrapper-group'>
      <p className='descriptor'>{props.descr}</p>
      <Button background={props.background}></Button>
    </div>
  )
}

export default ButtonWrapper
