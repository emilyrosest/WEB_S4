const getEpicImageURL = async function(date) {
    const [year, month, day] = date.split('-');
    const response = await fetch("https://api.nasa.gov/EPIC/api/natural/images?api_key=CO4mLcboX7jz9rU9sQWzzaEkRaODzyvayPGoGOZC&date=" + date)
    if (response.status == 200) {
        const data = await response.json()
        const identifier = data.identifier;
        return "https://epic.gsfc.nasa.gov/archive/natural/" + year + '/' + month + '/' + day + "/png/epic_1b_" + identifier + ".png";
    } else {
        new Error(response.statusText)
    }
}


export { getEpicImageURL }


