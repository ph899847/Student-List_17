
import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const studentData = [
      { id: 1, name: "Happy", email: "happy@gmail.com", city: "Surat" },
      { id: 2, name: "Krisha", email: "krisha@gmail.com", city: "Patan" },
      { id: 3, name: "Rutu", email: "rutu@gmail.com", city: "Sidhhpur" },
      { id: 4, name: "Kashish", email: "kashish@gmail.com", city: "Vijapur" },
      { id: 5, name: "Arju", email: "arju@gmail.com", city: "Unjha" },
      { id: 6, name: "Tithi", email: "tithi@gmail.com", city: "Mehsana" },
      { id: 7, name: "Jiya", email: "jiya@gmail.com", city: "Palanpur" },
    ];

    setStudents(studentData);
    setLoading(false);
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1>🎓 Student List</h1>
        <p>Welcome to Student Records</p>
      </header>

      <h2 className="section-title">Our Students</h2>

      {loading ? (
        <p className="loading">Loading students...</p>
      ) : (
        <div className="student-list">
          {students.map((student) => (
            <div className="card" key={student.id}>
              <div className="avatar">
                {student.name.charAt(0)}
              </div>

              <h3>{student.name}</h3>

              <p>
                <b>ID:</b> {student.id}
              </p>

              <p>
                <b>Email:</b> {student.email}
              </p>

              <p>
                <b>City:</b> {student.city}
              </p>
            </div>
          ))}
        </div>
      )}

      <footer>
        <p>© 2026 Student Records | Made with ❤️</p>
      </footer>
    </div>
  );
}
