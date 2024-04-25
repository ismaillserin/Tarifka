import {useEffect, useState} from 'react';
import axios from 'axios';

function useFetch(url) {
  const [data, setData] = useState([]);
  async function fetchData() {
    const {data: responseData} = await axios.get(url);
    setData(responseData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {data};
}
export default useFetch;
