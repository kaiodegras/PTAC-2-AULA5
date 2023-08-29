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

<<<<<<< HEAD
            {Lista.map((ativ)=>
               <div key={ativ.atividade}>
=======
            {Lista.map((ativ)=> 
               <div key={ativ.id}>
                <p>{ativ.id}</p>
>>>>>>> 3f1c84f3634653ee3cce4652ea0b73fb3847ab85
                <p>{ativ.atividade}</p>
               </div> 
            )}
           
        </div>
    );
}