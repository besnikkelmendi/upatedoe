import React from 'react';
import Slideshow from './Components/Slideshow';
import {
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
  Rate,
  Typography,
  Space,
  Divider,
} from 'antd';
import './App.less';
import { useDispatch, useSelector } from "react-redux";
import { selectDeviceAddress, setDeviceAddress } from './Features/deviceSlice';

const { Option } = Select;
const { Title } = Typography;



function App (){

  const [folder, setFolder] = React.useState("98:CD:AC:7B:97:20");

  const handleChange=(value)=>{
    setFolder(value);
    console.log(folder);
  }
  
  return(
  <>
    {/* <section style={{ textAlign: 'center', marginTop: 48, marginBottom: 40 }}>
      <Space align="start">
        <img
          style={{width: 40, height: 40 }}
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          alt="Ant Design"
        />
        <Title level={2} style={{ marginBottom: 0 }}>
          Ant Design
        </Title>
      </Space>
    </section>
    <Divider style={{ marginBottom: 60 }}>Form</Divider>
    <Form labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
      <Form.Item label="数字输入框">
        <InputNumber min={1} max={10} defaultValue={3} />
        <span className="ant-form-text"> 台机器</span>
        <a href="https://ant.design">链接文字</a>
      </Form.Item>
      <Form.Item label="开关">
        <Switch defaultChecked />
      </Form.Item>
      <Form.Item label="滑动输入条">
        <Slider defaultValue={70} />
      </Form.Item>
      <Form.Item label="选择器">
        <Select defaultValue="lucy" style={{ width: 192 }}>
          <Option value="jack">jack</Option>
          <Option value="lucy">lucy</Option>
          <Option value="disabled" disabled>disabled</Option>
          <Option value="yiminghe">yiminghe</Option>
        </Select>
      </Form.Item>
      <Form.Item label="日期选择框">
        <DatePicker />
      </Form.Item>
      <Form.Item label="日期范围选择框">
        <DatePicker.RangePicker />
      </Form.Item>
      <Form.Item label="评分">
        <Rate defaultValue={5} />
      </Form.Item>
      <Form.Item wrapperCol={{ span: 8, offset: 8 }}>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button>
            Cancel
          </Button>
        </Space>
      </Form.Item>
    </Form> */}
    <Button href="/more">More</Button>
    <Select placeholder="Select a mac address"  style={{ width: 170 }} onChange={handleChange}>
      <option value="98:CD:AC:7B:97:20">98:CD:AC:7B:97:20</option>
      <option value="08:3A:F2:47:3B:E0">08:3A:F2:47:3B:E0</option>
      <option value="24:6F:28:78:16:E8">24:6F:28:78:16:E8</option>
      <option value="7C:9E:BD:FB:F8:B8">7C:9E:BD:FB:F8:B8</option>
      <option value="9C:9C:1F:1D:3B:20">9C:9C:1F:1D:3B:20</option>
      <option value="9C:9C:1F:1D:3C:D4">9C:9C:1F:1D:3C:D4</option>
      <option value="Web">Web</option>
      <option value="Ovens">Ovens</option>
    </Select>
    <Slideshow folder={folder}/>
    
  </>)
};

export default App;