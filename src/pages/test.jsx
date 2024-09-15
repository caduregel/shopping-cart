import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

function Test() {


  const [fetchResult, setFetchResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }

        return response.json();
      })
      .then((response) => setFetchResult(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (error) return (
    <>
      <p>A network error was encountered:</p>
      <p>{error}</p>
    </>
  )
  
  return loading ? <p>Loading...</p> : (fetchResult[0].url && (
    <>
      <p>Hello Test!!</p>
      <Link to="/">Click here to go back</Link>
      <h1>An image</h1>
      <img src={fetchResult[0].url} alt={"placeholder text"} />
    </>
  ))
}

export default Test
