/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('designer_data_directories', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		pid: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		desc: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'designer_data_directories',
		timestamps: false
	});
};
