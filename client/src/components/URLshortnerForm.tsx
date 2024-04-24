import { Input, Button, Box, InputGroup } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { API_ENDPOINT } from "../config";

function URLShortnerForm() {
  const [destination, setDestination] = useState();
  const [shortUrl, setShortUrl] = useState<{ shortId: string } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setShortUrl(null);

    const result = await axios
      .post(`${API_ENDPOINT}/api/url`, {
        destination,
      })
      .then((res) => res.data);

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
          <Button type="submit">Create</Button>
        </InputGroup>
      </form>
      {shortUrl && (
        <a href={`${shortUrl?.shortId}`}>
          {window.location.origin}/{shortUrl?.shortId}
        </a>
      )}
    </Box>
  );
}

export default URLShortnerForm;
