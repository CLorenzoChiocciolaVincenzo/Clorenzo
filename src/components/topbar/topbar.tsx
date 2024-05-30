import React, { useContext, useState } from 'react';
import "./style.css"
import { AppContext, IAppContext } from '../AppContext/AppContext';
function Topbar(){
    const { jsonData, setJsonData } = useContext(AppContext) as IAppContext
    const [titleContent, setTitleContent] = useState<string>('')
    const [bodyContent, setBodyContent] = useState<string>('')
    const [tagsContent, setTagsContent] = useState<string>('')
    const [loggContent, setLoggContent] = useState<string>('')
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    function aggiungere(){
        if (bodyContent === '' && titleContent === '' && tagsContent === ''){
            alert("I campi sono obbligatori"); return
        }if (bodyContent === '' && titleContent === ''){alert("I campi sono obbligatori"); return
        }if (titleContent === '' && tagsContent === ''){alert("I campi sono obbligatori"); return
        }if (bodyContent === '' && tagsContent === ''){alert("I campi sono obbligatori"); return
        }
        if (bodyContent === '' || titleContent === '' || tagsContent === ''){
            alert("Il campo è obbligatorio"); return
        }
        if(jsonData){
            const item ={
                id: loggContent,
                body: bodyContent,
                title: titleContent,
                tags: [tagsContent],
                reactions: {
                    likes: 0,
                    dislikes: 0
                },
                views: 1,
                userId: 1000
            }
            jsonData?.push(item)
            setJsonData([...jsonData])
        }
        setTitleContent('');
        setBodyContent('');
        setTagsContent('');
    }
    function Login(){
        if (loggContent === ''){
            alert("Il campo è obbligatorio")
            return
        }
        setIsLoggedIn(true);
    }
    
return(
        <div className="topbar">
            <input
            placeholder="Login"
            className="login-input"
            name="Login"
            type="Login"
            
            value={loggContent}
            onChange={(event) => setLoggContent(event.target.value)}
            />
            <button className="button" onClick={() => Login()}>Login</button>
            {isLoggedIn && (
        <>
        <p className='benve'>Benvenuto {loggContent},<br/> vuoi pubblicare qualcosa?</p>
          <input
            type='text'
            placeholder='Titolo'
            value={titleContent}
            onChange={(event) => setTitleContent(event.target.value)}
            
          />
          <textarea
            placeholder='Contenuto'
            value={bodyContent}
            onChange={(event) => setBodyContent(event.target.value)} 
             />
          <input
            type='text'
            placeholder='Tags'
            value={tagsContent}
            onChange={(event) => setTagsContent(event.target.value)}
             />
          <button className="button" onClick={() => aggiungere()}>Aggiungi post</button>
        </>
      )}
            <div id='social'>
            <div className="spinner"></div>
            <p
            id='we'
            >
                Cubo <br/>Social
            </p>
            </div>
        </div>
    )
}
export default Topbar