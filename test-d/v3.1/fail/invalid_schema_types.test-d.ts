import type { OpenAPIObject } from "index";
import { expectError } from "tsd";

expectError<OpenAPIObject>({
  openapi: "3.1.1",
  // this example shows invalid types for the schemaObject
  info: {
    title: "API",
    version: "1.0.0",
  },
  components: {
    schemas: {
      invalid_null: null,
      invalid_number: 0,
      invalid_array: [],
    },
  },
});
