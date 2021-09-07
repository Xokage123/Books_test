// Категории книг
export const categoriesBooks = {
    all: {
        value: "art_computer+history+medical+poetry",
        label: 'all'
    },
    art: {
        value: "art",
        label: 'art'
    },
    biography: {
        value: "biography",
        label: 'biography'
    },
    computer: {
        value: "computer",
        label: 'computer'
    },
    history: {
        value: "history",
        label: 'history'
    },
    medical: {
        value: "medical",
        label: 'medical'
    },
    poetry: {
        value: "poetry",
        label: 'poetry'
    },
}


// Выбор из select в header
export const categoriesOptions = Object.values(categoriesBooks);

export const sortingOption = [{
    value: "relevance",
    label: "relevance"
}, {
    value: "newest",
    label: "newest"
}]

// Название события
export const actionName = {
    addBooksFromList: "ADD__BOOKS__FROM__LIST",
    addBook: "ADD__BOOK",
    addNewCategory: "ADD__NEW__CATEGORY"
}


// Ключи от API
export const keyAPI = {
    goggle: 'AIzaSyDPHUXLvKO9F-2Z3ilddmYHNzZhcXqHf_8'
}

// Параметры загрузки

export const dataFetch = {
    step: 30,
    start: 0
}