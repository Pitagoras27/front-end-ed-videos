import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchApi = await fetch(API);
        const response = await fetchApi.json();
        setVideos(response);
      } catch (error) {
        throw Error(error);
      }
    };
    fetchData();
  }, []);

  return videos;
};

export default useInitialState;
