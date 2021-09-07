 import { keyAPI, dataFetch, categoriesBooks, sortingOption } from '../data/index';

 let categoryNow = categoriesBooks.all.value;
 let sortNow = sortingOption[0].value;

 export const loadListBooks = async(numberBooks, category, sort) => {
     if (category) {
         categoryNow = category
     }
     if (sort) {
         sortNow = sort
     }
     let url = url = `https://www.googleapis.com/books/v1/volumes?orderBy=${sortNow}&startIndex=${dataFetch.start}&maxResults=${numberBooks}&q=${categoryNow}&key=${keyAPI.goggle}`;
     const response = await fetch(url);
     dataFetch.start += dataFetch.step;
     const answer = await response.json();
     return answer;
 }

 export const loadBook = async(id) => {
     const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}?key=${keyAPI.goggle}`, {
         method: "GET"
     });
     const answer = await response.json();
     return answer;
 }