import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        title: "Title",
        author: "Author",
        publisher: "Publisher",
        ISBN: "ISBN",
        year_printed: "Year Printed",
        page_length: "Page Length",
    },
    reducers: {
        chooseTitle: (state, action) => { state.title = action.payload },
        chooseAuthor: (state, action) => { state.author = action.payload },
        choosePublisher: (state, action) => { state.publisher = action.payload },
        chooseISBN: (state, action) => { state.ISBN = action.payload },
        chooseYearPrinted: (state, action) => { state.year_printed = action.payload },
        choosePageLength: (state, action) => { state.page_length = action.payload }
    }
})

export const reducer = rootSlice.reducer;
export const { chooseTitle, chooseAuthor, choosePublisher, chooseISBN, chooseYearPrinted, choosePageLength } = rootSlice.actions