const db = require('../models/index');
const { Error } = require('sequelize');

let getDoctorScheduleById = async (userId) => {

    try {
        let schedule = await db.Schedule.findAll({
            where: {
                doctorId: userId
            }
        })


        if(schedule[0]){
            return schedule;
        }
        else{
            return {};
        }

    
    } catch (error) {
        throw error;
    }

}

let getDoctorBySpecialtyName = async (specialtyName) =>{
    try{
    let results = await db.Specialty.findAll({
        where: {
            name: specialtyName
        },
        include: [
            {
                model: db.SpecialtyDoctorWithSpecialty,
                attributes: [],
                required: true,  // Chỉ lấy các bản ghi có khớp (INNER JOIN)
                on: db.Sequelize.literal('SpecialtyDoctorWithSpecialty.specialtyId = Specialty.id'),
                include: [
                    {
                        model: db.User,
                        attributes: ['id', 'name', 'email'],
                        required: true,
                        on: db.Sequelize.literal('Users.id = SpecialtyDoctorWithSpecialty.doctorId')
                    }
                ]
            }
        ]
    });

    if(results[0]){
        return results;
    }
    else{
        return {};
    }
    }
    catch(error){
        throw error;
    }
}
