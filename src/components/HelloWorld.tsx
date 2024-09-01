"use client";

import { MessageResponse, MessageResponseSchema } from "@/app/api/hello/type";
import { fetchWithValidation } from "@/utilities/fetchWithValidation";
import { memo, useCallback, useState } from "react";
import { Button } from "react-bootstrap";

function HelloComp({ name }: { name: string }) {
  const [message, setMessage] = useState("");
  const fetchMessage = useCallback(async () => {
    const data = await fetchWithValidation<MessageResponse>()(
      MessageResponseSchema,
      "/api/hello",
      { method: "GET" }
    );
    setMessage(data.message);
  }, []);
  return (
    <div>
      <div>
        <Button onClick={fetchMessage}>Hello</Button>
      </div>
      <div>{message}</div>
    </div>
  );
}

const HelloWorld = memo(HelloComp);
export default HelloWorld;
