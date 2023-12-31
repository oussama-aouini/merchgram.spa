import { useMsal } from '@azure/msal-react';

export const LoginPage = () => {
  const { instance } = useMsal();

  const initializeSignIn = () => {
    instance.loginRedirect();
  };

  return (
    <>
      <button onClick={initializeSignIn}>Sign in</button>
    </>
  );
};