import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import Home from "./Home";
import Login from "./Login";

const App = () => {
  return (
    <>
      <AuthenticatedTemplate>
        <Home />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <Login />
      </UnauthenticatedTemplate>
    </>
  );
};

export default App;
