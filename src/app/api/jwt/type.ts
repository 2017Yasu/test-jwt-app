import { schemaForType } from "@/utilities/schemaForType";
import { z } from "zod";

export type TokenResponse = {
  token: string;
};

export const TokenResponseSchema = schemaForType<TokenResponse>()(
  z.object({
    token: z.string(),
  })
);
