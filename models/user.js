"use strict";

module.exports = (sequelize, DataTypes)=> {
	const User = sequelize.define("User", {
		name: DataTypes.STRING,
		email: DataTypes.STRING,
		phone: DataTypes.STRING,
		address: DataTypes.STRING,
		password: DataTypes.STRING

	}, {
		classMethods: {
			associate: (models)=> {
			}
		}
	}
	);

	return User;
};

