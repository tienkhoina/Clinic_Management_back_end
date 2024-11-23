'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class DoctorWithSpecialty extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    DoctorWithSpecialty.init({
       doctorId: DataTypes.INTEGER,
       specialtyId: DataTypes.INTEGER,
       createAt: DataTypes.DATE,
       updateAt: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'DoctorWithSpecialty',
    });
    return DoctorWithSpecialty;
};