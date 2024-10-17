import ShopCard from './ShopCard'
import PropTypes from 'prop-types'

const CardsView = ({ cards }) => {
  
  CardsView.propTypes = {
    cards: PropTypes.array
  }

  return (
    <div className={`grid grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] gap-12 justify-items-center flex-grow mx-auto w-full max-w-6xl`}> 
      {cards.map((card, index) => <ShopCard key={`sc-${index}`} card={card} />)}
    </div>
  )
}

export default CardsView