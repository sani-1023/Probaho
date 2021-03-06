import Axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Select, Button } from "antd";
import NavbarSignIn from "../components/navBarSignInPage";
import css from "./css/Login.module.css";
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const LoginForm = () => {
  const [form] = Form.useForm();

  //   const onFinish = (values) => {
  //     console.log('Received values of form: ', values);
  //   };

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    //console.log(name, value);
  };

  const login = () => {
    const { email, password } = user;

    // console.log(user);

    if (email && password) {
      if (email) {
        Axios.post("http://localhost:3001/login", user).then((res) => {
          if (res.data.message === "login sucessful") {
            alert(res.data.message);
            //setLoginUser(res.data.user);
            navigate("/Profile");
          } else {
            alert(res.data.message);
            //setLoginUser(res.data.user);
          }
        });
      }
    } else {
      alert("Enter All fields");
    }
  };

 

  return (
    <>
      <NavbarSignIn />
      <div className={css.signincustom}>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Your Email"
          />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password
            type="text"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Your Password"
          />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button className={css.signin} htmlType="submit" onClick={login}>
            login
          </Button>
        </Form.Item>
      </div>
    </>
  );
};

export default LoginForm;
