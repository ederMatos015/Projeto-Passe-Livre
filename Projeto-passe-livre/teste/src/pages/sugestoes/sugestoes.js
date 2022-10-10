import App , { useState } from 'react'
import "./sugestoes.css"
import { FaStar } from "react-icons/fa"
import { Button } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




function Sugestoes() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

    return (
      
      <div id="body" style={{ height:'100vh' }}>
        
          <div id="bloco">   
          <h1 id='avalieNos'>Avalie-nos</h1>
          <h4 id='suaOpiniao'>A sua opinião é muito importante para nós!</h4>
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;

              return (
              <label id="estrela">
                <input 
                  type="radio" 
                  name="rating" 
                  value={ratingValue} 
                  onClick={() => setRating (ratingValue)} 
                  
                  /> 
                <FaStar 
                className="star" 
                color={ratingValue <= (hover || rating) ? "#ffcc66" : "#937a48"} 
                size={40} 
                onMouseEnter= {() => setHover(ratingValue)}
                onMouseLeave= {() => setHover(null)}
                  />
              </label>
              );
            })}
            <p id='suaNota'>Sua nota é {rating}.</p>
            <input type="text" id="comentario" placeholder="Deixe um Comentário ou sugestão." /> 
            <button href="" id="botao">Enviar</button>
            
          </div>

      </div>
      

      
    );
  }
  
  export default Sugestoes;
