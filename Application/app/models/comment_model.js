//Comment model for our database
module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define("comment", {
        user: {
            type: DataTypes.STRING
        },
        comment: {
            type: DataTypes.TEXT
        }
    });

    return Comment;
};