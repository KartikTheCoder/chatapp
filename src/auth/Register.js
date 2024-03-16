import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const Register = () => {
  const [formError, setFormError] = useState(null);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const isUserExist = sessionStorage.getItem("user");
  const isToken = sessionStorage.getItem("token");
  useEffect(() => {
    if (isUserExist) navigate("/app", { state: JSON.parse(isUserExist) });
  }, []);

  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/user/register", data)
      .then((res) => {
        sessionStorage.setItem("token", res.data.data.token);
        const user = jwtDecode(res.data.data.token);
        sessionStorage.setItem("user", JSON.stringify(user));
        navigate("/app", { state: user });
      })
      .catch((err) => {
        setFormError(err.response.data);
      });
  };
  if (isToken) return null;
  return (
    <Container
      maxWidth="md"
      sx={{ display: "flex", alignItems: "center", height: "100vh" }}
    >
      <Grid container>
        <Grid item md={6}>
          <Paper
            square
            sx={{
              bgcolor: "primary.main",
              color: "primary.contrastText",
              height: "100%",
              display: "flex",
              alignItems: "center",
              //   border: (theme) => console.log(theme),
            }}
          >
            <Box sx={{ p: 5, textAlign: "center" }}>
              <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
                <svg
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMinYMin meet"
                  width="50"
                  height="50"
                >
                  <circle
                    cx="128"
                    cy="128"
                    r="114"
                    stroke="#FFF"
                    strokeWidth="20"
                    fill="none"
                  />
                  <path
                    d="M97.637 121.69c27.327-22.326 54.058-45.426 81.98-67.097-14.646 22.505-29.708 44.711-44.354 67.215-12.562.06-25.123.06-37.626-.119zM120.737 134.132c12.621 0 25.183 0 37.745.179-27.505 22.206-54.117 45.484-82.099 67.096 14.646-22.505 29.708-44.77 44.354-67.275z"
                    fill="#FFF"
                  />
                </svg>

                <svg
                  width="50"
                  height="50"
                  viewBox="-10.5 -9.45 21 18.9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
                  <g stroke="currentColor" strokeWidth="1" fill="none">
                    <ellipse rx="10" ry="4.5"></ellipse>
                    <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                    <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
                  </g>
                </svg>
              </Box>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: "600", mt: 3 }}
              >
                CHAT APP
              </Typography>

              <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when
              </Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item md={6}>
          <Paper
            square
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{ p: 5 }}
              component="form"
              onSubmit={handleSubmit(onSubmit)}
            >
              {formError && (
                <Alert sx={{ mb: 3 }} severity="error">
                  {formError.msg}
                </Alert>
              )}
              <Typography
                variant="h5"
                sx={{ mb: 2, fontWeight: "500", textTransform: "uppercase" }}
              >
                Register here
              </Typography>
              <TextField
                fullWidth
                id="name"
                label="Name"
                variant="outlined"
                sx={{ mb: 3 }}
                {...register("name", {
                  required: "Required field",
                })}
                error={!!errors.name}
                helperText={errors.name && errors.name.message}
              />

              <TextField
                fullWidth
                id="email"
                label="Email"
                variant="outlined"
                sx={{ mb: 3 }}
                {...register("email", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "invalid email",
                  },
                })}
                error={!!errors.email}
                helperText={errors.email && errors.email.message}
              />

              <TextField
                fullWidth
                id="password"
                label="Password"
                variant="outlined"
                sx={{ mb: 3 }}
                {...register("password", {
                  required: "Required field",
                })}
                error={!!errors.password}
                helperText={errors.password && errors.password.message}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ py: 2 }}
              >
                Register
              </Button>
            </Box>
            <Box sx={{ textAlign: "right", pr: 1 }}>
              <Typography variant="body2">
                Already have an account{" "}
                <Button onClick={() => navigate("/")}>Login</Button>
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Register;
