import "./DataFetcher.css";
import { useState, useEffect } from "react";
import axios from "axios";

function DataFetcher() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(response.data);
      } catch (error) {
        console.error("Veriler yüklenirken bir hata oluştu.", error);
        setError("Veriler yüklenirken bir hata oluştu.");
      }
    };
    fetchData();
  }, []);
  if (error) return <div>{error}</div>;
  if (!data) return <div>Veriler yükleniyor ...</div>;
  return (
    <main>
      <h1>Aşağıda axios ile Çekilen Verileri Görüyorsunuz</h1>
      {data.map((data) => (
        <article key={data.id}>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </article>
      ))}
    </main>
  );
}

export default DataFetcher;
