
const webComponent = {



    entryHTML: (item)=>{
    return `
        <div class ="entryBackground">
            <h2>Journal Date: ${item.date}</h2>
            <h3>Concepts Covered: ${item.concepts}</h3>
            <p>Journal Entry: ${item.content}</p>
            <h3>Mood for the day: ${item.mood}</h3>
        </div>`

    }
}

export default webComponent