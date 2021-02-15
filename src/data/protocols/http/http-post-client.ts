import { HttpResponse } from "./http-response";

export type HttpPostParams<T> = {
  url: string
  body?: T
}

export interface HttpPostClient<P, R> {
  post (params: HttpPostParams<P>): Promise<HttpResponse<R>>
}

// interface segregation principle = I
