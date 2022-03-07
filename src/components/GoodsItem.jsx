import {useContext} from 'react'
import {ShopContext} from '../context'

function GoodsItem(props) {
  const { mainId, displayName, displayDescription, price, displayAssets} = props;
  const finalPrice = price.finalPrice

  const {addToBasket} = useContext(ShopContext)

  return (

      <div className="col s12 m7">
        <div className="card">
          <div className="card-image">
            <img src={displayAssets[0].full_background} alt={displayAssets[0].full_background} />
          </div>
          <div className="content">
            <span className="title">{displayName}</span>
            <p className="description">{displayDescription}</p>
          </div>
          <div className="card-action">
            <button className="btn" onClick={() => addToBasket({mainId, displayName, finalPrice})}>Buy</button>
            <span className="price">{finalPrice} V</span>
          </div>
        </div>
      </div>

  );
}

export { GoodsItem };
