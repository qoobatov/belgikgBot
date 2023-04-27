import React from "react";
import "./Login.css";
import { Button, Form, Input, Checkbox } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import clients from "../../clients.json";

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const onFinish = (values) => {
    const { username, password } = values;
    const employee = clients.users.find(
      (user) => user.username === username && user.password === password
    );
    if (employee) {
      navigate("/mytrades");
      // Перенаправляем на другую страницу
    } else {
      setError(true);
      console.log("Нету такого пользователя");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h3>Введите логин и пароль:</h3>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {error && (
            <span style={{ color: "red", margin: "0 auto", fontSize: "17px" }}>
              Неверный логин или пароль:
            </span>
          )}
          <Form.Item
            name="username"
            placeholder="Username"
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите логин",
              },
            ]}
          >
            <Input placeholder="Login" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите пароль",
              },
            ]}
          >
            <Input.Password placeholder="Пароль" />
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox style={{marginLeft: "auto"}}>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <div className="btn-and-forgot-pass-container">
              <Button type="primary" htmlType="submit" className="btn-login">
                Войти
              </Button>
              {/* <a className="login-form-forgot" href="">
            Забыли пароль?
        </a> */}
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
