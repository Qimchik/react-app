import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore, { history } from './store/config';
import indexRoutes from './routes/index';
import Layout from './components/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={configureStore().store}>
          <PersistGate loading={null} persistor={configureStore().persistor}>
            <ConnectedRouter history={history}>
              <Layout>
                <Switch>
                  {indexRoutes.map(prop =>
                    <Route path={prop.path} component={prop.component} key={prop.path} />)
                  }
                </Switch>
              </Layout>
            </ConnectedRouter >
          </PersistGate>
        </Provider>
      </div>
    );
  }
}

export default App;
