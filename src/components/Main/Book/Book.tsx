import React, { useEffect } from 'react';
import {
  Link,
  useParams,
  useHistory
} from "react-router-dom";
import { connect } from 'react-redux'

// API
import { loadBook } from '../../../API/google-books'

// Экшены
import { addBook } from '../../../actions/books'

// Интерфейсы
import {
  IBookProps
} from '../../../interface/index'

// Стили
import H5 from "@material-tailwind/react/Heading5";
import H6 from "@material-tailwind/react/Heading6";
import Button from "@material-tailwind/react/Button";
import Paragraph from "@material-tailwind/react/Paragraph";
import { SpinerLoading } from '../../Styles'
import './book.sass';


export const BookMini = (props: IBookProps) => {
  const { id, title, image, categories, author } = props;
  return (
    <Link to={`/book/${id}`}>
      <li className="book__container">
        <img className="book__image" src={image} alt="photo" />
        <span className="book__categories">{categories instanceof Array ? categories[0] : categories}</span>
        <span className="book__title">{title}</span>
        <ul className="book__author-list">
          {
            author.map((element: string, index: number) => {
              return (
                <li className="book__author-item" key={element}>{element}{index + 1 == author.length ? '.' : ','}</li>
              )
            })
          }
        </ul>
      </li>
    </Link>
  );
}

export function BookFull(props: any) {
  const { id }: any = useParams();
  const {
    book,
    addBook
  } = props
  const history = useHistory();
  useEffect(() => {
    loadBook(id).then(book => {
      addBook(book);
    });
    return () => {

    }
  }, []);
  return (
    <div className="book__full-container">
      {
        book.volumeInfo ? (<>
          <Button
            className="button__back"
            onClick={() => history.goBack()}
            color="red"
            buttonType="filled"
            size="regular"
            rounded={false}
            block={false}
            iconOnly={false}
            ripple="light"
          >
            Вернуться назад
          </Button>
          <img className="book__image" src={book.volumeInfo.imageLinks.medium} alt="photo" />
          <ul className="book__categories-list">
            {book.volumeInfo.categories ? book.volumeInfo.categories.map((element: string) => {
              return (
                <li key={element} className="book__categories-item">{element}</li>
              )
            }) : <li className="book__categories-item">Категории не указаны</li>}
          </ul>
          <H5 className="book__title">{book.volumeInfo.title}</H5>
          <H6>Авторы:</H6>
          <ul className="book__author-list">
            {
              book.volumeInfo.authors ? book.volumeInfo.authors.map((element: string, index: number) => {
                return (
                  <li className="book__author-item" key={element}>{element}{index + 1 == book.volumeInfo.authors.length ? '.' : ','}</li>
                )
              }) : <li className="book__author-item">Авторы не указаны</li>
            }
          </ul>
          <H6>Описание:</H6>
          <Paragraph>{book.volumeInfo.description ? book.volumeInfo.description : "Описание отсутствует"}</Paragraph>
        </>) : SpinerLoading
      }
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    book: state.bookReducer
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    addBook: (book: any) => dispatch(addBook(book))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BookFull)

