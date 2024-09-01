import { TypeOf, z } from "zod";
import { schemaForType } from "./schemaForType";

export function fetchWithValidation<T>() {
  const generateSchema = schemaForType<T>();
  return async (
    schema: ReturnType<typeof generateSchema>,
    url: string,
    init?: RequestInit
  ) => {
    const resp = await fetch(url, init);
    const data = await resp.json();
    return schema.parse(data);
  };
}
