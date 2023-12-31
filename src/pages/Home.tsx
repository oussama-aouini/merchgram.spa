import { useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react";

const Home = () => {
  const { instance, accounts } = useMsal();

  const callApi = async () => {
    const response = await instance.acquireTokenSilent({
      account: accounts[0],
      scopes: ['https://oadevorg.onmicrosoft.com/merchgram-api/merchgram.read'],
    });

    const headers = new Headers();
    headers.append('Authorization', `Bearer ${response.accessToken}`);

    const apiResponse = await fetch('http://localhost:5039/User', {
      method: 'GET',
      headers: headers,
    });

    const data = await apiResponse.json();
    console.log(data);
  };

  const initializeLogOut = () => {
    instance.logoutRedirect();
  };

  return (
    <>
    <div>
      <button onClick={callApi}>Call Protected API</button>
    </div>
      <button onClick={initializeLogOut}>Log out</button>
    </>
  );
};
export default Home;
