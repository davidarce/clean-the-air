import { Switch, Route, Redirect } from 'react-router-dom';

import { Home } from '../pages/home';
import { Measurements } from '../pages/measurements';

export const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/measurements" component={Measurements} />
      <Route path="">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};
