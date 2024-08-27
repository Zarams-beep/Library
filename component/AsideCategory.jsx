import { useState, useEffect, useContext } from "react";
import Header2 from "../component/Header2";
import SideBar from "../component/SideBar";
import {
  Container,
  Typography,
} from "@mui/material";
import { ratingIt, ratingNumber} from "../helpers/Storage";
import Footer from "../component/Footer";
import { GlobalContext } from "../component/checkSomeThing";
const AsideCategory = () => {
  const { data, SignUpValue } = useContext(GlobalContext);

  const [fullName, setFullName] = useState("");
  const [count, setCount] = useState();
  useEffect(() => {
    const storedEmail = JSON.parse(localStorage.getItem("email"));
    setCount(JSON.parse(localStorage.getItem("count")));
    console.log("Stored email:", storedEmail);
    console.log(SignUpValue);
    const user = SignUpValue[storedEmail];
    console.log(user);
    setFullName(user.frt.toUpperCase());
  }, [SignUpValue]);

  const handleDataStorage = (bookData, img, rating, no) => {
    localStorage.setItem("bookData", JSON.stringify(bookData));
    localStorage.setItem("img", JSON.stringify(img));
    localStorage.setItem("ratingIt", JSON.stringify(rating));
    localStorage.setItem("ratingNumber", JSON.stringify(no));
  };

  const groupByGenre = (books) => {
    return books.reduce((acc, book) => {
      book.genre.forEach((genre) => {
        if (!acc[genre]) acc[genre] = [];
        acc[genre].push(book);
      });
      return acc;
    }, {});
  };
    const booksByGenre = groupByGenre(data);
  const genres = [
    "Fiction",
    "Science Fiction",
    "Fantasy",
    "Historical Fiction",
    "Classic",
    "Mystery",
    "Romance",
    "Adventure",
    "Horror",
    "Drama",
    "Thriller",
    "Dystopian",
    "Non-Fiction",
    "Children's Literature",
    "Young Adult",
    "Poetry",
    "Bildungsroman",
    "Satire",
    "Gothic",
    "Science Fantasy",
    "Literary Fiction",
  ];

  return (
    <>
      <Header2 name={fullName} />
      <SideBar number={count} />
      <section className="viewPage">
        <Container>
          {Object.keys(booksByGenre).map((genre) => (
            <section key={genre} className="genreSection">
              <Typography variant="h4" className="genreHeader">
                {genre}
              </Typography>
              <ul className="divCategoryPart3">
                {booksByGenre[genre].map((book) => (
                  <li key={book.id}>
                    <a
                      href={"/viewbook"} 
                      className="linkStyle"
                      onClick={() => {
                       
                        handleDataStorage(book, book.cover_image, book.id, book.id);
                      }}
                    >
                      <div className="imgP">
                        <img
                          src={book.cover_image}
                          alt={book.title}
                          className="image"
                        />
                      </div>
                      <div className="box">
                        <div>{book.title}</div>
                        <div>{book.author}</div>
                        <div>{book.publication_year}</div>
                        <div>
                          {book.genre[0]}, {book.genre[1]}
                        </div>
                        <div className="ratin2">
                          <p className="rating2">{ratingIt[book.id]}</p>
                          <p>{ratingNumber[book.id]}</p>
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </Container>
      </section>
      <Footer/>
    </>
  );
};
export default AsideCategory;
