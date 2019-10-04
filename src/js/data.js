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
    submitEntry: (newJournalEntry) => {
        return fetch("http://localhost:3000/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
    },
    body: JSON.stringify(newJournalEntry)
})}
};

export default API