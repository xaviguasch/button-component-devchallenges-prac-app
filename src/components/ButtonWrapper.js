import Button from './Button'
import './ButtonWrapper.css'

const ButtonWrapper = (props) => {
  return (
    <div className='btnWrapper-group'>
      <p className={`descriptor ${props.descrColor === 'default' ? '' : 'hover-color'}`}>
        {props.descr}
      </p>
      <Button
        background={props.background}
        border={props.border}
        color={props.color}
        content={props.content}
      ></Button>
    </div>
  )
}

export default ButtonWrapper
