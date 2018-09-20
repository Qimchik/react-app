import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import indexRoutes from './routes/index';
import Layout from './components/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <BrowserRouter>
            <Switch>
              {indexRoutes.map(prop =>
                <Route path={prop.path} component={prop.component} key={prop.path} />)
              }
            </Switch>
          </BrowserRouter>
        </Layout>
      </div>
    );
  }
}

export default App;
