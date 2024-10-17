import PropTypes from 'prop-types'

const ShopItem = ({ item }) => {

  const { name, price, color, img } = item

  ShopItem.propTypes = {
    item: PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.string,
      color: PropTypes.string,
      img: PropTypes.string,
    })
  }
  return (
    <div className="flex bg-neutral-100 justify-between items-center gap-4 mb-0.5 p-4 flex-wrap">
      <div className='min-w-40 min-h-16 relative overflow-hidden z-10'>
        <img className="list-image" src={img} alt={name} />
      </div>
      <h2 className="text-center uppercase font-medium mb-1 tracking-tighter">{name}</h2>
      <h3 className="text-center text-gray-600 font-semibold text-sm">{color}</h3>
      <p className="text-red-500 font-semibold">${price}</p>
      <button className="card-button btn uppercase rounded-full px-6 text-red-500 shadow-none font-bold">Add to cart</button>
  </div>
  )
}

export default ShopItem