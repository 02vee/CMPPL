import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  return (
    <div>
      <header>
        <h1>CMPPL</h1>
        <nav>
          <ul>
            <li><a href="transporter.html">Transporter</a></li>
            <li><a href="documents.html">Documents</a></li>
            <li><a href="admin.html">Admin</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h2>About CMPPL</h2>
          <p>Welcome to CMPPL. We provide transportation and document management services.</p>
        </section>
      </main>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));