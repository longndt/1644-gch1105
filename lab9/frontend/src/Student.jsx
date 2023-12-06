import React, { useEffect, useState } from "react";
import axios from "axios";

// Khai báo URL của back-end side
const baseURL = "http://localhost:5000/edo";

const Student = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(baseURL);
      setData(response.data);
    };

    fetchData();
  }, []);

  // Định dạng ngày tháng kiểu "dd/mm/yyyy"
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="container text-center mt-3 col-md-8">
      <center>
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="thead-dark">
              <tr>
                <th colSpan={5}>
                  <h3 className="text text-center text-danger">STUDENT LIST</h3>
                </th>
              </tr>
              <tr>
                <th className="text text-success">Name</th>
                <th className="text text-success">Gender</th>
                <th className="text text-success">GPA</th>
                <th className="text text-success">DoB</th>
                <th className="text text-success">Image</th>
              </tr>
            </thead>
            <tbody>
              {data.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.gender}</td>
                  <td>{student.gpa}</td>
                  <td>{formatDate(student.dob)}</td>
                  <td>
                    <img src={student.image} alt="" width={100} height={100} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </center>
    </div>
  );
};

export default Student;
