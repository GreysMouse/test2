interface IAPIOptions {
  baseURL: string
}

export abstract class API {
  readonly _baseURL: string;

  constructor({ baseURL }: IAPIOptions) {
    this._baseURL = baseURL;
  }

  protected _checkResponse(res: Response) {
    if (res.ok) return res.json();
    return Promise.reject(res);
  }
}
