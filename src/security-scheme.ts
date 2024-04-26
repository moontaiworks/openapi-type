import type { Extendable } from "./_extendable";
import type { OAuthFlowsObject } from "./oauth-flows";

export interface SecuritySchemeObject extends Extendable {
  /**
   * The type of the security scheme. Valid values are `"apiKey"`, `"http"`, `"mutualTLS"`, `"oauth2"`, `"openIdConnect"`.
   */
  type: "apiKey" | "http" | "mutualTLS" | "oauth2" | "openIdConnect";
  /**
   * The name of the header, query or cookie parameter to be used.
   */
  name?: string;
  /**
   * A description for security scheme. [CommonMark syntax](https://spec.commonmark.org/) _MAY_ be used for rich text representation.
   */
  description?: string;
  /**
   * The location of the API key. Valid values are `"query"`, `"header"` or `"cookie"`.
   */
  in?: "query" | "header" | "cookie";
  /**
   * The name of the HTTP Authorization scheme to be used in the Authorization header as defined in \[[RFC7235](https://spec.openapis.org/oas/latest.html#bib-RFC7235)\]. The values used _SHOULD_ be registered in the [IANA Authentication Scheme registry](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml).
   */
  scheme?: string;
  /**
   * A hint to the client to identify how the bearer token is formatted. Bearer tokens are usually generated by an authorization server, so this information is primarily for documentation purposes.
   */
  bearerFormat?: string;
  /**
   * An object containing configuration information for the flow types supported.
   */
  flows?: Record<string, OAuthFlowsObject>;
  /**
   * OpenId Connect URL to discover OAuth2 configuration values. This _MUST_ be in the form of a URL. The OpenID Connect standard requires the use of TLS.
   */
  openIdConnectUrl?: string;
}

export interface SecuritySchemeObjectApiKey extends SecuritySchemeObject {
  type: "apiKey";
  name: string;
  in: "query" | "header" | "cookie";
  scheme?: never;
  bearerFormat?: never;
  flows?: never;
  openIdConnectUrl?: never;
}

export interface SecuritySchemeObjectHttp extends SecuritySchemeObject {
  type: "http";
  scheme: string;
  name?: never;
  in?: never;
  bearerFormat?: never;
  flows?: never;
  openIdConnectUrl?: never;
}

export interface SecuritySchemeObjectHttpBearer extends SecuritySchemeObject {
  type: "http";
  scheme: "bearer" | "Bearer";
  name?: never;
  in?: never;
  flows?: never;
  openIdConnectUrl?: never;
}

export interface SecuritySchemeObjectMutualTLS extends SecuritySchemeObject {
  type: "mutualTLS";
  name?: never;
  in?: never;
  scheme?: never;
  bearerFormat?: never;
  flows?: never;
  openIdConnectUrl?: never;
}

export interface SecuritySchemeObjectOAuth2 extends SecuritySchemeObject {
  type: "oauth2";
  flows: Record<string, OAuthFlowsObject>;
  name?: never;
  in?: never;
  scheme?: never;
  bearerFormat?: never;
  openIdConnectUrl?: never;
}

export interface SecuritySchemeObjectOpenIdConnect
  extends SecuritySchemeObject {
  type: "openIdConnect";
  openIdConnectUrl: string;
  name?: never;
  in?: never;
  scheme?: never;
  bearerFormat?: never;
  flows?: never;
}

/**
 * Defines a security scheme that can be used by the operations.
 *
 * Supported schemes are HTTP authentication, an API key (either as a header, a cookie parameter or as a query parameter), mutual TLS (use of a client certificate), OAuth2’s common flows (implicit, password, client credentials and authorization code) as defined in \[[RFC6749](https://spec.openapis.org/oas/latest.html#bib-RFC6749)\], and [OpenID Connect Discovery](https://tools.ietf.org/html/draft-ietf-oauth-discovery-06). Please note that as of 2020, the implicit flow is about to be deprecated by [OAuth 2.0 Security Best Current Practice](https://tools.ietf.org/html/draft-ietf-oauth-security-topics). Recommended for most use case is Authorization Code Grant flow with PKCE.
 *
 * @see https://spec.openapis.org/oas/latest.html#security-scheme-object
 */
export type AnySecuritySchemeObject =
  | SecuritySchemeObjectApiKey
  | SecuritySchemeObjectHttp
  | SecuritySchemeObjectHttpBearer
  | SecuritySchemeObjectMutualTLS
  | SecuritySchemeObjectOAuth2
  | SecuritySchemeObjectOpenIdConnect;
