import { useState, useEffect, useContext} from "react";
import Header2 from "../component/Header2";
import SideBar from "../component/SideBar";
import { Container ,Typography,Button,CardMedia,CardActions,CardContent,Card} from "@mui/material";
import { ratingIt, ratingNumber, ratingAmount} from "../helpers/Storage";
import { FaCartPlus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import WelcomeComponent from "../component/WelcomeComponent";
import Upcoming from "../component/Upcoming";
import Footer from "../component/Footer";
import { GlobalContext } from "../component/checkSomeThing";
import Category from "../component/Category";
import { useMediaQuery } from "react-responsive";
const ViewBook2 = () => {
  const [dataStore, setDataStore] = useState([]);
  const [images, setImages] = useState('');
  const [rating,setRating] = useState(0);
  const [ratingNumbers,setratingNumbers] = useState(0)
  const [ratingAmounts,setratingAmounts] = useState(0)
  const [count,setCount] = useState(0)
  const {SignUpValue} = useContext(GlobalContext)

  useEffect(() => {
    const storedDataStore = localStorage.getItem("bookData");
    const storedImages = localStorage.getItem("img");
    const storedRating = JSON.parse(localStorage.getItem('ratingIt'));
    const storedratingNumber = JSON.parse(localStorage.getItem('ratingNumber'))

    setDataStore(storedDataStore ? JSON.parse(storedDataStore) : []);
    setImages(storedImages ? JSON.parse(storedImages) : []);
    setRating(storedRating !==null? ratingIt[storedRating]:null)
    setratingNumbers(storedratingNumber !==null? ratingNumber[storedratingNumber]:null)

    setratingAmounts(storedratingNumber!==null?ratingAmount[storedratingNumber]:null)
    
  }, []);

  
  const handleSub = () =>{
    setCount(prev => (prev > 0 ? prev - 1 : 0));
  }
  const handleAddtoCart = ()=>{
      setCount(prev=>prev+1)
  }

  useEffect(()=>{
    const total = ratingAmounts * count;
    localStorage.setItem('count', JSON.stringify(count));
    localStorage.setItem('total', JSON.stringify(total));
    console.log(count);
    console.log(total);
  },[count])

  const [fullName,setFullName] = useState('')
  useEffect(() => {
    const storedEmail = JSON.parse(localStorage.getItem("email")); 
    const user = SignUpValue[storedEmail];
    setFullName((user.frt).toUpperCase());

}, [SignUpValue]);
  
const is400 = useMediaQuery({query:'(max-width:400px)'})

  return (
    <>
      <Header2 name={fullName} count={count} notificationNumber={0}/>
      <SideBar number={count}/>
      <section className="viewPage">
      <Container>
        <section className="viewSection">
          <Card className="styleCard">
            <CardMedia
              component="img"
              height="380"
              image={images}
              alt={dataStore.title||''}
              sx={{objectFit:'cover'}}
            />
            <CardContent className="cardCenter">
              <Typography variant="h4" sx={{fontWeight:'bold'}}>{dataStore.title}</Typography>

              <Typography sx={{ fontStyle: "italic"}} className="author">
                {dataStore.author} - {dataStore.publication_year}
              </Typography>

              <div className="rating">
                <div className="rating1">{rating}</div>
                <div>{ratingNumbers}</div></div>

                <Typography>{dataStore.description}</Typography>
                
              {dataStore.genre && dataStore.genre.length > 0 ? (
                <Typography>
                {dataStore.genre.join(', ')}
              </Typography>
              ) : (
                <Typography></Typography>
              )}
              <CardActions >
                <Button sx={{textAlign:'center', width:'100%', backgroundColor:'#212121',color:'whitesmoke', '&:hover':{backgroundColor:'gray'}}}>${ratingAmounts}</Button>
              </CardActions>
              <CardActions className="flexBox">
                      <div className="smallBtn">
                      <Button onClick={handleSub}><FiMinus className="btnValue"/></Button>
                      <Typography className="btnValue">{count}</Typography>
                      <Button onClick={handleAddtoCart}><FaPlus className="btnValue"/></Button>
                      </div>
                    
              </CardActions>
            </CardContent>
          </Card>
        </section>
      </Container>
      <WelcomeComponent/>
      <Category/>
      <Upcoming/>
      
      </section>
      <Footer/>
    </>
  );
};
export default ViewBook2;
