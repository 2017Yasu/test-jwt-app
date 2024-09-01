"use client";

import { TokenResponse, TokenResponseSchema } from "@/app/api/jwt/type";
import { fetchWithValidation } from "@/utilities/fetchWithValidation";
import { memo, useCallback, useState } from "react";
import { Button } from "react-bootstrap";

function SampleTokenGeneratorComp() {
  const [token, setToken] = useState("");

  const getToken = useCallback(async () => {
    const data = await fetchWithValidation<TokenResponse>()(
      TokenResponseSchema,
      "/api/jwt/sample",
      { method: "GET" }
    );
    setToken(data.token);
  }, []);

  return (
    <div style={{width: '100vw'}}>
      <div>
        <Button onClick={getToken}>Get Sample Token</Button>
      </div>
      <div style={{ wordBreak: 'break-all' }}>
        {/* <pre>
          {`token: ${token}`}
        </pre> */}
        <span>token: </span>
        <span>{token}</span>
      </div>
    </div>
  );
}

const SampleTokenGenerator = memo(SampleTokenGeneratorComp);
export default SampleTokenGenerator;
