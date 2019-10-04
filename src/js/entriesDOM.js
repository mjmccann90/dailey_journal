import webComponent from "./entryComponent.js"

const injectDOM = {




    addToDom: function(entries) {
        entries.forEach(taco => {
            const journalContainer = document.querySelector(".entryContainer")
            journalContainer.innerHTML+= webComponent.entryHTML(taco)
        });
    },
    filterMoods: function(entries, mood) {
        let journalContainer = document.querySelector(".entryContainer")
        entries.forEach(entry => {
            if (entry.mood === mood){
                journalContainer.innerHTML+= webComponent.entryHTML(entry)
            }
        })
    }
}

export default injectDOM