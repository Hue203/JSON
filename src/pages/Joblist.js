import React from "react";
import { Badge, Button, roundedCircle } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

const Joblist = () => {
  const [data, setData] = useState([]);
  const getJobList = async () => {
    try {
      let url = `http://localhost:5002/jobs`;
      const respone = await fetch(url);
      const data = await respone.json();
      setData(data);
      console.log(data);
    } catch (err) {
      console.log("error!!", err.message);
    }
  };

  useEffect(() => {
    getJobList();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="title-joblist">6 IT jobs in Vietnam for you</h1>
        {data &&
          data.map((item) => (
            <div className="row">
              <div className="col">
                <img
                  src={item.img}
                  width="200"
                  height="200"
                  alt="logo"
                  roundedCircle
                />
              </div>
              <div className="col">
                <Link to={`/jobs/${item.id}`}>
                  <h2>{item.title}</h2>
                </Link>
                <p>{`$ ${item.salary}`}</p>
                <p>
                  {item.benefits.map((benefit) => (
                    <p>{`-${benefit}`}</p>
                  ))}
                </p>
                <div>
                  {item.tags.map((tag) => (
                    <div className="tag-joblist">
                      <Badge variant="secondary">{tag}</Badge>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col">
                <Button variant="success">{item.isHotjob} Hot Job</Button>
                <p>{item.city}</p>
                <p>{`District ${item.district}`}</p>
                {/* <p>{`Math.floor( ${item.time} / ${31536000000}) years ago`}</p> */}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Joblist;
