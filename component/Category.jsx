import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { GiBlackBook } from "react-icons/gi";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { useState ,useContext } from "react";
import { GlobalContext } from "../component/checkSomeThing";
import { ratingIt, ratingNumber} from "../helpers/Storage";
const Category = () => {
  const [filtered, setFilter] = useState([]);
  const {data} = useContext(GlobalContext)
  const [btn,setBtnText] = useState('')
  const [active,setActive] = useState('')

  const handleGenre = (genre) => {
    setBtnText(genre); 
    const filtered = data.filter((book) => book.genre.includes(genre));
    setFilter(filtered);
    setActive(genre)
    console.log('hh' + active);
  };

  const listGenre = ['Fiction', 'Classic', 'Dystopian', 'Science Fiction', 'Adventure', 'Fantasy']
  const [currentIndex,setCurrentIndex] = useState(0)

  const handlePrevious = ()=>{
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? listGenre.length - 1 : prevIndex - 1);
      console.log(currentIndex);
      handleGenre(listGenre[currentIndex])
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === listGenre.length - 1 ? 0 : prevIndex + 1
    );
    console.log(currentIndex);
    handleGenre(listGenre[currentIndex])
  };

  const handleDataStorage = (bookData,img,rating,no) => {
    localStorage.setItem('bookData', JSON.stringify(bookData))
    localStorage.setItem('img', JSON.stringify(img))
    localStorage.setItem('ratingIt',JSON.stringify(rating))
    localStorage.setItem('ratingNumber',JSON.stringify(no))
};

  return (
    <>
      <Container className="welcomeComponent">
        <section className="welcomePart1">
          <Typography variant="h4">Our Top Categories</Typography>
          <Typography>Welcome to the biggest library</Typography>

          <div className="divLine">
            <p className="line lin"></p>
            <GiBlackBook className="icon" />
            <p className="line lin2"></p>
          </div>
        </section>

        <section className="categoryPart2">
          <button className="SideBtn" onClick={handlePrevious}>
            <FaLongArrowAltLeft className="btnLeft" />
          </button>
          <section className="btnGenre">
          {listGenre.map((genre) => (
            <button key={genre} onClick={() => handleGenre(genre)} className={`${active===genre?'styleIt':''}`}>{genre}</button>
          ))}
          </section>
          <button className="SideBtn1">
            <FaLongArrowAltRight className="btnRight" onClick={handleNext}/>
          </button>
        </section>

        <section className="categoryPart3">
            <Typography variant="h4">{btn}</Typography>
          <ul className="divCategoryPart3">
          {filtered.map((fi)=>(
            <li key={fi.id}>
            <a href={"/viewbook"} className="linkStyle" onClick={() => handleDataStorage(fi,fi.cover_image,fi.id, fi.id)}>
                  <div className="imgP"><img src={fi.cover_image} alt={fi.title} className="image"/></div>
                  <div className="box">
                  <div>{fi.title}</div>
                  <div>{fi.author}</div>
                  <div>{fi.publication_year}</div>
                  <div>{fi.genre[0]}, {fi.genre[1]}</div>
                  <div className="ratin2">
                    <p className="rating2">{ratingIt[fi.id]}</p>
                    <p>{ratingNumber[fi.id]}</p></div>
                  </div>
                  </a>
         </li> 
          ))}
          </ul>
        </section>
      </Container>
    </>
  );
};
export default Category;
