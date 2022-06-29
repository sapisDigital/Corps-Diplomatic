import React, {useState} from 'react'
import ReactPaginate from 'react-paginate';
import { useTranslation } from "react-i18next";
import './videos.css';


export default function Works() {
  const [t] = useTranslation("language");

  const data = [
    <div className="video">
            <iframe src="https://www.youtube.com/embed/uAr_bK6_6hk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>
            <h5 className="video__text">{t("about.video1")}</h5>
    </div >,
    <div className="video">
            <iframe src="https://www.youtube.com/embed/ET9w6a00Iuk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h5 className="video__text">{t("about.video2")}</h5>
    </div>,    
    <div className="video">
            <iframe src="https://www.youtube.com/embed/AqkDWXHxbnQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h5 className="video__text">{t("about.video3")}</h5>
    </div>,    
    <div className="video">
            <iframe src="https://www.youtube.com/embed/ZOaHsIe59qk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h5 className="video__text">{t("about.video4")}</h5>
    </div>,    
    <div className="video">
            <iframe src="https://www.youtube.com/embed/D4_Z14m5sIw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h5 className="video__text">{t("about.video5")}</h5>
    </div>,
  ];


  /*const [videos, setvideos] = useState(null);*/
  const [pageNumber, setPageNumber] = useState(0);

  const videosPerPage = 2;
  const pagesVisited = pageNumber * videosPerPage;

  const currentVideos = data.slice(pagesVisited,pagesVisited+videosPerPage);
  const pageCount = Math.ceil(data.length / videosPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
    };




  return (
    
    <div className="position">
      {currentVideos}
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns2"}
        previousLinkClassName={"previousBttn2"}
        nextLinkClassName={"nextBttn2"}
        disabledClassName={"paginationDisabled2"}
        activeClassName={"paginationActive2"}
      />
    </div>
  );
}


              
           
