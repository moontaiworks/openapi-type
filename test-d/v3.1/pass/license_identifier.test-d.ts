import type { OpenAPIObject } from "index";
import { expectAssignable } from "tsd";

expectAssignable<OpenAPIObject>({
  openapi: "3.1.0",
  info: {
    title: "API",
    summary: "My lovely API",
    version: "1.0.0",
    license: {
      name: "Apache",
      identifier: "Apache-2.0",
    },
  },
  components: {},
});
