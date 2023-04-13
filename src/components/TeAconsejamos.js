import React from "react";
import ciencia from '../imagenes/ciencia-y-tecnologia.png';
import robot from '../imagenes/chat-bot.png';
import interactivo from '../imagenes/interactivo.png';
import './TeAconsejamos.css';


const TeAconsejamos = () => {
    return (
        <body class="Fondo">

            <div Class="fondoGeneral">

            </div>
            <h1 ClassN="titulo">  TE ACONSEJAMOS</h1>
            <br />
            <br />
            <br />
            <br />


            <div Class="general">
                <div Class="imagenFondo">
                    <div Class="imagen">
                    </div>
                    <img src={ciencia} alt="consejo1" style = {{width:"200px", height:"200px"}}
                    
                    />
                </div>

                <div Class="descripcion">
                    <div Class="enunciados">
                        <h2>CÓMO USAR LA TECNOLOGÍA ESTA VUELTA A CLASES</h2>
                    </div>
                    <h3></h3>

                    <div Class="fondoParrafo">
                        <div Class="parrafo">
                            <p> Insertar contenido de texto... </p>
                            <br />
                            <b></b>
                            <br />
                            <br />
                        </div>
                    </div>


                </div>
            </div>

            <div Class="general">
                <div Class="imagenFondo">
                    <div Class="imagen">
                    </div>
                    <img src={robot} alt="consejo2" style = {{width:"200px", height:"200px"}}
                    />
                </div>
                <div Class="descripcion">
                    <div Class="enunciados">
                        <h2>CÓMO ACOMPAÑAR POSITIVAMENTE</h2>
                        <h3></h3>
                    </div>
                    <div Class="fondoParrafo">
                        <div Class="parrafo">
                            <p> Insertar contenido de texto... </p>
                            <br />
                            <b></b>
                            <br />
                            <br />
                        </div>
                    </div>


                </div>
            </div>


            <div Class="general">
                <div Class="imagenFondo">
                    <div Class="imagen">
                    </div>
                    <img src={interactivo} alt="consejo3" style = {{width:"200px", height:"200px"}}
                    />
                </div>
                <div Class="descripcion">
                    <div Class="enunciados">
                        <h2>UN PASO A LA VEZ</h2>
                        <h3></h3>
                    </div>
                    <div Class="fondoParrafo">
                        <div Class="parrafo">
                            <p> Insertar contenido de texto... </p>
                            <br />
                            <b></b>
                            <br />
                            <br />


                        </div>
                    </div>


                </div>
            </div>

        </body>
    )

}

export default TeAconsejamos;