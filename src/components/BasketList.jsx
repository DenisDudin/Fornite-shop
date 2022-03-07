import { BasketItem } from './BasketItem';
import {useContext} from 'react'
import {ShopContext} from '../context'

function BasketList() {
  const {
    order = [],
    handleBasketShow = Function.prototype,
  } = useContext(ShopContext)

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.finalPrice * el.quantity;
  }, 0);

  return (
    <ul className="collection bascket-list">
      <li className="collection-item active cart-title">
        CART
        <i className="material-icons basket-close" onClick={handleBasketShow}>
          close
        </i>
      </li>
      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.mainId}
            {...item}
          />
        ))
      ) : (
        <li className="collection-item">Nothing</li>
      )}
      <li className="collection-item active">Total price:     {totalPrice} V
        <button className="btn">PAY</button>
      </li>
    </ul>
  );
}

export { BasketList };
