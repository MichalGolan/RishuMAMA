import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useGetUserQuery } from "../../data/queries/useGetUserQuery";
import { useState } from "react";
import { User } from "../../data/api/users";


interface Props {
    onSignUp: Function;
    onLogin: Function;
}
const noneChosen = "";
export default function Login(props: Props) {
  
  const [email, setEmail] = useState<string>(noneChosen);
  const [password, setPassword] = useState<string>(noneChosen);

  const {isLoading: isGetUserLoading, refetch: fetchUser, data: userData, isError: isGetUserError} = useGetUserQuery(email, password);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log(`email ${email} password ${password}`);

    fetchUser().then(r => {
      if(r.data) {
        props.onLogin(r.data);
      }
  })
    console.log(`here email ${email} password ${password}`);

  }

  
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{  
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={e => {setEmail(e.target.value)}}
            value={email}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={e => {setPassword(e.target.value)}}
            value={password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
          <Grid container>
            <Grid item>
              <Link variant="body2" onClick={(e) => props.onSignUp(e)}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}