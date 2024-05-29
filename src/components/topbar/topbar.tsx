import React, { useContext, useState } from 'react';
import "./style.css"
import { AppContext, IAppContext } from '../AppContext/AppContext';
import Root from '../Note/note';

function Topbar(){
    const { jsonData, setJsonData } = useContext(AppContext) as IAppContext
    const [titleContent, setTitleContent] = useState<string>('')
    const [bodyContent, setBodyContent] = useState<string>('')
    function aggiungere(){
        if(jsonData){
            const item ={
                id: 99,
                body: bodyContent,
                title: titleContent,
                reactions: {
                    likes: 0,
                    dislikes: 0
                },
            }
            let data = jsonData
            data?.push(item)
            setJsonData([...data])
        }
    }
return(
        <div className="topbar">
            <input
            type='text'
            placeholder='Titolo'
            value={titleContent}
            onChange={(event) => setTitleContent(event.target.value)}/>
            <input
            type="text"
            placeholder='Contenuto'
            value={bodyContent}
            onChange={(event) => setBodyContent(event.target.value)} />
            <button className="button" onClick={() => aggiungere()}>Aggiungi post</button>
        </div>
    )
}
export default Topbar