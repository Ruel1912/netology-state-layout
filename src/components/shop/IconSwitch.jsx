import PropTypes from 'prop-types'

const IconSwitch = ({ icon, onSwitch}) => {
  
  IconSwitch.propTypes = {
    icon: PropTypes.string.isRequired,
    onSwitch: PropTypes.func,
  }

  return (
    <span 
      className="material-icons cursor-pointer block ml-auto text-5xl text-gray-600 hover:text-gray-800"
      onClick={onSwitch}
    >
      {icon}
    </span>
  )
}

export default IconSwitch