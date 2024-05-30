import React, { useContext } from 'react';
import "./style.css"
import { AppContext, IAppContext } from '../AppContext/AppContext';
import Root from '../Note/note';
function Body(){
    const { jsonData, setJsonData } = useContext(AppContext) as IAppContext
    return (
        <div className="posts">
            <ul id="posts">
            {jsonData?.slice().reverse().map((item: Root) => (
          <li key={item.id}>
            <br></br>
            <p className='paragrafo notext' id="titi">🧑🏼 {item.id} <br/>📝Titolo: <br/>{item.title}</p>
            <p className='paragrafo as notext'>💬Contenuto: <br/>{item.body}<br/><br/> 🎯Tags: {item.tags.join('  ')}</p>
            <p className='paragrafo notext'>
              <span onClick={() => {
                  item.reactions.likes += 1; setJsonData([...jsonData]);
              }}>👍 {item.reactions.likes}</span>
              <span onClick={() => {
                item.reactions.dislikes += 1; setJsonData([...jsonData])
                }}><br/>
              👎 {item.reactions.dislikes}</span><br/> 👀 {item.views}</p>
          </li>
        ))}
            </ul>
        </div>
        
    )
    
}
export default Body