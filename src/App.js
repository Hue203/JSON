import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import Jobdetail from "./pages/Jobdetail";
import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect } from "react-router-dom";

import Login from "./pages/Login";
import Joblist from "./pages/Joblist";

function App() {
  const [user, setUser] = useState({ isAuthenticated: false });
  const ProtectedRoute = (props) => {
    if (user.isAuthenticated === true) {
      return <Route {...props} />;
    } else {
      return <Redirect to="/login" />;
    }
  };

  return (
    <div>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/jobs" exact component={Joblist} />
        <Route path="/jobs/:id" exact component={Jobdetail} />
        <Route path="/login" exact component={Login} />
        <ProtectedRoute
          path="/jobs/:id"
          render={(props) => <Jobdetail {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
