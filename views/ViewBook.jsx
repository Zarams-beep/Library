import { useState, useEffect } from "react";
import Header2 from "../component/Header2";
import SideBar from "../component/SideBar";
import { Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ratingIt, ratingNumber, ratingAmount} from "../helpers/Storage";
import { FaCartPlus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import WelcomeComponent from "../component/WelcomeComponent";
import Category from "../component/Category";
import Upcoming from "../component/Upcoming";

const ViewBook = () => {
  const [dataStore, setDataStore] = useState([]);
  const [images, setImages] = useState('');
  const [rating,setRating] = useState(0);
  const [ratingNumbers,setratingNumbers] = useState(0)
  const [ratingAmounts,setratingAmounts] = useState(0)
  const [count,setCount] = useState(0)


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

  const handleAdd = () =>{
    setCount(prev=>prev+1)
  }
  const handleSub = () =>{
    setCount(prev => (prev > 0 ? prev - 1 : 0));
  }
  const handleAddtoCart = ()=>{
    const total = ratingAmounts * count;
    localStorage.setItem('count', JSON.stringify(count));
    localStorage.setItem('total', JSON.stringify(total));
    console.log(count);
    console.log(total);
  }

 
  return (
    <>
      <Header2/>
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
                      <Button onClick={handleAdd}><FaPlus className="btnValue"/></Button>
                      </div>
                      <Button onClick={handleAddtoCart}><FaCartPlus className="btnCart"/></Button>
              </CardActions>
            </CardContent>
          </Card>
        </section>
      </Container>
      <WelcomeComponent/>
      <Category/>
      <Upcoming/>
      </section>
    </>
  );
};
export default ViewBook;
