import { FaTwitter } from 'react-icons/fa'

const Logo = ({color}) => {
      return(
            <div className="icon">
            <a style={{background:''+color+''}} className="icon-twi" href="">< FaTwitter/></a>
            </div>
      )
}
export default Logo;