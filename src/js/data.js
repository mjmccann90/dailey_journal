// Move the code that deals with getting the data into this file.

const API = {


    getEntries: () => {
        return fetch ("http://localhost:3000/entries")
            .then(entries => entries.json())
    },

    getEntries2: () => {
        return fetch ("http://localhost:3000/entries")
            .then(entries => entries.json())
    },
};

export default API