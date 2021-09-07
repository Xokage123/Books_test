
export interface IBookProps {
  id: string;
  title: string;
  image: string;
  author: Array<string>;
  categories: string | Array<string>;
}

export interface IRouterUseParams {
  id: 'string'
}