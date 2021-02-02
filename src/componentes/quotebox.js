import Frases from '../quotes.json'
import {FaQuoteLeft } from 'react-icons/fa'
import Logo from './logo.js'
import { useState } from 'react'
import {colorAlea}from './color'
import Button from './button.js'
import Author from './author.js'

const Quotebox =() => {
      const [state, setState] = useState(0);
      const [color, setColor] = useState(colorAlea()) 
      const MostrarFrases = Frases.quotes[state].quote;
      const authorQuot = Frases.quotes[state].author
      
      const ContCliclk = () => {
            setState( state +1)
            setColor(colorAlea())
      }
      document.querySelector("body").style.backgroundColor = color
      
      return (
      <div>
            <h2 className="title"><FaQuoteLeft /> {MostrarFrases} </h2>
            <Author author={authorQuot}/>
            <div className="buttons">
                  <Logo color={color} />
                  <div className="button">
                        < Button color={color} ContCliclk={ContCliclk}/>
                  </div>
            </div>
      </div>
      )
}
export default Quotebox ;