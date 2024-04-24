import {
  Input,
  Button,
  Box,
  InputGroup,
  Alert,
  AlertIcon,
  AlertDescription,
} from "@chakra-ui/react";

import axios from "axios";
import { useState } from "react";
import { API_ENDPOINT } from "../config";

function URLShortnerForm() {
  const [destination, setDestination] = useState();
  const [shortUrl, setShortUrl] = useState<{ shortId: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setShortUrl(null);
    setError(null);

    const result = await axios
      .post(`${API_ENDPOINT}/api/url`, {
        destination,
      })
      .then((res) => res.data)
      .catch((error: any) => {
        console.log(error.response.data.message, "erroer");
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          setError(error.response.data.message);
        } else {
          setError("An error occurred");
        }
      });

    setShortUrl(result);
  }
  return (
    <Box pos="relative" zIndex="2" backgroundColor="white" padding="6">
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <Input
            onChange={(e: any) => setDestination(e.target.value)}
            placeholder="https://example.com"
          />
          <Button type="submit" left="2">
            Create
          </Button>
        </InputGroup>
      </form>
      {shortUrl && (
        <Button top="2">
          {shortUrl && (
            <a href={`${shortUrl?.shortId}`}>
              {window.location.origin}/{shortUrl?.shortId}
            </a>
          )}
        </Button>
      )}
      {error && (
        <Alert status="error" top="2">
          <AlertIcon />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </Box>
  );
}

export default URLShortnerForm;
