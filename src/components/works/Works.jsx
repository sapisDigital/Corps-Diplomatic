import React, {useState} from 'react'
import ReactPaginate from 'react-paginate';
import Text from '../text/Text';
import Feature from '../feature/Feature';
import { useTranslation } from "react-i18next";
import coalition from '../../assets/coalition.png';
import nauka from '../../assets/nauka.png';
import wfi from '../../assets/wfi.png';
import blockchain from '../../assets/blockchain.png';
import advisor from '../../assets/advisor.png';
import ada from '../../assets/ada.png';
import avax from '../../assets/avax.png';
import bnb from '../../assets/bnb.png';
import btc from '../../assets/btc.png';
import dot from '../../assets/dot.png';
import eth from '../../assets/eth.png';
import sol from '../../assets/sol.png';
import usdt from '../../assets/usdt.png';
import cyber from '../../assets/cyber.png';
import networking from '../../assets/networking.png';
import './works.css';
import { Dimensions } from 'react-native';


export default function Works() {
  const [t] = useTranslation("language");

  const deviceWidth = Dimensions.get('window').width;
  let cryptodiv = "";

  if(deviceWidth > 850){
    cryptodiv =  
    <div className="images-crypto-features">
      <img className = "image_advisor" src={blockchain} />
      <Text title={t("work.crypto")} text= {t("work.crypto2")} box={"gradient__text"} />
      <img className = "image_advisor" src={advisor} />
  </div>
  }else{
    cryptodiv = 
    <div className="images-crypto-features">
      <div>
        <img className = "image_advisor" src={blockchain} />
        <img className = "image_advisor" src={advisor} />
      </div>
      <Text title={t("work.crypto")} text= {t("work.crypto2")} box={"gradient__text"} />
  </div>
}

  const compdiv = [
    <div className="gpt3__features gpt3__features-box" key='2'>
        <div className="text-coalition-features">
          <Text title={t("work.text5")} text= "" box={"gradient__text"} /> 
          <img className = "image_features3" src={nauka} />
        </div>
        <div className="text-coalition-features">
          <Text title={t("work.text6")} text= "" box={"gradient__text"} /> 
          <img className = "image_features3" src={wfi} />
        </div>
        <p className="text1 gradient__text"> {t("work.text7")} </p>
    </div>,
    <div className="gpt3__features gpt3__features-box" key='3'>
        {cryptodiv}
        <div className="images-crypto-features2">
          <img className = "image_crypto" src={btc} />
          <img className = "image_crypto" src={eth} />
          <img className = "image_crypto" src={bnb} />
          <img className = "image_crypto" src={ada} />
          <img className = "image_crypto" src={avax} />
          <img className = "image_crypto" src={dot} />
          <img className = "image_crypto" src={sol} />
          <img className = "image_crypto" src={usdt} />
        </div>
    </div>,
        <div className="gpt3__features gpt3__features-box" key='4'>
          <div className="text-cyber-features">
            <div className="text-cyber-features2"> 
              <h3 className="gradient__title">{t("work.cyber")}</h3>
              <p className="text1 text-cyber"> {t("work.cyber2")} </p>
            </div>
            <img className = "image_cyber" src={cyber} />
          </div>  
        </div>,
        <div className="gpt3__features gpt3__features-box" key='5'>
          <div className="text-cyber-features">
          <img className = "image_networking" src={networking} />
            <div className="text-cyber-features2"> 
              <h3 className="gradient__title">{t("work.meet")}</h3>
              <p className="text1 text-cyber"> {t("work.meetText")} </p>
            </div>
          </div>  
        </div>

  ];


  const [users, setUsers] = useState(compdiv);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 1;
  const pagesVisited = pageNumber * usersPerPage;

  const pageCount = Math.ceil(4  / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
    };



  return (
    
    <div className="App">
      {compdiv.at(pageNumber)}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}

      />
    </div>
  );
}
  
  /*const [t] = useTranslation("language");*/

          /*
  return(

        <div className="gpt3__features gpt3__features-coalition" id='1'>
              <div className="text-coalition-features">
                <Text title={t("work.title4")} text= {t("work.text4")} box={"gradient__text"} />
              </div>
              <img className = "image_features2" src={coalition} />
          </div>

          <div className="gpt3__features" id='2'>
            <Feature title={t("work.title5")} text= "" box={"gradient__text"} /> 
              <div className="partner-features">
                <div className="text-coalition-features">
                <Text title={t("work.text5")} text= "" box={"gradient__text"} /> 
                <img className = "image_features3" src={nauka} />
                </div>
                <div className="text-coalition-features">
                <Text title={t("work.text6")} text= "" box={"gradient__text"} /> 
                <img className = "image_features3" src={wfi} />
                </div>
              </div>
              <p className="text-network-features gradient__text"> {t("work.text7")} </p>
          </div>

          <div className="gpt3__features gpt3__features-blockchain" id='3'>
              <div className="images-crypto-features">
                <img className = "image_advisor" src={blockchain} />
                  <Text title={t("work.crypto")} text= {t("work.crypto2")} box={"gradient__text"} />
                <img className = "image_advisor" src={advisor} />
              </div>
              <div className="images-crypto-features">
                <img className = "image_crypto" src={btc} />
                <img className = "image_crypto" src={eth} />
                <img className = "image_crypto" src={bnb} />
                <img className = "image_crypto" src={ada} />
                <img className = "image_crypto" src={avax} />
                <img className = "image_crypto" src={dot} />
                <img className = "image_crypto" src={sol} />
                <img className = "image_crypto" src={usdt} />
              </div>
          </div>

          <div className="gpt3__features2 gpt3__features-cyber" id='4'>
                  <h3 className="gradient__title">{t("work.cyber")}</h3>
                  <p className="gradient__text"> {t("work.cyber2")} </p>
          </div>
  

  );
};
   */ 


              
           
