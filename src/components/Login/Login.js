import React from "react";
import "./Login.css";
import { Button, Checkbox, Form, Input } from "antd";
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
      navigate("/belgikgBot/mytrades");
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
        <span style={{ color: "red", margin: '0 auto', fontSize: '17px' }}>Неверный логин или пароль:</span>
      )}
      <Form.Item
        name="username"
        placeholder="Username"
        rules={[
          {
            required: true,
            message: "Пожалуйста, введите имя пользователя или почту",
          },
        ]}
      >
        <Input placeholder="LOGIN" />
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
        <Input.Password placeholder="ПАРОЛЬ" />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Запомнить меня</Checkbox>
      </Form.Item>

      <Form.Item>
        <div className="btn-and-forgot-pass-container">
          <Button type="primary" htmlType="submit">
            ВОЙТИ
          </Button>
          {/* <a className="login-form-forgot" href="">
            Забыли пароль?
          </a> */}
        </div>
      </Form.Item>
    </Form>
  );
}

export default Login;
