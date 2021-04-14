import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import { Button } from "react-bootstrap";

const Jobdetail = () => {
  const { id } = useParams();
  const [jobDetail, setJobDetail] = useState(null);
  let history = useHistory();

  const getJobDetail = async () => {
    try {
      let url = `http://localhost:5002/jobs/${id}`;
      const respone = await fetch(url);
      const data = await respone.json();
      setJobDetail(data);
      console.log(data);
    } catch (err) {
      console.log("error!!", err.message);
    }
  };
  useEffect(() => {
    getJobDetail();
  }, []);

  const handleClick = () => {
    history.push("/");
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Attractive Salary: </h2>
            {`$ ${jobDetail && jobDetail.salary}`}{" "}
          </div>
          <div className="col">
            <h2>Job's Title </h2>
            <h3> {jobDetail && jobDetail.title}</h3>
          </div>
          <div className="col">
            <h3>Job's Description </h3>
            <p>{jobDetail && jobDetail.description}</p>
          </div>
        </div>

        <Button variant="success" onClick={handleClick} className="joblist-btn">
          Job List
        </Button>
      </div>
    </>
  );
};

export default Jobdetail;
