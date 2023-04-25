import React from "react";
import "./BayerServices.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  Upload,
} from "antd";

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

function BayerServices() {
  const [showNewOrder, setshowNewOrder] = useState(false);
  const navigate = useNavigate();

  const onClickBackNewOrder = () => {
    setshowNewOrder(true);
    navigate("/neworder");
  };

  return (
    <>
      <div className="bayer-services-container">
        <div className="bayer-services-content">
          <h3>Услуги байера:</h3>
          <Form
            labelCol={{
              span: 15,
            }}
            wrapperCol={{
              span: 25,
            }}
            layout="vertical"
            style={{
              maxWidth: 600,
            }}
          >
            <Form.Item label="Тип товара">
              <Select>
                <Select.Option value="female">Женский</Select.Option>
                <Select.Option value="male">Мужской</Select.Option>
                <Select.Option value="kids">Детский</Select.Option>
                <Select.Option value="kids">Все</Select.Option>
              </Select>
              <Form.Item label="Описание товара">
                <TextArea rows={3} />
              </Form.Item>
              <Form.Item label="Input">
                <Input />
              </Form.Item>
            </Form.Item>
            <Form.Item label="DatePicker">
              <DatePicker />
            </Form.Item>
            <Form.Item
              label="Прикрепить фото"
              valuePropName="fileList"
              getValueFromEvent={normFile}
            >
              <Upload
                action="/upload.do"
                listType="picture-card"
              >
                <div>
                  <PlusOutlined />
                  <div
                    style={{
                      marginTop: 5,
                    }}
                  >
                    добавить
                  </div>
                </div>
              </Upload>
            </Form.Item>
          </Form>

          <Button
            type="primary"
            htmlType="submit"
            className="btn-bayer-services-back"
            onClick={onClickBackNewOrder}
          >
            назад
          </Button>
          {showNewOrder && navigate("/neworder")}
        </div>
      </div>
    </>
  );
}

export default BayerServices;
