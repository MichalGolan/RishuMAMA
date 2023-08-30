import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import { usePostUserQuery } from "../../data/queries/usePostUserQuery"
import classes from "../log in/Login.module.css"

interface Props {
  onSignUp: Function;
}
const noneChosen = "";
const USER_ALREADY_EXIST = "This email address is already registered. Please use a different email or log in."
export default function SignUp(props: Props) {
  const [email, setEmail] = useState<string>(noneChosen);
  const [name, setName] = useState<string>(noneChosen);
  const [password, setPassword] = useState<string>(noneChosen);
  const [invalidEmailmessage, setInvalidEmailmessage] = useState<string>("");
  const [userRegistered, setUserRegistered] = useState<boolean>(false);

  const {isLoading: isPostUserLoading, refetch: fetchUser, data: userData, isError: isPostUserError} = usePostUserQuery(email, name, password);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    fetchUser().then(r => {
      if(r.data) {
        props.onSignUp(r.data);
        setUserRegistered(false);
      } else {
        setUserRegistered(true);
      }
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

  function isValidCredentials(): boolean {
    let ret = email !== "" &&  name !== "" && password !== "" && invalidEmailmessage === '' ;
    return ret;
  }

  const getErrorMessage = () :string =>{
    if (invalidEmailmessage !== '') {
      return invalidEmailmessage;
    } else if (userRegistered) {
      return USER_ALREADY_EXIST;
    } 
    return '';
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
          Sign Up
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
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            onChange={e => {setName(e.target.value)}}
            value={name}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
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
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link variant="body2" onClick={(e) => props.onSignUp(e)}>
                {"already have an account? Log in"}
              </Link>
            </Grid>
          </Grid>
          <br></br>
          <h3 className={classes.error}>{getErrorMessage()}</h3>
        </Box>
      </Box>
    </Container>
  );
}