import { useState, useRef } from "react";
import "./App.css";
import Authentication from "./Components/Authentication";
import Cookies from "universal-cookie";
import Chat from "./Components/Chat";

const cookies = new Cookies();

function App() {
  //comprueba si el usuario esta o no esta logeado
  const [isAuth, setIsAuth] = useState(cookies.get("token-autenticacion"));
  const [room, setRoom] = useState(null);

  const roomImputRef = useRef(null);
  //Si el usuaro NO esta identificado, se renderiza el componente de autenticacion
  if (!isAuth) {
    return (
      //envio la funcion setIsAuth por medio de props hacia Authentication.jsx
      <div>
        <Authentication setIsAuth={setIsAuth}></Authentication>
      </div>
    );
  }
  //Si el usuario SI esta identificado, se renderiza uno de los siguientes componentes
  return (
    //Si el usuaro especifica el nombre del chat, se renderiza el chat, de lo contrario se renderiza el componente preguntando el nombre de la room a la que quiere ingresar
    <div>
      {room ? (
        <Chat></Chat>
      ) : (
        <div className="room">
          <label>Enter room name</label>
          <input ref={roomImputRef}></input>
          <button onClick={() => setRoom(roomImputRef.current.value)}>
            Confirm
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
