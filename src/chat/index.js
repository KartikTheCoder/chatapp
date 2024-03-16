import { useEffect, useRef, useState } from "react";
import { Paper } from "@mui/material";
import SideBar from "./sidebar";
import ChatBox from "./mainchat";
import Profile from "./profile";
import { useLocation, useNavigate } from "react-router-dom";
import io from "socket.io-client";
const PATH = "http://localhost:5000";
const Chat = () => {
  const socketRef = useRef();
  const [isConnected, setIsConnected] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [roomData, setRoomData] = useState({
    room: null,
    receiver: null,
  });
  const [allMsg, setAllMsg] = useState([]);
  const navigate = useNavigate();
  const { state } = useLocation();
  useEffect(() => {
    if (!state) navigate("/");
    const socket = io.connect(PATH);
    socketRef.current = socket;
    socket.on("connect", () => setIsConnected(true));
    socket.off("disconnect", () => setIsConnected(false));
  }, []);

  useEffect(() => {
    if (isConnected) {
      socketRef.current.emit("ADD_USER", state);
      socketRef.current.on("USER_ADDED", (data) => {
        setOnlineUsers(data);
      });
      socketRef.current.on("RECEIVED_MSG", (data) => {
        console.log(data, "form another users");
        setAllMsg((prevState) => [...prevState, data]);
      });

      return () => socketRef.current.disconnect();
    }
  }, [isConnected]);
  const handleSendMsg = (msg) => {
    if (socketRef.current.connected) {
      const data = {
        msg,
        receiver: roomData.receiver,
        sender: state,
      };
      socketRef.current.emit("SEND_MSG", data);
      setAllMsg((prevState) => [...prevState, data]);
    }
  };

  if (!state) return null;
  return (
    <Paper square elevation={0} sx={{ height: "100vh", display: "flex" }}>
      <SideBar
        user={state}
        onlineUsers={onlineUsers}
        roomData={roomData}
        setRoomData={setRoomData}
        setAllMsg={setAllMsg}
      />
      <ChatBox
        roomData={roomData}
        handleSendMsg={handleSendMsg}
        allMsg={allMsg}
        user={state}
        setAllMsg={setAllMsg}
      />
      <Profile user={state} />
    </Paper>
  );
};
export default Chat;
