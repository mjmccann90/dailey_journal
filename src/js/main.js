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