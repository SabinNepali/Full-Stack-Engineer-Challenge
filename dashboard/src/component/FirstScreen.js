import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const FirstScreen = () => {
    const [repositories, setRepositories] = useState([]);
    const navigate = useNavigate();
    const handleRedirect = (e) =>{
        e.preventDefault();
        navigate('/form');
    }

    useEffect(() => {
    fetch("http://localhost:4011/results")
      .then((response) => response.json())
      .then((data) => setRepositories(data))
      .catch((error) => console.log(error));
  }, []);

    return (
        <div>
            <button className="btn-create" onClick={handleRedirect}>Create form</button>
        <table>
        <thead>
          <tr>
            <th>Repository Name</th>
            <th>Status</th>
            <th>Scanned At</th>
            <th>Queued At</th>
            <th>Finished At</th>
          </tr>
        </thead>
        <tbody>
          {repositories.map((repo) => (
            <tr key={repo.id}>
              <td>{repo.repositoryName}</td>
              <td>{repo.status}</td>
              <td>{repo.scanningAt}</td>
              <td>{repo.queuedAt}</td>
              <td>{repo.finishedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    );
}

export default FirstScreen;
