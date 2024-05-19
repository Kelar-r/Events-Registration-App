const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Event = sequelize.define('event', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING,},
    description: {type: DataTypes.TEXT,},
    date: {type: DataTypes.DATE},
}) 

const EventsList = sequelize.define('events_list', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const EventsMember = sequelize.define('events_member', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Member = sequelize.define('member', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING,},
    email: {type: DataTypes.STRING,},
}) 

Event.hasOne(EventsList)
EventsList.belongsTo(Event)

EventsList.hasMany(EventsMember)
EventsMember.belongsTo(EventsList)

Member.hasMany(EventsMember)
EventsMember.belongsTo(Member)


module.exports = {
    Event,
    EventsList,
    EventsMember,
    Member
}