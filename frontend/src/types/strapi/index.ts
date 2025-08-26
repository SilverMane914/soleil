import type * as Attribute from "./contentTypes";

export interface IDProperty {
  id: number;
}

export interface GetValues<TContentTypeUID extends string> {
  [key: string]: any;
}

export interface APIResponseData<TContentTypeUID extends string>
  extends IDProperty {
  attributes: GetValues<TContentTypeUID>;
}

export interface APIResponseCollectionMetadata {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface APIResponse<TContentTypeUID extends string> {
  data: APIResponseData<TContentTypeUID>;
}

export interface APIResponseCollection<TContentTypeUID extends string> {
  data: APIResponseData<TContentTypeUID>[];
  meta: APIResponseCollectionMetadata;
}

// Re-export the content types for easy access
export * from "./contentTypes";
export * from "./components";
