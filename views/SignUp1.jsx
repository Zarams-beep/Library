import { TbBooks } from "react-icons/tb";
import {
  Container,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import { ImGoogle3 } from "react-icons/im";
import { useState, useContext} from "react";
import { FaEye, FaEyeSlash} from "react-icons/fa";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { GlobalContext } from "../component/checkSomeThing";
import { Link, useNavigate} from "react-router-dom";
const SignUp1 = () => {
  const [frtName, setFrtName] = useState("");
  const [lstName, setLstName] = useState("");
  const [emailIt, setEmailIt] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [pass, setPass] = useState("");
  const [cmPass, setCmPass] = useState("");
  const [roleChoice, setRoleChoice] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const {SignUpValue} = useContext(GlobalContext)
  const validateForm = (
    frt,
    lst,
    email,
    phone,
    password,
    cfmPassword,
    role
  ) => {
    if (!frt || !lst || !email || !phone || !password || !cfmPassword || !role) {
        MySwal.fire({
            title: 'Error',
            text: 'All fields are required',
            icon: 'error',
            background: '#212121',
            color:'whitesmoke', 
            customClass: {
              confirmButton: 'my-custom-confirm-button'
            }
          });
      return false;
    }
    if (password !== cfmPassword) {
        MySwal.fire({
            title: 'Error',
            text: 'Passwords do not match',
            icon: 'error',
            background: '#212121',
            color:'whitesmoke', 
            customClass: {
              confirmButton: 'my-custom-confirm-button'
            }
          });
      return false;
    }
    if (password.length < 8) {
        MySwal.fire({
            title: 'Error',
            text: 'Password must be at least 8 characters long',
            icon: 'error',
            background: '#212121',
            color:'whitesmoke', 
            customClass: {
              confirmButton: 'my-custom-confirm-button'
            }
          });
      return false;
    }

 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      MySwal.fire({
        title: "Error",
        text: "Invalid email format",
        icon: "error",
        background: "#212121",
        color: "whitesmoke",
        customClass: {
          confirmButton: 'my-custom-confirm-button'
        }
      });
      return false;
    }
      

    return true;
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleValue = (frt, lst, email, phone, password, cfmPassword, role) => {
    if (!frt || !lst || !email || !phone || !password || !cfmPassword || !role) {
        console.log('No value');
    } else {
        // Check if email already exists in localStorage
        if (SignUpValue[email]) {
            MySwal.fire({
                title: 'Error',
                text: 'Email already exists',
                icon: 'error',
                background: '#212121',
                color: 'whitesmoke',
                customClass: {
                    confirmButton: 'my-custom-confirm-button'
                }
            });
            return;
        }

        const userDetails = {
            frt,
            lst,
            phone,
            password,
            cfmPassword,
            role
        };
        
        localStorage.setItem(email, JSON.stringify(userDetails));
    
        console.log("User data stored:", userDetails);
    
        // Reset form fields
        setFrtName("");
        setLstName("");
        setEmailIt("");
        setPhoneNo("");
        setPass("");
        setCmPass("");
        setRoleChoice("");
    }
};
  

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      validateForm(frtName, lstName, emailIt, phoneNo, pass, cmPass, roleChoice)
    ) {
      handleValue(frtName, lstName, emailIt, phoneNo, pass, cmPass, roleChoice);
      MySwal.fire({
        title: "Success",
        text: 'Sign Up Successful. Kindly Sign in',
        icon: "success",
        background: "#212121",
        color: "whitesmoke",
        customClass: {
          confirmButton: "my-custom-confirm-button"
        }
      }).then(() => {
        window.location.href = '/login';
      });
    }
  };

  return (
    <Container className="SignUpPage1">
      <section className="forPage">
        <section className="signUp1">
          <TbBooks className="tbBook"/>
          <Typography variant="h5">BOOKVAULT HUB</Typography>
        </section>

        <section className="signUp2">
          <header className="headerSignUp">
            <Typography variant="h4">Welcome to BookVault Hub</Typography>
            <Typography variant="subtitle1">
              Create an account to get started
            </Typography>
          </header>

          <form action="#" method="post">
            <ul>
              <li className="firstname">
                <label htmlFor="firstName">First Name</label>
                <TextField
                  type="text"
                  id="firstName"
                  onChange={(event) => setFrtName(event.target.value)}
                  value={frtName}
                  placeholder="Enter First Name"
                  fullWidth
                  required
                />
              </li>

              <li className="lastName">
                <label htmlFor="lastName">Last Name</label>
                <TextField
                  type="text"
                  id="lastName"
                  onChange={(event) => setLstName(event.target.value)}
                  value={lstName}
                  placeholder="Enter Last Name"
                  fullWidth
                  required
                />
              </li>

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
                <label htmlFor="phone">Phone Number</label>
                <TextField
                  type="tel"
                  id="phone"
                  onChange={(event) => setPhoneNo(event.target.value)}
                  value={phoneNo}
                  placeholder="Enter Phone Number"
                  fullWidth
                  required
                  variant="outlined"
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

              <li>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="divFlex">
                <TextField
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  onChange={(event) => setCmPass(event.target.value)}
                  value={cmPass}
                  placeholder="Confirm your Password"
                  className="passStyle"
                  fullWidth
                  required
                />
                <div className="eyeIcon" onClick={toggleConfirmPasswordVisibility}>
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
                </div>
              </li>

              <li>
                <label htmlFor="role">Role</label>
                <Select
                  id="role"
                  value={roleChoice}
                  onChange={(event) => setRoleChoice(event.target.value)}
                  fullWidth
                  required
                >
                  <MenuItem value="" disabled>
                    Select Role
                  </MenuItem>
                  <MenuItem value="Teacher">Teacher</MenuItem>
                  <MenuItem value="Student">Student</MenuItem>
                  <MenuItem value="Administrator">Administrator</MenuItem>
                </Select>
              </li>
            </ul>

            <Button
              type="submit"
              variant="contained"
              onClick={handleSubmit}
              fullWidth
            >
              Sign Up
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

            <Typography sx={{paddingTop:'1rem', paddingBottom:'2rem'}}>
              <Link to='/login' className="linkClick1">
              Already have an account? <span className="sign">Sign in</span></Link>
            </Typography>
          </form>
        </section>
      </section>
    </Container>
  );
};

export default SignUp1;
