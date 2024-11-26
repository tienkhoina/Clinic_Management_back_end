function splitFullName(fullName) {
    const nameParts = fullName.trim().split(' ');

    if (nameParts.length === 1) {
        return {
            firstName: nameParts[0],
            lastName: ''
        };
    }

    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ');

    return {
        firstName,
        lastName
    };
}

function doctorIdtoUserId(doctorId){
    return doctorId.charAt(3);
}

module.exports = {splitFullName}