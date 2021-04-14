import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Joblist from "./Joblist";
import Navbar from "./Navbar";
import { Button } from "react-bootstrap";

const Homepage = () => {
  let history = useHistory();
  const getJobs = async () => {
    let url = `http://localhost:5002`;
    const respone = await fetch(url);
    const data = await respone.json();
    console.log(data);
  };
  useEffect(() => {
    getJobs();
  }, []);
  const handleClick = () => {
    history.push("/login");
  };

  return (
    <div>
      <Navbar />

      <Button variant="success" onClick={handleClick}>
        Login{" "}
      </Button>

      <Joblist />
    </div>
  );
};

export default Homepage;
