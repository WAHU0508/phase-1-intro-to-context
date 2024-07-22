// Function1
function createEmployeeRecord(employeeRecord) {
    return {
        firstName: employeeRecord[0],
        familyName: employeeRecord[1],
        title: employeeRecord[2],
        payPerHour: employeeRecord[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

//Function2
function createEmployeeRecords(arrays) {
    return arrays.map(array => createEmployeeRecord(array))
}

function checkTimeValidity(timeStamp) {
    const format = 
}
//Function3
function createTimeInEvent(employeeRecord, dateStamp) {
    let [date, hour] = dateStamp.split(' ');
    employeeRecord.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour, 10),
        date: date
    });
    return employeeRecord;
}

//Function4
function createTimeOutEvent(employeeRecord, dateStamp) {
    let [date, hour] = dateStamp.split(' ');
    employeeRecord.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour, 10),
        date: date
    });
    return employeeRecord
}

//Function5
function hoursWorkedOnDate(employeeRecord, date) {
    const timeInEvent = employeeRecord.timeInEvents.find(event => event.date === date)
    const timeOutEvent = employeeRecord.timeOutEvents.find(event => event.date === date)

    if (!timeInEvent || !timeOutEvent) {
        console.error(`No matching events found for date ${date}`)
    }

    const timeIn = timeInEvent.hour;
    const timeOut = timeOutEvent.hour;

    const hoursWorked = (timeOut - timeIn) / 100

    return hoursWorked
}

//Function6
function wagesEarnedOnDate(employeeRecord, date) {
    return hoursWorkedOnDate(employeeRecord, date) * employeeRecord.payPerHour
}

//Function7
function allWagesFor(employeeRecord) {
    let dates = employeeRecord.timeInEvents.map(event => event.date);
    let totalWages = dates.reduce((total, date) => {
        return total + wagesEarnedOnDate(employeeRecord, date)
    }, 0);
    return totalWages;
}

//Function8
function calculatePayroll(employeeRecords) {
  return employeeRecords.reduce((total, employee) => {
    return total + allWagesFor(employee)
  }, 0)  
}



