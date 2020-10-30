import React from 'react';
import GlobalStyle from './styles/global'
import SigIn from './pages/SigIn/index'
//import SigUp from './pages/SigUp/index'
import AuthContext from './contexto/AuthContext'

const App: React.FC = () => (
   <>
      <AuthContext.Provider value={{name: 'Renan'}}>
         <SigIn/>
      </AuthContext.Provider>
      <GlobalStyle/>
   </>
)

export default App;
