import { useState } from "react";
import { Link } from "react-router-dom";

export default function ToDo() {
    const [atividade, setAtividade] = useState("");
    const [Lista, setLista] = useState([]);
    

    const [id, setId] = useState(1)

    const salvar = (e) =>{
        e.preventDefault();
        setLista([...Lista,{
            atividade: atividade, id:id
        }])

        setId(id + 1)
        console.log(Lista)
    }
   
    return (
        <div>
            <Link to="/">home</Link>
            <h1>Lista de Atividades</h1>

            <form onSubmit={salvar}>
                <input type="text"
                  onChange={(e) =>{setAtividade(e.target.value)}}/>
                  <button>ADD</button>
            </form>

            {Lista.map((ativ)=> 
               <div key={ativ.id}>
                <p>{ativ.id}</p>
                <p>{ativ.atividade}</p>
               </div> 
            )}
           
        </div>
    );
}