// app/api/hello/route.js

import { MessageResponse } from "./type";

export async function GET() {
  const data: MessageResponse = {
    message: "Hello, World!",
  }
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
