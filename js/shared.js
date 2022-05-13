const urlBase = "http://CustomerTestAPI.somee.com/";
const imageBase = urlBase + 'Images/';

function checkInputs(firstName, lastName, email, phoneNumber) {
    let errorsList = [];
    if (firstName == null || firstName == undefined || firstName == "") {
        errorsList.push("Fill First Name");
    }
    if ((/^\d+$/.test(firstName))) {
        errorsList.push("First Name Can't Containt Number");
    }

    if (lastName == null || lastName == undefined || lastName == "") {
        errorsList.push("Fill Last Name");
    }

    if ((/^\d+$/.test(lastName))) {
        errorsList.push("Last Name Can't Containt Number");
    }

    let isValidEmail = String(email).toLowerCase().match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (!isValidEmail) {
        errorsList.push("Email Is Not Valid");
    }
    if (phoneNumber == null || phoneNumber == undefined || !(/^\d+$/.test(phoneNumber))) {
        phoneNumber.push('Fill Phone Number')
    }
    let pattern = /\b(599|595)\d{6}\b/;

    if (!pattern.test(phoneNumber)) {
        errorsList.push("Phone Number Should Containt  9 Digits Long And Should Start Either With 599 Or 595  ");
    }
    if (!(/^\d+$/.test(phoneNumber))) {
        errorsList.push("Phone Number Can't Containt Alpahumeric Characters")
    }
    return errorsList;

}

function GetCustomerType(customerType) {

    switch (customerType) {

        case 0: return "New";

        case 1: return "Loyal";

        case 2: return "Elite";

        default: return "None";

    }
}


