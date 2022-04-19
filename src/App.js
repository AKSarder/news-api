import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';

function App() {

  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("https://newsapi.org/v2/everything?q=tesla&from=2022-03-05&sortBy=publishedAt&apiKey=fe0090d05ce6432bb7753d3d1c3c4816")
      .then(res => res.json())
      .then(data => setNews(data))
  }, []);

  return (
    <div className="App">
      <Button variant='primary'>click me</Button>
      {
        news.map(news => console.log(news))
      }
    </div>
  );
}

export default App;
