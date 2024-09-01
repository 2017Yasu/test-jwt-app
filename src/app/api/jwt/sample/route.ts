import jwt, { SignOptions } from "jsonwebtoken";
import { TokenResponse } from "../type";

// Secret key for signing the JWT. In a real application, store this securely!
const secretKey = "your-secret-key";

// Payload for the JWT
const payload = {
  userId: "12345",
  username: "exampleUser",
};

// Options for signing the JWT
const signOptions: SignOptions = {
  expiresIn: "1h", // The token will expire in 1 hour
  algorithm: "HS256", // The algorithm to sign the token
};

export async function GET() {
  const data: TokenResponse = {
    token: jwt.sign(payload, secretKey, signOptions),
  }
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
