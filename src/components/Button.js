import './Button.css'
import { ReactComponent as AddShoppingCartSVG } from '../add_shopping_cart_black_24dp.svg'

const Button = (props) => {
  return <button className={`btn ${props.background}`}>Default</button>
}

export default Button
