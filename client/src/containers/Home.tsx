import { Box } from "@chakra-ui/react";
import Background from "../components/Background";
import URLShortnerForm from "../components/URLshortnerForm";

function Home() {
  return (
    <Box
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <URLShortnerForm />
      <Background />
    </Box>
  );
}
export default Home;
