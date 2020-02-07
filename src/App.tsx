import React, { useEffect } from 'react';
import { BrowserRouter , Route , Switch } from 'react-router-dom';
import { Home , Admin } from './Pages';
import { Header } from './Components';
import { ProtectedRoute } from './app.routes';
import auth from './Auth';

const App : React.FC = () => {
  useEffect(() => {
    auth.logoutFromAllTabs();
  })

  return (
    <BrowserRouter>
        <Header>
          <Header.Nav link="Home" path="/"/>
          <Header.Nav link="Admin" path="/admin"/>
        </Header>
        <Switch>
            <Route exact path="/" component={Home}/>
            <ProtectedRoute path="/admin" component={Admin} />
        </Switch>
    </BrowserRouter>
  );

}

export default App;
