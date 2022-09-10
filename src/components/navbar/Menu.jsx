import React, { Component } from 'react'
import Style from './Style.css'
import world from './img/world.png'
import aquecimento from './img/aquecimento.jpg'




function Menu() {
  return (
    
      
  <body>
          
          <header>
          <div >
          <ul> 
              <li >
                <img  src={world} className='logo' />
              </li>
            </ul>
          </div>

            <ul className='menu'>
              <li><a href="">Menu</a></li>
              <li><a href="">Home</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </header>
        
          <div className='texte'>


                  {/* <div className='fonte'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab fugiat consectetur quod numquam qui ratione, veniam quidem aut quae ex eos nobis soluta, dignissimos voluptas cum nostrum error esse placeat?

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ea ducimus, nostrum optio molestias, obcaecati aperiam dolore hic unde quos id laboriosam eligendi, fugit voluptatum iste voluptatem laudantium quo deserunt!
                  </div> */}

          </div>
          <content>
            {/*<div>
                <img className='cotent' src={aquecimento}/>
              </div>  */}

              <h1>"Aquecimento global e o efeito estufa"</h1>

          <div className='text'>

        <p>
          "O efeito estufa é um fenômeno de ordem natural capaz de garantir que a Terra seja habitável. Isso acontece porque ele é responsável por manter a temperatura média do planeta, evitando que o calor seja totalmente irradiado de volta ao espaço. Dessa forma, não há grandes amplitudes térmicas (variações de temperatura) entre a noite e o dia.
        </p>
          {/*          My first site in ReactJS          */}
        <p>
          A energia solar que chega até a superfície terrestre emitida pelos raios solares é absorvida em grande parte e logo irradiada de volta ao espaço. Quando esse calor volta ao espaço, os gases presentes na atmosfera impedem que todo esse calor seja dispersado, garantindo então que a temperatura média da Terra não se abaixe drasticamente.
        </p>

        <p>
          Os gases responsáveis pelo efeito estufa são vapor d'água, clorofluorcarbono (CFC), ozônio, metano, dióxido de carbono e óxido nitroso. Contudo, a concentração desses gases, principalmente o dióxido de carbono, aumentou significativamente na atmosfera nas últimas décadas. A emissão desses gases é proveniente principalmente da ação antrópica."
        </p>

          </div>

          <footer><h4>Todos os direitos reservados! &copy;</h4></footer>

          </content>
  </body>
          

  )
}

export default Menu