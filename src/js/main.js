import API from "./data.js";
import injectDOM from "./entriesDOM.js";


document.querySelector("#submitButton").addEventListener("click", (event) => {

        let jDate = document.querySelector("#journalDate").value
        let jConcepts = document.querySelector("#journalConcepts").value
        let jEntry = document.querySelector("#journalEntry").value
        let jMood = document.querySelector("#journalMood").value

    const newEntry = {
        date: jDate,
        concepts:jConcepts,
        content: jEntry,
        mood: jMood,
      };
    API.submitEntry(newEntry)
    .then(() => {
        document.querySelector("#journalDate").value = "";
        document.querySelector("#journalConcepts").value = "";
        document.querySelector("#journalEntry").value = "";
        document.querySelector("#journalMood").value = "";
        document.querySelector(".entryContainer").innerHTML = "";
        API.getEntries()
        .then(entry => {
            injectDOM.addToDom(entry)
        });
    })
})


API.getEntries()
    .then(taco => injectDOM.addToDom(taco))

document.querySelector("#journalMoodFilter").addEventListener("input", event => {
    let moody = event.target.value;
        API.getEntries().then(data => {
            document.querySelector(".entryContainer").innerHTML = " ";
            injectDOM.filterMoods(data, moody);
    });
});

document.querySelector("#resetButton").addEventListener("click", (event) => {
    API.getEntries().then(data => {
        document.querySelector(".entryContainer").innerHTML = " ";
        injectDOM.addToDom(data)
        document.querySelector("#journalMoodFilter").value = "Moods";
    })
})