import { Box, Button, TextField } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useState } from "react";
const Footer = ({ handleSendMsg }) => {
  const [msg, setMsg] = useState("");
  const handleChange = (e) => {
    setMsg(e.target.value);
  };
  const handleSumit = (e) => {
    e.preventDefault();
    if (msg) {
      handleSendMsg(msg);
    }
    setMsg("");
  };
  return (
    <Box sx={{ p: 1, display: "flex" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Button sx={{ minWidth: "auto", mr: 1 }}>
          <MoreVertIcon />
        </Button>
        <Button sx={{ minWidth: "auto", mr: 1 }}>
          <InsertEmoticonIcon />
        </Button>
      </Box>
      <Box
        sx={{ display: "flex", flex: 1 }}
        component="form"
        onSubmit={handleSumit}
      >
        <TextField
          placeholder="Type your msg and hit"
          size="small"
          sx={{
            "& .MuiInputBase-root": {
              borderRadius: 0,
              borderRight: 0,
            },
          }}
          fullWidth
          value={msg}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="outlined"
          sx={{ borderRadius: 0, minWidth: "auto", height: "100%" }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};
export default Footer;
