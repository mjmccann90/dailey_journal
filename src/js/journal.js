const entryContainer = document.querySelector(".entryContainer")


const makeEntry =(item)=>{     
    return `
        <div>
            <h2>Journal Date ${item.date}</h2>
            <h3>Concepts Covered ${item.concepts}</h3>
            <p>Journal Entry ${item.content}</p>
            <h3>Mood for the day${item.mood}</h3>
        </div>`
    }
    for (let i =0; i<journalEntry.length; i++) {
        console.log (journalEntry[i])
        entryContainer.innerHTML += makeEntry(journalEntry[i])
    }