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

function Grid (){

const [keys, setKeys] = React.useState([]);
const [timestamps, setTimestamps] = React.useState([]);

useEffect (() => {
    console.log("Hello")
    axios.get(server+'/api/v1/images')
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
    {
        keys.map((key,index)=>(
            <div className="center">
            <h4 className="center">{'Time: ' + moment(timestamps[index]).format('HH:mm:ss') + ' Date: ' + moment(timestamps[index]).format('Do of MMM YYYY')}</h4>
            <img src={server+'/api/v1/image/' + key} alt={index} className="center"></img>
            </div>
        ))
    }
  </>
)
}

export default Grid;