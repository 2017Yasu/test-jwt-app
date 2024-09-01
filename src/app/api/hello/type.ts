import { schemaForType } from "@/utilities/schemaForType";
import { z } from "zod";

export type MessageResponse = {
  message: string;
}

export const MessageResponseSchema = schemaForType<MessageResponse>()(
  z.object({
    message: z.string(),
  })
);
