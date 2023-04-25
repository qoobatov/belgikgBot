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
  const { Option } = Select;
  const CheckboxGroup = Checkbox.Group;

  const options = [
    { label: "Женский", value: "female" },
    { label: "Мужской", value: "male" },
    { label: "Детский", value: "kids" },
  ];

  function handleChangeType(checkedValues) {
    console.log("checked = ", checkedValues);
  }

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
              <CheckboxGroup options={options} onChange={handleChangeType} />

              {/* <Select>
                <Select.Option value="female">Женский</Select.Option>
                <Select.Option value="male">Мужской</Select.Option>
                <Select.Option value="kids">Детский</Select.Option>
                <Select.Option value="kids">Все</Select.Option>
              </Select> */}
              <Form.Item label="Описание товара:">
                <TextArea rows={3} />
              </Form.Item>

              <Form.Item
                label="Цена за шт.  (выбрать валюту):"
                style={{ display: "flex" }}
              >
                <Input type="number" style={{ width: "240px" }} />
                <Select defaultValue="KGZ" style={{ width: 80 }}>
                  <Option value="GBP">KGZ</Option>
                  <Option value="USD">USD</Option>
                  <Option value="EUR">EUR</Option>
                  <Option value="RUB">RUB</Option>
                  <Option value="KZT">KZT</Option>
                </Select>
              </Form.Item>

              <Form.Item label="Количество:">
                <Input type="number" />
              </Form.Item>
            </Form.Item>
            <Form.Item label="Дата:">
              <DatePicker style={{ width: "320px" }} />
            </Form.Item>
            <Form.Item label="Адрес доставки:">
              <Input />
            </Form.Item>
            <Form.Item label="Город доставки:">
              <Input />
            </Form.Item>
            <Form.Item
              label="Прикрепить фото"
              valuePropName="fileList"
              getValueFromEvent={normFile}
            >
              <Upload action="/upload.do" listType="picture-card" maxCount={4}>
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
