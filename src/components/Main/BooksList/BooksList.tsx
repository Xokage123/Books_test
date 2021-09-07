import React, { useEffect, useState, useMemo } from 'react';
import { connect } from 'react-redux'
import { loadListBooks } from '../../../API/google-books'
import { dataFetch } from '../../../data/index'
// Экшены
import { addValueFromList } from '../../../actions/books'
// Компоненты
import { BookMini } from '../Book/Book'
// Стили
import { SpinerLoading } from '../../Styles'
import H6 from "@material-tailwind/react/Heading6";
import Button from "@material-tailwind/react/Button";
import './bookslist.sass';


const BooksList = (props: any) => {
  const [load, setLoad] = useState(false);
  const {
    listBooks,
    addValueFromList
  } = props;
  useEffect(() => {
    if (listBooks.length === 0) {
      loadListBooks(dataFetch.step)
        .then(data => {
          setLoad(() => {
            return true
          })
          addValueFromList(data.items);
        })
        .catch(er => {
          console.log(er);
        })
    }
  }, []);
  const testValue = useMemo(() => {
    return (load && !!listBooks[0]) || ((listBooks.length > 0) && !!listBooks[0])
  }, [listBooks]);

  const Content = testValue ? <>
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
      onClick={(ev: any) => {
        ev.target.innerHTML = "Loading...";
        loadListBooks(dataFetch.step)
          .then(data => {
            setLoad(() => {
              return true
            })
            addValueFromList(data.items);
          })
          .catch(er => {
            (er);
          })
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

const mapStateToProps = (state: any) => {
  return {
    listBooks: state.booksReducer
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    addValueFromList: (list: Array<object>) => dispatch(addValueFromList(list))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);


