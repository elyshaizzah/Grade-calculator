 // enter numbers
  // click button
  function calculateAverage() {
const stringNumbers = document.getElementById("scores").value
    const stringArray = stringNumbers.split(",")
    const numOfentries= stringArray.length
    let totalnum = 0
    for (const item of stringArray) {
      totalnum += parseInt(item)
    }
    const ave = totalnum/numOfentries
    document.getElementById("grade").innerHTML = ave 
  }
  // calculate averageAndSet
     // get the numbers
     // add the numbers
     // divide numbers by the amt of numbers
    // set innerhtml with the answer

