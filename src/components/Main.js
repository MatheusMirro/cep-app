import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import '../App.css';

function Main() {

  const [query, setQuery] = useState('');
  const [local, setLocal] = useState({});

  const search = evt => {
    fetch(`https://viacep.com.br/ws/${query}/json/`)
      .then(res => res.json())
      .then(data => {
        setLocal(data);
        setQuery('');
        console.log(data);
        evt.preventDefault();
      });
  }

  const clearAll = () => {
    setLocal('');
  }

  return (
    <div className="container">
      <h1>CEP APP</h1>
      <input
        type="text"
        name="texto"
        placeholder="Buscar CEP..."
        className="cep-box"
        onChange={e => setQuery(e.target.value)}
        value={query}
        onKeyPress={search}
      />
      <FaSearch className="lupa" onClick={search}
        size="38.5px"

      />
      <div className="dados">
        <p>Logradouro: {local.logradouro}</p>
        <p>Complemento: {local.complemento}</p>
        <p>Bairro: {local.bairro}</p>
        <p>DDD: {local.ddd}</p>
        <p>Localidade: {local.localidade}</p>
        <p>UF: {local.uf}</p>

        <button onClick={clearAll}>Limpar Campos</button>
      </div>
    </div>
  )
}
export default Main;