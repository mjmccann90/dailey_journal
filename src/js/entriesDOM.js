import webComponent from "./entryComponent.js"

const injectDOM = {



    
    addToDom: function(entries) {
        entries.forEach(taco => {
            const journalContainer = document.querySelector(".entryContainer")
            journalContainer.innerHTML+= webComponent.entryHTML(taco)
        });
    }
}

export default injectDOM