import type { Extendable } from "./_extendable";
import type { HeaderObject } from "./header";
import type { QueryParameterStyle } from "./parameter";
import type { ReferenceObject } from "./reference";

export type EncodingStyle = QueryParameterStyle;

/**
 * A single encoding definition applied to a single schema property.
 *
 * @see https://spec.openapis.org/oas/latest.html#encoding-object
 */
export interface EncodingObject extends Extendable {
  /**
   * The Content-Type for encoding a specific property. Default value depends on
   * the property type: for `object` - `application/json`; for `array` – the
   * default is defined based on the inner type; for all other cases the default
   * is `application/octet-stream`. The value can be a specific media type (e.g.
   * `application/json`), a wildcard media type (e.g. `image/*`), or a
   * comma-separated list of the two types.
   */
  contentType?: string;
  /**
   * A map allowing additional information to be provided as headers, for
   * example `Content-Disposition`. `Content-Type` is described separately and
   * _SHALL_ be ignored in this section. This property _SHALL_ be ignored if the
   * request body media type is not a `multipart`.
   */
  headers?: Record<string, HeaderObject | ReferenceObject>;
  /**
   * Describes how a specific property value will be serialized depending on its
   * type. See [Parameter
   * Object](https://spec.openapis.org/oas/latest.html#parameter-object) for
   * details on the
   * [`style`](https://spec.openapis.org/oas/latest.html#parameterStyle)
   * property. The behavior follows the same values as `query` parameters,
   * including default values. This property _SHALL_ be ignored if the request
   * body media type is not `application/x-www-form-urlencoded` or
   * `multipart/form-data`. If a value is explicitly defined, then the value of
   * [`contentType`](https://spec.openapis.org/oas/latest.html#encodingContentType)
   * (implicit or explicit) _SHALL_ be ignored.
   */
  style?: EncodingStyle;
  /**
   * When this is true, property values of type `array` or `object` generate
   * separate parameters for each value of the array, or key-value-pair of the
   * map. For other types of properties this property has no effect. When
   * [`style`](https://spec.openapis.org/oas/latest.html#encodingStyle) is
   * `form`, the default value is `true`. For all other styles, the default
   * value is `false`. This property _SHALL_ be ignored if the request body
   * media type is not `application/x-www-form-urlencoded` or
   * `multipart/form-data`. If a value is explicitly defined, then the value of
   * [`contentType`](https://spec.openapis.org/oas/latest.html#encodingContentType)
   * (implicit or explicit) _SHALL_ be ignored.
   */
  explode?: boolean;
  /**
   * Determines whether the parameter value _SHOULD_ allow reserved characters,
   * as defined by
   * \[[RFC3986](https://spec.openapis.org/oas/latest.html#bib-RFC3986)\]
   * `:/?#[]@!$&'()*+,;=` to be included without percent-encoding. The default
   * value is `false`. This property _SHALL_ be ignored if the request body
   * media type is not `application/x-www-form-urlencoded` or
   * `multipart/form-data`. If a value is explicitly defined, then the value of
   * [`contentType`](https://spec.openapis.org/oas/latest.html#encodingContentType)
   * (implicit or explicit) _SHALL_ be ignored.
   */
  allowReserved?: boolean;
}
