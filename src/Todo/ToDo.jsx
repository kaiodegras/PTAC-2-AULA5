import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function ToDo() {
    const [atividade, setAtividade] = useState("");
    const [lista, setLista] = useState([]);
    const [id, setId] = useState(1);
    const [Faixa, setFaixa] = useState("");
    const [Categoria, setCategoria] = useState("");

    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista, {
            atividade: atividade,
            id: id,
            Faixa: Faixa,
            Categoria: Categoria
            
        }]);
        setId(id + 1);
        setAtividade("");
        setFaixa("");
        setCategoria("");
    };
    const remover = (id) => {
        /*setLista(lista.filter((ativ) => (ativ.id !== id ? lista : null)));*/
        const auxLista = [];
        lista.map((lista) => {
            if (lista.id !== id) {
                auxLista.push(lista);
            }
        });
        setLista(auxLista);
    }
    return (
        <div class="container">
            <img src="ibjjf.png"></img>
            <h1>Lutador de Jiu - Jiutsu</h1>
            <Link to="/">
                <button>Voltar Home</button>
            </Link>
            <form class="input" onSubmit={salvar}>
                <input type="text"
                    value={atividade}
                    onChange={(e) => { setAtividade(e.target.value) }} />
                    <input type="text"
                    value={Faixa}
                    onChange={(e) => { setFaixa(e.target.value) }} />
                    <input type="text"
                    value={Categoria}
                    onChange={(e) => { setCategoria(e.target.value) }} />
                <button>ADICIONAR</button>
            </form>
            {lista.map((ativ) =>
                <ul key={ativ.id}>
                    <li>
                        <p>{ativ.atividade}</p>
                        <p>{ativ.Faixa}</p>
                        <p>{ativ.Categoria}</p>
                        <button onClick={() => remover(ativ.id)}>Remover</button>
                    </li>
                </ul>
            )}
        </div>
    );
}