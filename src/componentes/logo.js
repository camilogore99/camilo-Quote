import { FaTwitter } from 'react-icons/fa'

const Logo = ({color}) => {
      return(
            <div className="icon">
            <a style={{background:''+color+''}} className="icon-twi" href="https://twitter.com/compose/tweet" target="_blank ">< FaTwitter/></a>
            </div>
      )
}
export default Logo;