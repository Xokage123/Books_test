import { ReactElement, ReactNode, ValidationMap, WeakValidationMap } from "react";

export interface IBooksListProps {
  listBooks: Array<Object>;
  addValueFromList: any;
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