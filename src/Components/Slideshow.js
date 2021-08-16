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

const server = "http://localhost:8080";

function Slideshow(props) {

const [keys, setKeys] = React.useState([]);
const [timestamps, setTimestamps] = React.useState([]);

useEffect (() => {
    console.log("Hello")
    axios.get(server+'/api/v1/images/'+props.folder)
    .then(res => {
      console.log(res)
      setKeys(res.data.keys);
      setTimestamps(res.data.timestamps);
    })
    .catch(err => {
      console.log(err)
    })
},[]);

return(

    <>
    
  <Carousel autoplay={true}>
    <div className="center">
      {/* <h4 style={contentStyle}>1<h4> */}
      <h4 className="center">{'Time: ' + moment(timestamps[0]).format('HH:mm:ss') + ' Date: ' + moment(timestamps[0]).format('Do of MMM YYYY')}</h4>
      <img src={server+'/api/v1/image/'+props.folder +'xxxx'+ keys[0]} alt="1" className="center"></img>
    </div>
    <div>
      {/* <h4 style={contentStyle}>2<h4> */}
      <h4 className="center">{'Time: ' + moment(timestamps[1]).format('HH:mm:ss') + ' Date: ' + moment(timestamps[1]).format('Do of MMM YYYY')}</h4>
      <img src={server+'/api/v1/image/'+props.folder +'xxxx' + keys[1]} alt="2" className="center"></img>
    </div>
    <div>
      {/* <h4 style={contentStyle}>3<h4> */}
      <h4 className="center">{'Time: ' + moment(timestamps[2]).format('HH:mm:ss') + ' Date: ' + moment(timestamps[2]).format('Do of MMM YYYY')}</h4>
      <img src={server+'/api/v1/image/'+props.folder +'xxxx'+ keys[2]} alt="3" className="center"></img>
    </div>
  </Carousel>
  </>
)
}

export default Slideshow;