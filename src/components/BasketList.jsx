import { BasketItem } from './BasketItem';

function BasketList(props) {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.finalPrice * el.quantity;
  }, 0);

  return (
    <ul className="collection bascket-list">
      <li className="collection-item active cart-title">
        Cart
        <i className="material-icons basket-close" onClick={handleBasketShow}>
          close
        </i>
      </li>
      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.mainId}
            {...item}
            removeFromBasket={removeFromBasket}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
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
