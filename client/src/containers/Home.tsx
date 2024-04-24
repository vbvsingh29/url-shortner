import { Box, Spinner } from "@chakra-ui/react";
import Background from "../components/Background";
import URLShortnerForm from "../components/URLshortnerForm";
import { useEffect, useState } from "react";
import { API_ENDPOINT } from "../config";
import axios from "axios";

function Home() {
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    async function healthCheckServer() {
      return await axios
        .get(`${API_ENDPOINT}/healthcheck`)
        .then((res) => {
          if (res.status === 200) {
            console.log("object");
            setLoading(false);
          }
        })
        .catch((error) => console.log(error));
    }
    healthCheckServer();
  });
  return (
    <Box
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {loading && (
        <Spinner
          zIndex="2"
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      )}
      {!loading && <URLShortnerForm />}
      <Background />
    </Box>
  );
}
export default Home;
