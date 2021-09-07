import React, { useCallback } from 'react';
import { connect } from 'react-redux'
// API
import { loadListBooks } from '../../API/google-books'
// Data
import { categoriesOptions, sortingOption, dataFetch } from '../../data/index'
// Экшены
import { addValueFromList } from '../../actions/books'
// Стили
import H2 from "@material-tailwind/react/Heading2";
import H6 from "@material-tailwind/react/Heading6";
import Input from "@material-tailwind/react/Input";
import Select from 'react-select'
import './header.sass';

export function Header(props: any) {
  const {
    addValueFromList
  } = props;
  const updateCategory = useCallback((ev) => {
    dataFetch.start = 0;
    loadListBooks(dataFetch.step, ev.value, null).then(list => {
      addValueFromList(list.items, ev.label, null);
    })
  }, [])
  const updateSort = useCallback((ev) => {
    dataFetch.start = 0;
    loadListBooks(dataFetch.step, null, ev.value).then(list => {
      addValueFromList(list.items, null, ev.label);
    })
  }, [])
  const searchUser = useCallback((ev) => {
    if (ev.keyCode == 13) {
      dataFetch.start = 0;
      loadListBooks(dataFetch.step, ev.target.value, null).then(list => {
        addValueFromList(list.items, ev.target.value, null);
      })
    }
  }, [])
  return (
    <header className="header">
      <div className="content-container">
        <H2 className="header__title">Search for the newest and most interesting books</H2>
        <Input
          onKeyDown={(ev: any) => searchUser(ev)}
          className="header__input"
          type="search"
          color="lightBlue"
          size="Regular"
          placeholder="Enter value"
          outline={true}
        />
        <div className="header__select-container">
          <div className="header__categories-container">
            <H6 className="header__categories-title">Categories</H6>
            <Select onChange={(ev: any) => updateCategory(ev)} defaultValue={categoriesOptions[0]} className="header__select-category" options={categoriesOptions} />
          </div>
          <div className="header__sorting-container">
            <H6 className="header__sorting-title">Sorting by</H6>
            <Select onChange={(ev: any) => updateSort(ev)} defaultValue={sortingOption[0]} className="header__select-category" options={sortingOption} />
          </div>
        </div>
      </div>
    </header>
  );
}

const mapStateToProps = (state: any) => {
  return {
    listBooks: state.booksReducer
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    addValueFromList: (list: Array<object>, category: string, sort: string) => dispatch(addValueFromList(list, category, sort))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);