import {
  Avatar,
  Box,
  Chip,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const ChatArea = ({ allMsg, user, handleDelete }) => {
  return (
    <Box sx={{ overflowY: "auto", flex: "1 0 0", background: "#f9f9f9" }}>
      <Stack
        direction="row"
        justifyContent="center"
        sx={{
          py: 2,
          position: "sticky",
          top: 0,
          zIndex: 2,
          background: "#f9f9f9",
        }}
      >
        <Chip label="Today" />
      </Stack>
      <List sx={{ p: 0, overflowY: "auto", flex: "1 0 0" }}>
        {allMsg.map((item) => (
          <ListItem
            sx={
              item.sender._id === user._id
                ? { flexDirection: "row-reverse", mb: 2 }
                : { mb: 2 }
            }
          >
            <Box
              sx={
                item.sender._id === user._id
                  ? {
                      display: "flex",
                      width: "80%",
                      flexDirection: "row-reverse",
                    }
                  : { display: "flex", width: "80%" }
              }
            >
              <ListItemAvatar
                sx={
                  item.sender._id === user._id && {
                    display: "flex",
                    flexDirection: "row-reverse",
                  }
                }
              >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <Paper
                sx={
                  item.sender._id === user._id
                    ? { width: "100%", p: 1.5, bgcolor: "primary.light" }
                    : { width: "100%", p: 1.5 }
                }
              >
                <ListItemText
                  sx={
                    item.sender._id === user._id
                      ? { m: 0, color: "primary.contrastText" }
                      : { m: 0 }
                  }
                  primary={item.sender.name}
                  secondary={
                    <Typography variant="caption">{item.msg}</Typography>
                  }
                />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: 1,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={
                      item.sender._id === user._id && {
                        color: "primary.contrastText",
                      }
                    }
                  >
                    12.20 PM
                  </Typography>
                  <Box>
                    <IconButton size="small">
                      <ReplyIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      size="small"
                      color="error"
                      onClick={() => handleDelete(item._id)}
                    >
                      <DeleteOutlineIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </ListItem>
        ))}
        {/* <ListItem sx={{ mb: 2 }}>
          <Box sx={{ display: "flex", width: "80%" }}>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <Paper sx={{ width: "100%", p: 1.5 }}>
              <ListItemText
                sx={{ m: 0 }}
                primary="Vikas Kumar"
                secondary={
                  <Typography variant="caption">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when
                  </Typography>
                }
              />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: 1,
                }}
              >
                <Typography variant="body2">12.20 PM</Typography>
                <Box>
                  <IconButton size="small">
                    <ReplyIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" color="error">
                    <DeleteOutlineIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            </Paper>
          </Box>
        </ListItem>
        <ListItem sx={{ flexDirection: "row-reverse", mb: 2 }}>
          <Box
            sx={{ display: "flex", width: "80%", flexDirection: "row-reverse" }}
          >
            <ListItemAvatar
              sx={{ display: "flex", flexDirection: "row-reverse" }}
            >
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <Paper
              sx={{
                width: "100%",
                p: 1.5,
                bgcolor: "#ccc",
              }}
            >
              <ListItemText
                sx={{ m: 0 }}
                primary="Vikas Kumar"
                secondary={
                  <Typography variant="caption">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when
                  </Typography>
                }
              />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: 1,
                }}
              >
                <Typography variant="body2">12.20 PM</Typography>
                <Box>
                  <IconButton size="small">
                    <ReplyIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" color="error">
                    <DeleteOutlineIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            </Paper>
          </Box>
        </ListItem>
        <ListItem sx={{ mb: 2 }}>
          <Box sx={{ display: "flex", width: "80%" }}>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <Paper sx={{ width: "100%", p: 1.5 }}>
              <ListItemText
                sx={{ m: 0 }}
                primary="Vikas Kumar"
                secondary={
                  <Typography variant="caption">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when
                  </Typography>
                }
              />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: 1,
                }}
              >
                <Typography variant="body2">12.20 PM</Typography>
                <Box>
                  <IconButton size="small">
                    <ReplyIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" color="error">
                    <DeleteOutlineIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            </Paper>
          </Box>
        </ListItem> */}
      </List>
    </Box>
  );
};
export default ChatArea;
