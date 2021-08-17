import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Carousel, Image, Row, Col, Select } from 'antd';
import moment from 'moment';
import axios from 'axios';
import "./Slideshow.css";

import { useDispatch, useSelector } from "react-redux";
import { selectDeviceAddress, setDeviceAddress } from '../Features/deviceSlice';

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const server = "https://oeserver.herokuapp.com";

function Grid (props){

const [keys, setKeys] = React.useState([]);
const [timestamps, setTimestamps] = React.useState([]);

const search = props.location.search; // could be '?foo=bar'
const params = new URLSearchParams(search);
const folderFromURL = params.get('folder'); // bar

const [folder, setFolder] = React.useState(folderFromURL);

const history = useHistory();

React.useEffect(() => {
  console.log("Hello")
  axios.get(server+'/api/v1/images/'+folder)
  .then(res => {
    console.log(res)
    setKeys(res.data.keys);
    setTimestamps(res.data.timestamps);
  })
  .catch(err => {
    console.log(err)
  })
},[folder])

const handleChange=(value)=>{
    setFolder(value);
    //console.log(folder);
    history.push("/?folder="+value)
}
return(

    <>
    <h3>Please select a device</h3>
    <Select placeholder="Devices"  style={{ width: 170 }} onChange={handleChange}>
      <option value="98:CD:AC:7B:97:20">98:CD:AC:7B:97:20</option>
      {/* <option value="08:3A:F2:47:3B:E0">08:3A:F2:47:3B:E0</option> */}
      <option value="24:6F:28:78:16:E8">24:6F:28:78:16:E8</option>
      {/* <option value="7C:9E:BD:FB:F8:B8">7C:9E:BD:FB:F8:B8</option>
      <option value="9C:9C:1F:1D:3B:20">9C:9C:1F:1D:3B:20</option>
      <option value="9C:9C:1F:1D:3C:D4">9C:9C:1F:1D:3C:D4</option> */}
      <option value="Web">Web</option>
      <option value="Ovens">Ovens</option>
    </Select>
    <Row>
    {
        keys.slice(0, 30).map((key,index)=>(
            
            <Col span={12} className="center">
            <h5 className="center" >{'Time: ' + moment(timestamps[index]).format('HH:mm:ss') + '\n Date: ' + moment(timestamps[index]).format('Do of MMM YYYY')}</h5>
            <Image width={ window.screen.availWidth/2} src={server+'/api/v1/image/' + folder + 'xxxx' + key} alt={index} />
            </Col>
        ))
    }
    </Row>
    </>
)
}

export default Grid;