import React, {Fragment, useState} from 'react';




const List = () => {
    const [pokemones, setPokemones] = useState([])
    const get = async() => {
        const url = "https://pokeapi.co/api/v2/pokemon/";
        let response = await (await fetch(url)).json();
        response = response.results;
        setPokemones(response);
    }
    get();
    return(
        <Fragment>
          <ul>
            {
              pokemones.map( (item, index) => 
                <li key={index}>
                   <a href={item.url}>{item.name}</a>
                </li>
              )
            }
          </ul>
        </Fragment>
    );
}

export default List;