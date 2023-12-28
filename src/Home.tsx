import { useMsal } from "@azure/msal-react";

const Home = () => {
  const { instance } = useMsal();

  const initializeLogOut = () => {
    instance.logoutRedirect();
  };

  return <button onClick={initializeLogOut}>Log out</button>;
};
export default Home;
