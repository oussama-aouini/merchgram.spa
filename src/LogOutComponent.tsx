import { useMsal } from '@azure/msal-react';

const LoginPage = () => {
  const { instance } = useMsal();

  const initializeSignIn = () => {
    instance.logoutRedirect();
  };

  return (
    <>
      <div onClick={initializeSignIn}>Sign in</div>
    </>
  );
};