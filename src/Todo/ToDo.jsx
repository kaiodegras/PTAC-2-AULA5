import { useState } from "react";
import { Link } from "react-router-dom";

export default function ToDo() {
    const [Atividade, setAtividade] = useState("");
    const [Lista, setLista] = useState([]);

    const [id, setId] = useState(1)

    const salvar = (e) =>{
        e.proventDefault();
        setLista([...Lista,{
            atividade: atividade, id:id
        }])

        setId(1 + 1)
        console.log(Lista)
    }
   
    return (
        <div>
            <Link to="/">home</Link>
            <h1>Lista de Atividades</h1>

            <form onSubmit={salvar}>
                <input type="text"
                  onRateChange={(e) =>{setAtividade(e.target.value)}}/>
                  <button>ADD</button>
            </form>

            {Lista.map((ativ)=>
               <div>
                <p>{ativ.atividade}</p>
               </div>
            )}
           
        </div>
    );
}