import {Link} from 'react-router-dom'

export const Footer = () => {
  return (
    <footer>
        <p>Copyright 2022</p>
        <Link to="/about">About</Link>
    </footer>
  )
}

export default Footer