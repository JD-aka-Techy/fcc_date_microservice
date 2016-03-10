/*
  returns natural date month dd, yyyy from unix time stamp
*/
function naturalFromUnix(unixTS) {
    var monthLU = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    var date = new Date(unixTS * 1000)
    var naturalDate = "" +
                      monthLU[date.getMonth()] +
                      " " +
                      date.getDay() +
                      ", " +
                      date.getFullYear()
    
    return naturalDate
    
}

module.exports = naturalFromUnix