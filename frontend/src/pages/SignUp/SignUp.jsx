// import React, { useState } from "react";
// import axios from "axios";
// import "./SignUp.css";
// import { Button,Form, Input, message} from 'antd';

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     userType: 'User', // Default to User
//   });
//   console.log(formData);

//   const { username, email, password, userType } = formData;

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value,  });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/signup', formData);
//       console.log(response.data);

//       message.success("SignUp Successfully!");

//       // Reset form after successful signup
//       setFormData({
//         username: '',
//         email: '',
//         password: '',
//         userType: 'User', // Reset to default
//       });
//     } catch (error) {
//       console.error('Signup error:', error.response.data);

//       message.error("SignUp Unsuccessfully");
//     }
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="username"
//           value={username}
//           onChange={handleChange}
//           placeholder="Username"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           value={email}
//           onChange={handleChange}
//           placeholder="Email"
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           value={password}
//           onChange={handleChange}
//           placeholder="Password"
//           required
//         />
//         <select name="userType" value={userType} onChange={handleChange}>
//           <option value="User">User</option>
//           <option value="Seller">Seller</option>
//         </select>
//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button, message, Select } from "antd";
import "./SignUp.css";

const { Option } = Select;

const Signup = () => {
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post("http://localhost:5000/api/signup", values);
      console.log(response.data);

      message.success("Signup Successful!");

      // Reset form fields after successful signup
      form.resetFields();
    } catch (error) {
      console.error("Signup error:", error.response.data);
      message.error("Signup Unsuccessful");
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <Form
        form={form}
        onFinish={handleSubmit}
        layout="vertical"
        initialValues={{
          userType: "User", // Default to User
        }}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please enter your username" }]}
        >
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, type: "email", message: "Please enter a valid email" }]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item
          label="User Type"
          name="userType"
          rules={[{ required: true, message: "Please select user type" }]}
        >
          <Select>
            <Option value="User">User</Option>
            <Option value="Seller">Seller</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Signup
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Signup;
