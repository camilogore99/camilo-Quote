const  Button = ({color , ContCliclk}) => {
      return (
            <button style={{background:''+color+''}} className="buttonNext" onClick={ContCliclk}>Next Quote</button>
      )
}
export default Button;