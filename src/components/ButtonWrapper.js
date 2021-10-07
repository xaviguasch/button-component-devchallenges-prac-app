import Button from './Button'
import './ButtonWrapper.css'

const ButtonWrapper = (props) => {
  return (
    <div className='btnWrapper-group'>
      <p className={`descriptor ${props.descrColor}`}>{props.descr}</p>
      <Button
        background={props.background}
        border={props.border}
        color={props.color}
        content={props.content}
        icon={props.icon}
        width={props.width}
      ></Button>
    </div>
  )
}

export default ButtonWrapper
