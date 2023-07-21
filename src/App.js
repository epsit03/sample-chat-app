import {} from "./firebase-config.js";
import { useRef, useState } from "react";
import { Auth } from "./components/Auth";
import "./styles.css";
import Cookies from "universal-cookie";
import { Chat } from "./components/Chat.js";
const cookies = new Cookies();

export default function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);

  const roomInputRef = useRef(null);

  if (!isAuth) {
    return <Auth setIsAuth={setIsAuth} />;
  }

  return (
    <div>
      {room ? (
        <Chat room={room} />
      ) : (
        <div className="room">
          {/* <label> Enter Room name:</label> */}
          <form action="">
            <div class="input-field">
              <input ref={roomInputRef} type="text" id="name" required />
              <label for="name">Your room name:</label>
            </div>
          </form>
          <button onClick={() => setRoom(roomInputRef.current.value)}>
            {" "}
            Enter Chat{" "}
          </button>
        </div>
      )}
    </div>
  );
}
