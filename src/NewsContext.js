import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "2f135acd21714728b31f20bad5c1b2b0";

  useEffect(() => {
    axios
      .get(
        `http://newsapi.org/v2/everything?domains=wsj.com&apiKey=2f135acd21714728b31f20bad5c1b2b0`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
