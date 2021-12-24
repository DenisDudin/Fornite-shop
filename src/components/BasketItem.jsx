function BasketItem(props) {
  const {
    mainId,
    displayName,
    finalPrice,
    quantity,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  return (
    <li className="collection-item">
      {displayName} 
      <i className="material-icons" onClick={() => decQuantity(mainId)}>remove</i> 
      x{quantity} V 
      <i className="material-icons" onClick={() => incQuantity(mainId)}>add</i> 
      = {finalPrice * quantity}
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
