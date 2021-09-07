import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { connect } from 'react-redux'
// API
import { loadListBooks } from '../../../API/google-books'
// Data
import { dataFetch } from '../../../data/index'
// Экшены
import { addValueFromList } from '../../../actions/books'
// Компоненты
import { BookMini } from '../Book/Book'
// Interfaces
import { IBooksListProps, FunctionComponent } from '../../../interface/index'
import type { RootState, AppDispatch } from '../../../store/index'
// Стили
import { SpinerLoading } from '../../Styles'
import H6 from "@material-tailwind/react/Heading6";
import Button from "@material-tailwind/react/Button";
import './bookslist.sass';

const BooksList: FunctionComponent<IBooksListProps> = (props) => {
  const [load, setLoad] = useState(false);
  const loadBooksFromServer: Function = useCallback(async () => {
    try {
      const answer = await loadListBooks(dataFetch.step);
      addValueFromList(answer.items);
      setLoad((value) => !value);
    } catch(er) {
      alert("Произошла ошибка!! Попробуйте позже");
    }
  }, [])
  const {
    listBooks,
    addValueFromList
  } = props;
  useEffect(() => {
    if (listBooks.length === 0) {
      loadBooksFromServer();
    }
  }, []);
  const testValue: boolean = useMemo((): boolean => {
    return (load && !!listBooks[0]) || ((listBooks.length > 0) && !!listBooks[0])
  }, [listBooks]);

  const Content: JSX.Element | null = testValue ? <>
    <H6>Found {listBooks.length} results</H6>
    <ul className="books__list">
      {
        listBooks.map((element: any, index: number) => {

          return (
            <BookMini
              title={element.volumeInfo.title}
              categories={element.volumeInfo.categories}
              author={element.volumeInfo.authors ? element.volumeInfo.authors : []}
              image={element.volumeInfo.imageLinks ? element.volumeInfo.imageLinks.thumbnail : ''}
              key={index}
              id={element.id}
            />
          )
        })
      }
    </ul>
    <Button
      onClick={(ev:any) => {
        ev.target.innerHTML = "Loading...";
        loadBooksFromServer()
          .finally(() => {
            ev.target.innerHTML = "Load More";
          })
      }}
      color="lightBlue"
      buttonType="filled"
      size="lg"
      rounded={false}
      block={false}
      iconOnly={false}
      ripple="light"
    >
      Load More
    </Button>
  </> : null
  return (
    <>
      {
        testValue ? Content : SpinerLoading
      }
    </>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    listBooks: state.booksReducer
  }
}

const mapDispatchToProps: Function = (dispatch: AppDispatch) => {
  return {
    addValueFromList: (list: Array<object>) => dispatch(addValueFromList(list))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);


