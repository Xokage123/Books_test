 import { actionName, categoriesBooks } from '../data/index';

 export const addValueFromList = (list, category, sort) => {
     return {
         type: actionName.addBooksFromList,
         list,
         category,
         sort
     }
 }

 export const addBook = (book) => {
     return {
         type: actionName.addBook,
         book
     }
 }