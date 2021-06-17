import React, { Suspense, lazy, Component } from "react";
import { Router, Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import { history } from "./history";
import { connect } from "react-redux";
import Spinner from "./components/@vuexy/spinner/Loading-spinner";
import { ContextLayout } from "./utility/context/Layout";
import ComponentSpinner from "./components/@vuexy/spinner/Loading-spinner";

// Route-based code splitting
const Home = lazy(() => import("./views/pages/Home/HomeContainer"));

const Clients = lazy(() => import("./views/pages/Client/ClientContainer"));

const ClientDetail = lazy(() =>
  import("./views/pages/Client/ClientDetailContainer")
);

const Properties = lazy(() =>
  import("./views/pages/Properties/PropertiesContainer")
);

const login = lazy(() =>
  import("./views/pages/authentication/login/LoginContainer")
);

const ProjectDetail = lazy(() =>
  import("./views/pages/Project/ProjectDetail/ProjectDetailContainer")
);

const ProjectContainer = lazy(() =>
  import("./views/pages/Project/ProjectContainer")
);
const ProjectSellDetail = lazy(() =>
  import("./views/pages/Project/ProjectSellDetail/ProjectSellDetailContainer")
);
const agenda = lazy(() =>
  import("./views/pages/agenda/agendaContainer")
);
const agencies = lazy(() =>
  import("./views/pages/agencies/agenciesContainer")
);
const users = lazy(() =>
  import("./views/pages/users/userContainer")
);
const buy = lazy(() =>
  import("./views/pages/Project/BuyProject/buyProjectContainer")
);
const sell = lazy(() =>
  import("./views/pages/Project/SellProject/sellProjectContainer")
);
const userDetail = lazy(() =>
  import("./views/pages/users/userDetailContainer")
);
const agenciesDetail = lazy(() =>
  import("./views/pages/agencies/agenciesDetailContainer")
);

// Set Layout and Component Using App Route
const RouteConfig = ({
  component: Component,
  fullLayout,
  permission,
  user,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {

      return (
        <ContextLayout.Consumer>
          {(context) => {
            let LayoutTag =
              fullLayout === true
                ? context.fullLayout
                : context.state.activeLayout === "horizontal"
                ? context.horizontalLayout
                : context.VerticalLayout;
            return (
              <LayoutTag {...props} permission={props.user}>
                <Suspense fallback={<Spinner />}>
                  <Component  {...props} />
                </Suspense>
              </LayoutTag>
            );
          }}
        </ContextLayout.Consumer>
      );
    }}
  />
);
const mapStateToProps = (state) => {
  return {
    user: state.auth.login.userRole,
  };
};

const AppRoute = connect(mapStateToProps)(RouteConfig);


const checkAuth = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

const AuthRoute = (props) => (
    checkAuth() ? (
    <AppRoute {...props}/>
    ) : (
      <Redirect to={{ pathname: "/" }} />
    )
);

const UnAuthRoute = (props) => (
    checkAuth() ? (
      <Redirect to={{ pathname: "/dashboard" }} />
    ) : (
      <AppRoute {...props} />
    )
);
    
class AppRouter extends React.Component {

  render() {
    return (
      // Set the directory path if you are deploying in sub-folder
      <BrowserRouter>
        <Router history={history} loading={<ComponentSpinner />}>
          <Switch>
            <AuthRoute exact path="/dashboard" component={Home} />
            <AuthRoute exact path="/clients" component={Clients} />
            <AuthRoute exact path="/clients/:id" component={ClientDetail} />
            <AuthRoute path="/projects/:_id" component={ProjectDetail} />
            <AuthRoute path="/properties" component={Properties} />
            <AuthRoute path="/projects" component={ProjectContainer} />
            <AuthRoute path="/projectsSell/:_id" component={ProjectSellDetail} />
            <AuthRoute path="/agenda" component={agenda} />
            <AuthRoute exact path="/agencies" component={agencies} />
            <AuthRoute exact path="/users" component={users} />
            <AuthRoute path="/buyProject" component={buy} />
            <AuthRoute path="/sellProject" component={sell} />
            <AuthRoute path="/users/:_id" component={userDetail} />
            <AuthRoute path="/agencies/:_id" component={agenciesDetail} />
            <UnAuthRoute path="/" component={login} fullLayout />
          </Switch>
        </Router>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
