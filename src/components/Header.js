import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()

  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd}
        />
      )}
    </header>
  )
}


// If we don't pass any props 
Header.defaultProps = {
    title: 'TODO Tracker '
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// Make prop to have type. We need to import PropTypes from 'prop-types'

style={{paddingTop : 20, paddingBottom: 20}}

// CSS in JS  h1  <h1 style = {headingStyle}> Hello </h1>
// const headingStyle ={
//    color : 'black'
// }
//We can use in tag CSS styling with  <h1 style = {{color: 'red' }}> Hello </h1>

export default Header
