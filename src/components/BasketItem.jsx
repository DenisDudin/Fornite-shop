import {useContext} from 'react'
import {ShopContext} from '../context'

function BasketItem(props) {
  const {
    mainId,
    displayName,
    finalPrice,
    quantity,
  } = props;

  const {removeFromBasket, incQuantity, decQuantity } = useContext(ShopContext);

  return (
    <li className="collection-item">
      <i className="material-icons del" onClick={() => decQuantity(mainId)}>remove</i> 
      x{quantity}  
      <i className="material-icons add" onClick={() => incQuantity(mainId)}>add</i> 
      {displayName} = {finalPrice * quantity} V
      <span
        className="secondary-content"
        onClick={() => removeFromBasket(mainId)}
      >
        <i className="material-icons remove-item">close</i>
      </span>
    </li>
  );
}

export { BasketItem };
