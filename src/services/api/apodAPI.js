const getDataOfToday = async function() {
    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=CO4mLcboX7jz9rU9sQWzzaEkRaODzyvayPGoGOZC")
    if (response.status == 200) {
        const data = await response.json()
        return data
    } else {
        new Error(response.statusText)
    }
}

const getDataFromDate = async function(date) {
    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=CO4mLcboX7jz9rU9sQWzzaEkRaODzyvayPGoGOZC&date=" + date)
    if (response.status == 200) {
        const data = await response.json()
        return data
    } else {
        new Error(response.statusText)
    }
}

const getRandomData = async function() {
    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=CO4mLcboX7jz9rU9sQWzzaEkRaODzyvayPGoGOZC&count=5")
    if (response.status == 200) {
        const data = await response.json()
        return data
    } else {
        new Error(response.statusText)
    }
}

export { getDataOfToday, getDataFromDate, getRandomData }


