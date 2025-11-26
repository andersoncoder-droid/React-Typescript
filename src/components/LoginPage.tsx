import { useAuthContext } from '../context/AuthContext';

export const LoginPage = () => {
  const {
    isChecking,
    isAuthenticated,
    loginWithEmailAndPassword,
    logout,
    user,
  } = useAuthContext();

  if (isChecking) {
    return <h3>Verificando usuario</h3>;
  }

  return (
    <>
      {isAuthenticated ? (
        <>
          <h3>Bienvenido</h3>
          <pre>{JSON.stringify(user, null, 2)}</pre>
          <button
            onClick={() => logout()}
            className='bg-blue-500 p-2 text-white rounded-xl mt-2'
          >
            Salir
          </button>
        </>
      ) : (
        <>
          <h3>Ingresar a la aplicación</h3>
          <button
            onClick={() =>
              loginWithEmailAndPassword('obi@google.com', '123456')
            }
            className='bg-blue-500 p-2 text-white rounded-xl mt-2'
          >
            Ingresar
          </button>
        </>
      )}
    </>
  );
};
