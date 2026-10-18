
import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => setStudents(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container">
      <h1>🎓 Student List</h1>
      <p className="subtitle">Student Records</p>

      {loading ? (
        <p>Loading students...</p>
      ) : (
        <div className="student-list">
          {students.map((student) => (
            <div className="card" key={student.id}>
              <h3>{student.name}</h3>
              <p><b>ID:</b> {student.id}</p>
              <p><b>Email:</b> {student.email}</p>
              <p><b>City:</b> {student.address.city}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}