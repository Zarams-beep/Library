import { useState, useEffect, useContext} from "react";
import { GlobalContext } from "../component/checkSomeThing";
import CheckOutHeader from "../component/CheckOutHeader";
import { Container ,Typography,Button,CardMedia,CardActions,CardContent,Card} from "@mui/material";
import { ratingIt, ratingNumber, ratingAmount} from "../helpers/Storage";
import { format} from "date-fns";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import Footer2 from "../component/Footer2";
const CheckOut = ()=>{
    const [dataStore, setDataStore] = useState([]);
    const [images, setImages] = useState('');
    const [rating,setRating] = useState(0);
    const [ratingNumbers,setratingNumbers] = useState(0)
    const [ratingAmounts,setratingAmounts] = useState(0)
    const {SignUpValue} = useContext(GlobalContext)
    const count = JSON.parse(localStorage.getItem('count')) || 0;
  const total = JSON.parse(localStorage.getItem('total')) || 0;

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


    const today = new Date();
    const formattedDate = format(today, "MMMM dd, yyyy");

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModel = ()=>{
      setIsModalOpen(true)
    }
    return(
        <>
        <CheckOutHeader count={count}/>
        <Container className="checkOut">
        <Typography variant="h4" sx={{paddingBottom:'2rem'}}>Order date: {formattedDate}</Typography>
         {total!==0&&count!==0? <section className="viewSection">
            
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
                <Typography>Price: ${ratingAmounts}</Typography>
                <Typography>Quantity: {count}</Typography>
                <Typography>Total Price: ${total}</Typography>
                <CardActions >
                <Button sx={{textAlign:'center', width:'100%', backgroundColor:'#212121',color:'whitesmoke', '&:hover':{backgroundColor:'gray'}}} onClick={openModel}>Place Your Order</Button>
              </CardActions>
              </CardContent>
            </Card>

            <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} className="modelStyle" contentLabel='Order Confirmation'>
                            <div className="divComplete">
                              <Typography variant="h3">Completed</Typography>
                              <Typography variant="h3">Happy Reading!!</Typography>
                              <div className="btndiv">
                              <Link to='/viewbook' className="linking"><Button>Go back</Button></Link>
                              </div>
                            </div>
                     
                </Modal>
          </section>
    :(
        <Typography>Kindly choose a Quantity</Typography>
      )}
        </Container>
        <Footer2/>
  
      </>
    )
}
export default CheckOut
