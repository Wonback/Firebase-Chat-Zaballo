import { auth, provider } from "../Firebase-config";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const Authentication = (props) => {
  const { setIsAuth } = props;
  //creamos una funcion para que al hacer click en el boton de iniciar sesion
  //con google, salte un popup
  const signInWithGoogle = async () => {
    //try catch para que cualquier error se proyecte en la consola de VScode
    try {
      const result = await signInWithPopup(auth, provider);
      //al iniciar sesion, se setea una cookie que guarda el token de autenticacion
      //para evitar tener que iniciar sesion cada vez que se abandona la pagina
      cookies.set("token-autenticacion", result.user.refreshToken);
      setIsAuth(true);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="authentication">
      <p>Sign in using Google</p>
      <button onClick={signInWithGoogle}>Sign In</button>
    </div>
  );
};

export default Authentication;
