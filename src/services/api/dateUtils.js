const getRandomDate = async function() {
    const startDate = new Date("1995-06-16"); 
    const today = new Date();
    const randomDate = new Date(startDate.getTime() + Math.random() * (today.getTime() - startDate.getTime()));
    const formattedDate = randomDate.toISOString().slice(0, 10);

    return formattedDate;
}

const getTodayDate = function() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}


const getPreviousDate = function(currentDate) {
    const previousDate = new Date(currentDate);
    previousDate.setDate(previousDate.getDate() - 1);
    const formattedDate = previousDate.toISOString().slice(0, 10);

    return formattedDate;
}


const getNextDate = function(currentDate) {
    const nextDate = new Date(currentDate);
    nextDate.setDate(nextDate.getDate() + 1);
    const formattedDate = nextDate.toISOString().slice(0, 10);

    return formattedDate;
}


export { getRandomDate, getTodayDate, getPreviousDate, getNextDate }