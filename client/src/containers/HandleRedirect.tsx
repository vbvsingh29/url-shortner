import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_ENDPOINT } from "../config";
import { Box, Spinner } from "@chakra-ui/react";

function HandleRedirect() {
  const [destination, setDestination] = useState<null | string>(null);
  const [error, setError] = useState();

  const { shortId } = useParams<{ shortId: string }>();

  useEffect(() => {
    async function getData() {
      return axios
        .get(`${API_ENDPOINT}/api/url/${shortId}`)
        .then((res) => setDestination(res.data.destination))
        .catch((error) => {
          setError(error.message);
        });
    }
    getData();
  }, [shortId]);

  useEffect(() => {
    if (destination) {
      window.location.replace(destination);
    }
  }, [destination]);

  if (!destination && !error) {
    return (
      <Box
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Spinner />
      </Box>
    );
  }

  return <p>{error && JSON.stringify(error)}</p>;
}
export default HandleRedirect;
