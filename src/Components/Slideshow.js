import React, { useEffect } from 'react';
import { Carousel } from 'antd';
import moment from 'moment';
import axios from 'axios';
import "./Slideshow.css";
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const server = "https://oeserver.herokuapp.com";

function Slideshow() {

const [keys, setKeys] = React.useState([]);

useEffect (() => {
    console.log("Hello")
    axios.get(server+'/api/v1/images')
    .then(res => {
      console.log(res)
      setKeys(res.data.keys)
    })
    .catch(err => {
      console.log(err)
    })
},[]);

return(

    <>
    
  <Carousel autoplay>
    <div className="center">
      {/* <h3 style={contentStyle}>1</h3> */}
      <img src={server+'/api/v1/image/' + keys[0]} alt="Image 1" className="center"></img>
    </div>
    <div>
      {/* <h3 style={contentStyle}>2</h3> */}
      <img src={server+'/api/v1/image/' + keys[1]} alt="Image 2" className="center"></img>
    </div>
    <div>
      {/* <h3 style={contentStyle}>3</h3> */}
      <img src={server+'/api/v1/image/' + keys[2]} alt="Image 3" className="center"></img>
    </div>
  </Carousel>
  </>
)
}

export default Slideshow;