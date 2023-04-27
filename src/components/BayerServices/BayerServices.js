import React from "react";
import "./BayerServices.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import { Checkbox } from "antd";

import { Button, DatePicker, Form, Input, Select, Upload } from "antd";

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
          <h3> Оптовые покупки:</h3>
          <Form
            labelCol={{
              span: 15,
              color: "red",
            }}
            wrapperCol={{
              span: 25,
            }}
            layout="vertical"
            style={{
              maxWidth: 600,
            }}
          >
              <Form.Item label="Что вы хотите купить?">
                <Input />
              </Form.Item>
              <Form.Item label="Описание товара:">
                <TextArea rows={7} />
              </Form.Item>
            
          </Form>

          <Button
            type="primary"
            htmlType="submit"
            className="btn-bayer-services-send-form"
            style={{ marginBottom: "10px" }}
          >
            отправить
          </Button>
          <div className="btns-bayer-services">
            <Button
              type="primary"
              className="btn-bayer-services-back"
              onClick={onClickBackNewOrder}
            >
              назад
            </Button>

          </div>
          {showNewOrder && navigate("/neworder")}
        </div>
      </div>
    </>
  );
}

export default BayerServices;
