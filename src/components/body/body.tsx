import React, { useContext } from 'react';
import "./style.css"
import { AppContext, IAppContext } from '../AppContext/AppContext';
import Root from '../Note/note';

function Body(){
    const { jsonData } = useContext(AppContext) as IAppContext
    return (
        <div className="posts">
            <ul id="posts">
            {jsonData?.map((item: Root) => (
          <li key={item.id}>
            <p className='paragrafo'>Titolo: <br/>{item.title}</p>
            <p className='paragrafo'>Contenuto: <br/>{item.body}</p>
            <p className='paragrafo'>Like: <br/>{item.reactions.likes}<br/> Dislike: <br/>{item.reactions.dislikes}</p>
          </li>
        ))}
            </ul>
        </div>
    )
}
export default Body