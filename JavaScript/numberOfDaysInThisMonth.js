// Here we want to find the total number of days in this month


function getNumberOfDaysInThisMonth(){

    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth()

    // Create a new date object for the first day of the next month
    const nextMonth = new Date(year,month+1,1)

     // Subtract one day from the first day of the next month
     nextMonth.setDate(nextMonth.getDate() - 1);

    console.log(nextMonth.getDate())
}
getNumberOfDaysInThisMonth()