import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const SinglePage = () => {
  const [companyDetail, setCompanyDetail] = useState([]);
  const [product, setProfuct] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios({
      method: "get",
      url: `https://ef92-212-42-120-155.in.ngrok.io/api/v1/companies/${id}`,
    }).then(function (response) {
      //   console.log(response);
      setCompanyDetail(response.data);
    });
  }, []);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://ef92-212-42-120-155.in.ngrok.io/api/v1/nukura/${id}`,
    }).then(function (response) {
      //   console.log(response);
      setProfuct(response.data);
    });
  }, []);
  console.log(product);

  return (
    <>
      <div
        style={{
          display: "flex",
          maxWidth: "700px",
          justifyContent: "space-between",
          marginTop: "30px",
        }}
      >
        <div>
          <img
            style={{
              width: "250px",
              height: "200px",
              objectFit: "content",
            }}
            src={companyDetail.image_company}
            alt=""
          />
        </div>
        <div style={{ marginLeft: "30px" }}>
          <h1>{companyDetail.first_name}</h1>
          <p>{companyDetail.description}</p>
        </div>
      </div>

      <hr style={{ width: "100%", marginTop: "40px" }} />

      <div style={{display: "flex", marginTop: "30px" , marginBottom: "30px"}}>
        <div style={{ width: "50%" }}>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
        </div>

        <div>
          <img
            style={{ width: "350px", height: "200px" }}
            src={product.image}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default SinglePage;
