import PropTypes from 'prop-types'
import ShopItem from './ShopItem'

const ListView = ({ items }) => {

  ListView.propTypes = {
    items: PropTypes.array
  }

  return (
    <div className="w-full">
      {items.map((item, index) => <ShopItem key={`si-${index}`} item={item} />)}
    </div>
  )
}

export default ListView