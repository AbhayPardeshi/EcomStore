import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (
  apiURL,
  method = "GET",
  postMethodData,
  encodedToken
) => {
  const [serverResponse, setServerResponse] = useState();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const API_URL = `https://shoepalace-clone.herokuapp.com` + apiURL;

  const getData = async () => {
    try {
      setLoading(true);
      let serverResponse;
      switch (method) {
        case "GET":
          serverResponse = await axios.get(API_URL, {
            headers: {
              authorization: encodedToken,
            },
          });
          break;
        case "POST":
          serverResponse = await axios.post(API_URL, postMethodData, {
            headers: {
              authorization: encodedToken,
            },
          });
          break;
        case "DELETE":
          serverResponse = await axios.delete(API_URL, {
            headers: {
              authorization: encodedToken,
            },
          });
          break;
        default:
          break;
      }
      setServerResponse(serverResponse);
    } catch (e) {
      setError((prev) => ({
        ...prev,
        message: e.response.data.message,
        status: e.response.status,
      }));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (apiURL) {
      getData();
    }
  }, [apiURL, method, postMethodData]);

  return { isLoading, error, serverResponse };
};
