import { useAuthContext } from '../context/AuthContext';

export const LoginPage = () => {
  const { isChecking } = useAuthContext();
  
  if (isChecking) {
    return <h3>Verificando usuario</h3>;
  }

  return (
    <>
      <h3>Login</h3>
      <span></span>
    </>
  );
};
