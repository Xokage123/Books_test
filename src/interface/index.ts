import { ReactElement, ReactNode, ValidationMap, WeakValidationMap } from "react";

export interface IBooksListProps {
  listBooks: Array<Object>;
  addValueFromList: any;
}

export interface IFullBook {
  book: {
    volumeInfo: {
      imageLinks: {
        medium?: string;
      },
      categories: Array<string>;
      title: string;
      authors: Array<string>;
      description: string
    }
  };
  addBook: Function
}

export interface IBookProps {
  id: string;
  title: string;
  image: string;
  categories: Array<string> | string;
  author: Array<string>;
}

type PropsWithChildren<P> = P & { children?: ReactNode };
export interface FunctionComponent<P = {}> {
  (props: PropsWithChildren<P>, context?: any): ReactElement | null;
  propTypes?: WeakValidationMap<P>;
  contextTypes?: ValidationMap<any>;
  defaultProps?: Partial<P>;
  displayName?: string;
}

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