import React, { useEffect, useState } from "react";
import { Table } from "antd";
import axios from "axios";

const FacultyDashboard = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/management/api/students/")
      .then((res) => setStudents(res.data))
      .catch((err) => console.error(err));
  }, []);

  const columns = [
    { title: "Name", dataIndex: "user.username", key: "name" },
    { title: "DOB", dataIndex: "date_of_birth", key: "dob" },
    { title: "Gender", dataIndex: "gender", key: "gender" },
  ];

  return <Table dataSource={students} columns={columns} rowKey="id" />;
};

export default FacultyDashboard;
