const {Event, EventsList} = require('../models/models')
const ApiError = require('../error/ApiError');
const { where } = require('sequelize');

class EventController {
    async adding(req, res, next) {
        try {
            const {title, description, date} = req.body
            const event = await Event.create({title, description, date})
            const eventsList = await EventsList.create({eventId: event.id})
            return res.json(event)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getALL(req, res) {
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 12

        let offset = page * limit - limit

        const events = await Event.findAndCountAll({limit, offset})
        return res.json(events)
    }

    async getId(req, res) {
        
    }

    async delete(req, res) {
        
    }
}


module.exports = new EventController()
