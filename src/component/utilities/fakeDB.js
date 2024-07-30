const registerUser = (username, password) => {
    let users = getUsers();
    if (username in users) {
        throw new Error('Username already exists');
    } else {
        users[username] = { password };
        localStorage.setItem('users', JSON.stringify(users));
    }
}

const loginUser = (username, password) => {
    const users = getUsers();
    if (username in users && users[username].password === password) {
        localStorage.setItem('currentUser', username);
    } else {
        throw new Error('Invalid username or password');
    }
}

const getCurrentUser = () => {
    return localStorage.getItem('currentUser');
}

const logoutUser = () => {
    localStorage.removeItem('currentUser');
}

const getUsers = () => {
    let users = {};

    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
        users = JSON.parse(storedUsers);
    }
    return users;
}

// const saveAppointment = (appointmentData) => {
//     const currentUser = getCurrentUser();

//     if (!currentUser) {
//         throw new Error('User is not logged in');
//     }

//     let appointments = JSON.parse(localStorage.getItem('appointments')) || {};
//     console.log('hello booking   ---',appointmentData)
//     if (!appointments[currentUser]) {
//         appointments[currentUser] = [];
//     }

//     appointments[currentUser].push(appointmentData);
//     localStorage.setItem('appointments', JSON.stringify(appointments));
// };


const saveAppointment = (appointmentData) => {
    const currentUser = getCurrentUser();

    if (!currentUser) {
        throw new Error('User is not logged in');
    }

    let appointments = JSON.parse(localStorage.getItem('appointments')) || {};
   // console.log('Current appointment data:', appointmentData);

    if (!appointments[currentUser]) {
        appointments[currentUser] = [];
    }

    console.log('from saved appoit ', currentUser)
    
    if (appointments[currentUser].length > 0) {
        throw new Error('User has already booked an appointment');
    }

    else{
    appointments[currentUser].push(appointmentData);
    }
    localStorage.setItem('appointments', JSON.stringify(appointments));
};

const getSavedAppointment =(user) =>{
    const getStoredData = JSON.parse(localStorage.getItem('appointments'))
    let returnedData = [];
    console.log(getStoredData[user], returnedData)
    if(!getStoredData){
        throw new Error("You didn't book any appointment.")
    }
    else{
        returnedData = getStoredData[user]
    }

    return returnedData
}


const removeUserAppointment = (user) =>{
    let appointments = JSON.parse(localStorage.getItem('appointments')) || {}
    if(appointments[user]){
        delete appointments[user]
        localStorage.setItem('appointments', JSON.stringify(appointments))
    }
    else{
        throw new Error(`No Data found for this user: ${user}`)
    }

}


export {
    registerUser,
    loginUser,
    getCurrentUser,
    logoutUser,
    getUsers, 
    saveAppointment,
    getSavedAppointment,
    removeUserAppointment
}
