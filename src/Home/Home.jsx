import { useState } from "react";
import { Link } from "react-router-dom";
import  "./home.css"
export default function Home() {
   
    return (
        <div class="home">
            <h1>Faça seu Cadastro:</h1>
            <br></br>
            <h2>E-mail do usuário:</h2>
            <br></br>
            ,<input type="text" />
            <br></br>
            <br></br>
            <h2>Senha do usuário:</h2>
            <input type="text"></input>

            
            <Link to="/todo">
                <button>Entrar</button>
            </Link>


        </div>

    );
}