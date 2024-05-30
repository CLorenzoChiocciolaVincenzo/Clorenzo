import React, { useEffect, useState }from 'react';
import './App.css';
import Topbar from './components/topbar/topbar';
import Body from './components/body/body';
import { AppContext, IAppContext } from './components/AppContext/AppContext';
import Root from './components/Note/note';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [jsonData, setJsonData] = useState<Root[]>()
  
  const propTypes: IAppContext= {jsonData, setJsonData}
  
  useEffect(() => {
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(json => setJsonData(json.posts))
  }, [])
  

  return (
    <AppContext.Provider value={propTypes}>
    <div className="App">
      <Topbar />
      <Body />
      <Sidebar />
    </div>
    </AppContext.Provider>
  );
}

export default App
