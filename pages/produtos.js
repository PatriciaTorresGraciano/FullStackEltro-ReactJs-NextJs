import React from 'react';
import {useState, useEffect} from 'react';
import styles from '../styles/Produto.module.css'

export default function Produtos() {
    
    const aumentar = (event) => {
        if (event.target.style.width === "212px") {
            event.target.style.width = "106px";
        }
        else {
            event.target.style.width = "212px";
        }
    }
    
    const diminuir = (event) => {
        if (event.target.style.width === "106px") {
            event.target.style.width = "212px";
        }
        else {
            event.target.style.width = "106px";
        }
    }
     
    const [ produtos, setProdutos ] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const resposta = await fetch("http://localhost:3000/api/produtos")
            const dados = await resposta.json()
            setProdutos(dados);
        }
        fetchData();   
    }, []); 

    function exibir_todos() {
        let elementos = document.getElementsByClassName(`${styles.celula}`);
        for(let i=0; i<elementos.length; i++){
            elementos[i].style="display:inline-block";
        }
    }

    function exibir_categorias(categorias) {
        let elementos = document.getElementsByClassName(`${styles.celula}`);
        for(let i = 0; i < elementos.length; i++){
            if (categorias === elementos[i].children[0].id)
                elementos[i].style="display: inline-block";
            else
                elementos[i].style="display:none";
        }
    }
    
    return(
        <div>
            <div className="container-fluid">
                <title>Nossos Produtos</title>

                <h1>Nossos Produtos</h1>
                <hr />

                <h4>Categorias</h4>
                
                <nav className="nav">
                    <ul className="list-group">
                        <li className="list-group-item border-0 p-1">
                            <button className="list-group-item list-group-item-action border-0 p-1" onClick={exibir_todos} href="#">Todos (12)</button>
                        </li>
                        <li className="list-group-item border-0 p-1">
                            <button className="list-group-item list-group-item-action border-0 p-1" onClick={()=>exibir_categorias('geladeira')} href="#">Geladeiras (3)</button>
                        </li>
                        <li className="list-group-item border-0 p-1">
                            <button className="list-group-item list-group-item-action border-0 p-1" onClick={()=>exibir_categorias('fogao')} href="#">Fogões (2)</button>
                        </li>
                        <li className="list-group-item border-0 p-1">
                            <button className="list-group-item list-group-item-action border-0 p-1" onClick={()=>exibir_categorias('microondas')} href="#">Micro-ondas (3)</button>
                        </li>
                        <li className="list-group-item border-0 p-1"> 
                            <button className="list-group-item list-group-item-action border-0 p-1" onClick={()=>exibir_categorias('lavaRoupas')} href="#">Lavadora de roupas (2)</button>
                        </li>
                        <li className="list-group-item border-0 p-1">
                            <button className="list-group-item list-group-item-action border-0 p-1" onClick={()=>exibir_categorias('lavaLoucas')} href="#">Lava-louças (2)</button>
                        </li>
                    </ul>
                </nav>
            </div>

    <div className="container pl-5" style={{marginTop:-250, marginLeft: 180}}>
                <div className="row">
                    {produtos.map((item) =>{
                     
                        return(
                            <div className={styles.celula} >
                    <div className={`${styles.itens} pr-3`} key={item.idproduto} id={item.categoria}>
                                    <div>
                                        <img id="img" onMouseOver={aumentar}  onMouseOut={diminuir} style={{width:120}} src={item.imagem} alt={item.nome_produto} /> 
                                    </div> 
                                    <div className={styles.informacoes_do_produto}>
                                        {item.descricao}
                                        <hr/>
                                    </div>
                                    <div className={styles.preco_antigo}>
                                        R${item.preco}
                                    </div>
                                    <div className={styles.preco}>
                                        R${item.preco_venda}
                                    </div>
                                </div>
                            </div>
                        )            
                    })}
                </div>
            </div>
        </div>
    )
}
  