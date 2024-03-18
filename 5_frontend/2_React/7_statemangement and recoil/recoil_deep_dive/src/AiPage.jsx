import React, { useState } from 'react';
import { VictoryChart, VictoryLine, VictoryAxis } from 'victory';
import './Aipage.css'; // Import CSS file for styling

const AIPage = () => {
  const [textData] = useState("Text data from Gemini API");
  const [graphData, setGraphData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [relatedQuestions, setRelatedQuestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Function to populate dummy data on search button click
  const handleSearch = () => {
    // Dummy graph data
    const dummyGraphData = [
      { x: 1, y: 10 },
      { x: 2, y: 20 },
      { x: 3, y: 30 },
      { x: 4, y: 40 },
      { x: 5, y: 50 }
    ];
    setGraphData(dummyGraphData);

    // Dummy table data
    const dummyTableData = [
      { id: 1, name: 'John', age: 30 },
      { id: 2, name: 'Jane', age: 25 },
      { id: 3, name: 'Doe', age: 35 }
    ];
    setTableData(dummyTableData);

    // Dummy related questions
    const dummyRelatedQuestions = [
      "What is AI?",
      "How does AI work?",
      "What are the applications of AI?"
    ];
    setRelatedQuestions(dummyRelatedQuestions);
  };

  return (
    <div className="ai-container">
      {/* Section for rendering text */}
      <section className="section text-section">
        <h2>Text</h2>
        <p>{textData}</p>
      </section>

      {/* Section for graph */}
      <section className="section graph-section">
        <h2>Graph</h2>
        <div className="graph-container">
          {/* Render your graph here */}
          <VictoryChart>
            <VictoryLine data={graphData} />
            <VictoryAxis />
            <VictoryAxis dependentAxis />
          </VictoryChart>
        </div>
      </section>

      {/* Section for table */}
      <section className="section table-section">
        <h2>Table</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section for related questions */}
      <section className="section related-questions-section">
        <h2>Related Questions</h2>
        <div className="related-questions-container">
          <ul>
            {relatedQuestions.map((question, index) => (
              <li key={index}>{question}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Search box and button */}
      <div className="search-box">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter search term"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default AIPage;
