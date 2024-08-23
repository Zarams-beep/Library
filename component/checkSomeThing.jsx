import { useState, createContext, useEffect} from "react";
import axios from 'axios';
import {img } from "../jsonMade/sectionPictures";
export const GlobalContext = createContext()

export function GlobalProvider({children}) {
    const [data,setData]=useState([])
    const [loading,setLoading] = useState(false)
    const [error, setError] = useState(null);
    const [originalData, setOriginalData] = useState([]);
    
    const fetchData = async () =>{
        try{
            setLoading(true)
            const response = await axios.get("https://freetestapi.com/api/v1/books")
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
        setData[data.map((book)=>{
            book.cover_image = img[book.id]
          })]
          setOriginalData[data.map((book)=>{
            book.cover_image = img[book.id]
          })]
    },[data])

    const contextObject = {
        data,
        setData,
        originalData,
        setOriginalData,
    }
    return (
        <GlobalContext.Provider value={contextObject}>
            {children}
       
        </GlobalContext.Provider>
      );
}