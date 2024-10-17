import PropTypes from 'prop-types'

const ShopCard = ({ card }) => {

  const { name, price, color, img } = card

  ShopCard.propTypes = {
    card: PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.string,
      color: PropTypes.string,
      img: PropTypes.string,
    })
  }
  return (
    <div className="relative z-10 w-full max-w-[360px] min-h-[320px] mx-auto p-6 py-4 flex bg-neutral-100 justify-between flex-col shadow-xl rounded-lg overflow-hidden">
      <div>
        <h2 className="text-center uppercase font-medium mb-1 tracking-tighter">{name}</h2>
        <h3 className="text-center text-gray-600 font-semibold text-sm">{color}</h3>
      </div>
      <img className="card-image" src={img} alt={name} />
      <div className="flex justify-between items-center gap-2">
        <p className="text-red-500 font-semibold">${price}</p>
        <button className="card-button btn uppercase rounded-full px-6 text-red-500 shadow-none font-bold">Add to cart</button>
      </div>
    </div>
  )
}

export default ShopCard