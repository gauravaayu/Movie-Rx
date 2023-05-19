/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./style.scss";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Img from "../../../components/lazyLoadImage/Img";
import useFetch from '../../../hooks/useFetch';




const HeroBanner = () => {
  const [background, setBackground]= useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const {url} =useSelector((state)=>state.home);
  const {data, loading} =useFetch("/movie/upcoming");


  

 const searchQueryHandler=(event)=>{
      if(event.key === "Enter" && query.length > 0){
        navigate(`/search/${query}`);

      }


    };
  const clickSearch =() =>{
      if(query.length > 0){
        navigate(`/search/${query}`);

      }

    };
    useEffect(()=> {
      const bg = url.backdrop + data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path;
      setBackground(bg);
      console.log("setBackground",bg);
    }, [data]);
  return (
    <div className='heroBanner'>
      {!loading && <div className='backdrop-image'>
          <Img src={background}/>

      </div>}
      <div className='opacity-layer'>

      </div>
      <ContentWrapper>
        <div className='heroBannerContent'>
          <span className='title'> Welcome</span>
          <span className='subTitle'>Millions of movies, TV shows and people discover.
          Explore now</span>
          <div className='searchinput'>
          <input type='text' placeholder="Search for a movie or tv show...." 
          onChange={(e)=>setQuery(e.target.value)}
          onKeyUp={searchQueryHandler}
          />
            <button onClick={clickSearch}>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}

export default HeroBanner
