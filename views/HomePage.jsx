import { useEffect, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { objectImage, shuffleArray } from "../jsonMade/sectionPictures";
import { FaCartPlus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import axios from 'axios';
const HomePage = () => {
    const [data,setData]=useState([])
    const [loading,setLoading] = useState(false)
    const [error, setError] = useState(null);
    const [author, setAuthor] = useState([])
    const [year, setYear] = useState([])
    const [title, setTitle] = useState([])

    
    const fetchData = async () =>{
        try{
            setLoading(true)
            const response = await axios.get("https://freetestapi.com/api/v1/books")
            console.log("Fetched data:", response.data);
            setData(response.data)
            setOriginalData(response.data);
        }
        catch (error) {
            setError(error);
            console.error("Fetch data error: ", error);
        }
        finally{
            setLoading(false);
        }
    }
    useEffect(()=>{
        fetchData()
    },[])

    useEffect(()=>{
        if(data.length>0){
            setAuthor(data.map((book) => book.author))
            setYear(data.map((book)=> book.publication_year))
            setTitle(data.map((book)=> book.title))
        }
    },[data])

  const imageArray = Object.values(objectImage);
  const [shuffledImages, setShuffledImages] = useState(
    shuffleArray(imageArray)
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? shuffledImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === shuffledImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const [btnText, setBtnText] = useState('')
  const handleBtn = (event) =>{
    setBtnText(event.target.textContent.toLowerCase())
  }

  const [inputValue,setInputValue] = useState('')
  const [originalData, setOriginalData] = useState([]);
  const searchBar = (valueInput) =>{
    const inputString = valueInput;
    let matchSearch;
    if (btnText==='author'){
      matchSearch = originalData.filter((book) => book.author.toLowerCase() === inputString.toLowerCase().trim());
    }
    else if (btnText==='title'){
      matchSearch = originalData.filter((book)=>book.title.toLowerCase()===inputString.toLowerCase().trim())
    }
    else if (btnText==='publication_year'){
      matchSearch = originalData.filter((book)=>book.publication_year.toString()===inputString.toString().trim())
    }

    if (matchSearch.length>0){
      setData(matchSearch)
      
      console.log("Match found:", matchSearch);
      
      localStorage.setItem('matchSearch', JSON.stringify(matchSearch)||'none')
    }
    else{
        setData([])
            console.log("No match found");
            localStorage.setItem('matchSearch', JSON.stringify(matchSearch)||'none')
    }setInputValue('')
  }

  const handleRestart =()=>{
  setData(originalData)}

//   useEffect(()=>{
//     console.log(author);
//     console.log(year);
//     console.log(title);
//     console.log(index);
// },[author,year,title,index])

  const img = ['/eugene-chystiakov-wcMysLw5ROM-unsplash.jpg','/girl-with-red-hat-mWI9FhbS43I-unsplash.jpg','/kelly-sikkema-7hspi6m0yO4-unsplash.jpg','/mediamodifier-QTL3JDJJ7OE-unsplash.jpg','/anne-nygard-qY3xHh2MOms-unsplash.jpg','/thomas-martinsen-4H9IuFBIpYM-unsplash.jpg','/sophia-baboolal-rMYrkFfw36U-unsplash.jpg','/rhamely-ibWI5ILt9P0-unsplash.jpg','/thought-catalog-6cfzNWD_KUo-unsplash.jpg','/jan-kahanek-g3O5ZtRk2E4-unsplash.jpg','/charles-etoroma-ddPTOSMa-MI-unsplash.jpg','/kelly-sikkema-2q_frVRXWfQ-unsplash.jpg','/aaron-burden-AXqMy8MSSdk-unsplash.jpg','/marissa-grootes-vdaJJbls3xE-unsplash.jpg','/kari-shea-apcUIqOPEIo-unsplash.jpg','/debby-hudson-asviIGR3CPE-unsplash.jpg','/josh-felise-yIMy3ERBc3o-unsplash.jpg','/rhamely-pJPE-ZlQVnM-unsplash.jpg','/erik-mclean-aNZnKZKfAq8-unsplash.jpg','/olga-prudnikova-EgYcr_N-UyE-unsplash.jpg','/surface-eChLA6svf_Y-unsplash.jpg','/mike-tinnion-3ym6i13Y9LU-unsplash.jpg','/jan-kahanek-g3O5ZtRk2E4-unsplash.jpg','/marissa-grootes-vdaJJbls3xE-unsplash.jpg','/debby-hudson-asviIGR3CPE-unsplash.jpg','/eugene-chystiakov-wcMysLw5ROM-unsplash.jpg','/girl-with-red-hat-mWI9FhbS43I-unsplash.jpg','/kelly-sikkema-7hspi6m0yO4-unsplash.jpg','/mediamodifier-QTL3JDJJ7OE-unsplash.jpg','/anne-nygard-qY3xHh2MOms-unsplash.jpg','/thomas-martinsen-4H9IuFBIpYM-unsplash.jpg','/sophia-baboolal-rMYrkFfw36U-unsplash.jpg','/rhamely-ibWI5ILt9P0-unsplash.jpg','/thought-catalog-6cfzNWD_KUo-unsplash.jpg','/jan-kahanek-g3O5ZtRk2E4-unsplash.jpg','/charles-etoroma-ddPTOSMa-MI-unsplash.jpg','/kelly-sikkema-2q_frVRXWfQ-unsplash.jpg','/aaron-burden-AXqMy8MSSdk-unsplash.jpg','/marissa-grootes-vdaJJbls3xE-unsplash.jpg','/kari-shea-apcUIqOPEIo-unsplash.jpg','/debby-hudson-asviIGR3CPE-unsplash.jpg','/josh-felise-yIMy3ERBc3o-unsplash.jpg','/rhamely-pJPE-ZlQVnM-unsplash.jpg','/erik-mclean-aNZnKZKfAq8-unsplash.jpg','/olga-prudnikova-EgYcr_N-UyE-unsplash.jpg','/surface-eChLA6svf_Y-unsplash.jpg','/mike-tinnion-3ym6i13Y9LU-unsplash.jpg','/jan-kahanek-g3O5ZtRk2E4-unsplash.jpg','/marissa-grootes-vdaJJbls3xE-unsplash.jpg','/kelly-sikkema-7hspi6m0yO4-unsplash.jpg',]
  const [shuffleImg,setShuffleImg]=useState(shuffleArray(img))

  return (
    <>
      <main style={{ backgroundImage: `url(${shuffledImages[currentIndex]})` }}>
        <div className="divArrows">
          <IoIosArrowBack onClick={handlePrevious} className="iconsArrow"/>

          <IoIosArrowForward onClick={handleNext} className="iconsArrow"/>
        </div>

        <div className="notes">
            <h4>ARE YOU SEARCHING FOR A BOOK</h4>
            <h1>BIGGEST LIBRARY</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quis numquam nobis iste.</p>
        </div>

        
      </main>

      <section className="section2">
        <button className="btnSection" onClick={handleBtn}>TITLE</button>
        <button className="btnSection" onClick={handleBtn}>AUTHOR</button>
        <button className="btnSection" onClick={handleBtn}>PUBLICATION_YEAR</button>
        <button className="btnSection" onClick={handleRestart}>RESTART</button>
      </section>

      <section className="secondPart">
        {btnText==='author'?<><input type="text" value={inputValue} placeholder ="Enter Author" onChange={(e)=>setInputValue(e.target.value)}/><button onClick={()=>{searchBar(inputValue)}}>SEARCH {btnText.toUpperCase()}</button></>:''}

        {btnText==='publication_year'?<>
            <input type="text" value={inputValue} placeholder ="Enter Year" onChange={(e)=>setInputValue(e.target.value)}/>
            <button onClick={()=>{searchBar(inputValue) }}>SEARCH {btnText.toUpperCase()}</button>
        </>:''}

        {btnText==='title'?<><input type="text" value={inputValue} placeholder ="Enter Title" onChange={(e)=>setInputValue(e.target.value)}/>
            <button onClick={()=>{searchBar(inputValue)}}>SEARCH {btnText.toUpperCase()}</button></>:''}      
      </section>

          <section className="thirdPart">
            <ul className="imgContainer">
              {data.map((el)=>
                  <li key={el.id}>
                    <p className="imgP"><img src={shuffleImg[originalData.indexOf(el)]} alt={el.title} className="image"/></p>
                    <div className="box">
                    <p>{el.title}</p>
                    <p>{el.author}</p>
                    <p>{el.publication_year}</p>
                    <p>{el.genre[0]}, {el.genre[1]}</p>
                    </div>
                  </li>
              )}
            </ul>
          </section>
    </>
  );
};
export default HomePage;


{/* <div className="btnContainer">
                      <div className="smallBtn">
                      <button><FiMinus/></button>
                      <p>1</p>
                      <button><FaPlus/></button>
                      </div>
                      <button className="btnCart"><FaCartPlus/></button>
                    </div> */}