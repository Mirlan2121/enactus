import React, {useState,useEffect} from "react";
import Company from "../company/Company";
import s from "./home.module.css";
import axios from 'axios';

const Home = () => {

  const [company , setCompany ] =useState([])

  useEffect(() => {
    axios({
      method: "get",
      url: "https://ef92-212-42-120-155.in.ngrok.io/api/v1/companies",
    }).then(function (response) {
    //   console.log(response);
      setCompany(response.data)
    });
  }, []);

  return (
    <div>
      <h1>Начните подбор прямо сейчас!</h1>

      <div>
        <Company data={company} />
      </div>
    </div>
  );
};

export default Home;
