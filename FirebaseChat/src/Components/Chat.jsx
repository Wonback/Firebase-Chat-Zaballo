import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, database } from "../Firebase-config";

const Chat = (props) => {
  const { room } = props;
  const [nuevoMensaje, setNuevoMensaje] = useState("");

  const mensajesDatabaseRef = collection(database, "mensajes");

  const handleSubmit = async (event) => {
    event.preventDefautl();

    if (nuevoMensaje === "") return;

    await addDoc(mensajesDatabaseRef, {
      text: nuevoMensaje,
      time: serverTimestamp(),
      user: auth.currentUser.displayName,
      room,
    });
    setNuevoMensaje("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="chat-form">
        <input
          className="chat-input"
          placeholder="Escribe tu mensaje"
          onChange={(event) => setNuevoMensaje(event.target.value)}
          value={nuevoMensaje}
        ></input>
        <button type="submit" className="chat-boton-enviar">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
