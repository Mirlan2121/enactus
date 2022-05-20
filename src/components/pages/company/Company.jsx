import React, { useEffect, useState } from "react";
import c from "./company.module.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Company = (props) => {
  console.log(props.data);
  const data = props.data;

  const [companyDetail, setCompanyDetail] = useState([])

  function newCompany(id){
        axios({
            method: "get",
            url: `https://ef92-212-42-120-155.in.ngrok.io/api/v1/companies/${id}`,
          }).then(function (response) {
          //   console.log(response);
          setCompanyDetail(response.data)
          });
        
  }
  return (
    <div>
      {data.map((company) => {
        return (
          <>
            <div className={c.company}>
              <div
                className={c.title}
                style={{ width: "250px", alignItems: "center" }}
              >
                <button onClick={()=> {newCompany(company.id)}}>
                 <Link to={`companyDetail/${company.id}`}>посмотреть</Link>
                </button>
                <img
                  style={{
                    width: "250px",
                    height: "200px",
                    objectFit: "content",
                  }}
                  src={company.image_company}
                  alt="alt"
                />
              </div>
              <div style={{ width: "250px" }}>
                <h2>{company.first_name}</h2>
                <p>{company.description}</p>
                <p>{company.address}</p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Company;
