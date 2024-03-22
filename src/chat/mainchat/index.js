import { Box } from "@mui/material";
import Header from "./Header";
import ChatArea from "./ChatArea";
import Footer from "./Footer";

const ChatBox = ({ roomData, handleSendMsg, allMsg, user, handleDelete }) => {
  return (
    <Box
      sx={{
        width: "50vw",
        display: "flex",
        height: "100%",
        flexDirection: "column",
      }}
    >
      {roomData.room ? (
        <>
          <Header roomData={roomData} />
          <ChatArea allMsg={allMsg} user={user} handleDelete={handleDelete} />
          <Footer handleSendMsg={handleSendMsg} />
        </>
      ) : (
        <>Please select a user to chat</>
      )}
    </Box>
  );
};
export default ChatBox;
