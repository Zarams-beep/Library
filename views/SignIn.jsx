import {
    Container,
    Typography,
    Button,
    TextField,
  } from "@mui/material";
  import { TbBooks } from "react-icons/tb";
  import { ImGoogle3 } from "react-icons/im";
  import { useState, useContext, useEffect } from "react";
  import { FaEye, FaEyeSlash } from "react-icons/fa";
  import Swal from 'sweetalert2';
  import withReactContent from 'sweetalert2-react-content';
  import { GlobalContext } from "../component/checkSomeThing";
  import { Link, useNavigate} from "react-router-dom";
  
  const SignIn = () => {
    const [emailIt, setEmailIt] = useState("");
    const [pass, setPass] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const MySwal = withReactContent(Swal);
    const { SignUpValue } = useContext(GlobalContext);
    const navigate = useNavigate();
  
    const validateSignIn = (email, pass) => {
      if (!email || !pass) {
        MySwal.fire({
          title: "Error",
          text: "Both email and password are required.",
          icon: "error",
          background: "#212121",
          color: "whitesmoke",
          customClass: {
            confirmButton: "my-custom-confirm-button"
          }
        });
        return false;
      }
  
      const user = SignUpValue[email];
      if (!user) {
        MySwal.fire({
          title: "Error",
          text: "User not found. Please sign up first.",
          icon: "error",
          background: "#212121",
          color: "whitesmoke",
          customClass: {
            confirmButton: "my-custom-confirm-button"
          }
        });
        return false;
      }
  
      if (user.password !== pass) {
        MySwal.fire({
          title: "Error",
          text: "Incorrect password.",
          icon: "error",
          background: "#212121",
          color: "whitesmoke",
          customClass: {
            confirmButton: "my-custom-confirm-button"
          }
        });
        return false;
      }
      localStorage.setItem('email', JSON.stringify(email));
    
      return true;
    };
  
    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateSignIn(emailIt, pass)) {
          MySwal.fire({
            title: "Success",
            text: 'Login successfully.',
            icon: "success",
            background: "#212121",
            color: "whitesmoke",
            customClass: {
              confirmButton: "my-custom-confirm-button"
            }
          }).then(() => {
            navigate('/viewbook2');
          });
        }
      };
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    useEffect(()=>{
        console.log(SignUpValue);
    },[SignUpValue])
  
    return (
      <Container className="SignUpPage1">
        <section className="forPage">
          <section className="signUp1">
            <TbBooks />
            <Typography variant="h5">BOOKVAULT HUB</Typography>
          </section>
  
          <section className="signUp2">
            <header className="headerSignUp">
              <Typography variant="h4">Welcome to BookVault Hub</Typography>
              <Typography variant="subtitle1">Good to have you back!</Typography>
            </header>
  
            <form onSubmit={handleSubmit}>
              <ul>
                <li className="email">
                  <label htmlFor="email">Email Address</label>
                  <TextField
                    type="email"
                    id="email"
                    onChange={(event) => setEmailIt(event.target.value)}
                    value={emailIt}
                    placeholder="Enter Email Address"
                    fullWidth
                    required
                  />
                </li>
  
                <li>
                  <label htmlFor="password">Password</label>
                  <div className="divFlex">
                    <TextField
                      id="password"
                      type={showPassword ? "text" : "password"}
                      onChange={(event) => setPass(event.target.value)}
                      value={pass}
                      placeholder="Enter Password"
                      className="passStyle"
                      fullWidth
                      required
                    />
                    <div className="eyeIcon" onClick={togglePasswordVisibility}>
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </div>
                  </div>
                </li>
              </ul>
  
              <Button
                type="submit"
                variant="contained"
                fullWidth
              >
                Sign In
              </Button>
  
              <div className="or">
                <p className="line"></p>
                <Typography variant="body2">OR</Typography>
                <p className="line"></p>
              </div>
  
              <Button
                type="button"
                variant="outlined"
                startIcon={<ImGoogle3 />}
                fullWidth
              >
                Sign in with Google
              </Button>
  
              <Typography variant="body2">
                Don&#39;t have an account? <Link to="/SignUp1" className="linkClick1">Sign Up</Link>
              </Typography>
            </form>
          </section>
        </section>
      </Container>
    );
  };
  
  export default SignIn;
  