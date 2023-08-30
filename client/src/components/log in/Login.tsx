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
const USER_NOT_FOUND = "Wrong Email or password, please try again.";
export default function Login(props: Props) {
  const [email, setEmail] = useState<string>(noneChosen);
  const [password, setPassword] = useState<string>(noneChosen);
  const [userNotFound, setUserNotFound] = useState<boolean>(false);
  const [invalidEmailmessage, setInvalidEmailmessage] = useState<string>("");
  const {isLoading: isGetUserLoading, refetch: fetchUser, data: userData, isError: isGetUserError} = useGetUserQuery(email, password);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log(`email ${email} password ${password}`)
    fetchUser().then(r => {
      if(r.data?.name !== "") {
        props.onLogin(r.data);
        setUserNotFound(false);
      } else {
        setUserNotFound(true);
      }
      setEmail(noneChosen);
      setPassword(noneChosen);
    })
  }

  function emailValidator(email: string) : string{
    if (!email) {
      return "";
    } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
      return "Incorrect email format";
    }
    return "";
  };

  const getErrorMessage = () :string =>{
    if (invalidEmailmessage !== '') {
      return invalidEmailmessage;
    } else if (userNotFound) {
      return USER_NOT_FOUND;
    } 
    return '';
  }
  
  function isValidCredentials(): boolean {
    let ret = email !== "" && password !== "" && invalidEmailmessage === '' ;
    return ret;
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
            onChange={e => {
              setInvalidEmailmessage(emailValidator(e.target.value));
              setEmail(e.target.value)
            }}
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
            disabled={!isValidCredentials()}
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
          <br></br>
          <h3 className="error">{getErrorMessage()}</h3>
        </Box>
      </Box>
    </Container>
  );
}