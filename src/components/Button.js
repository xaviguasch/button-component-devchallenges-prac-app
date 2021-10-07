import './Button.css'
import { ReactComponent as AddShoppingCartSVG } from '../add_shopping_cart_black_24dp.svg'

const Button = (props) => {
  return (
    <div>
      <button
        className={`btn ${props.background} ${props.border} ${props.color} ${props.width}`}
      >
        {!props.content ? 'Default' : props.content}
        {props.icon && <AddShoppingCartSVG fill='white' width='17px' />}
      </button>
    </div>
  )
}

export default Button
