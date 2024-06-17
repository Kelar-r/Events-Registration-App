const {EventsMember, Member} = require('../models/models')
const ApiError = require('../error/ApiError');

class EventsMemberController {
    async addEventMember(req, res, next) {
        try {
            const {name, email} = req.query
            const eventsListId = Number(req.query.eventsListId)

            const member = await Member.create({name, email})
            const eventsMember = await EventsMember.create({eventsListId: eventsListId, memberId: member.id})
            return res.json(eventsMember)
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

        
        const eventsMember = await EventsMember.findAll({limit, offset})
        return res.json(eventsMember)
    }

    async getId(req, res) {
        
    }

    async delete(req, res) {
        
    }
}


module.exports = new EventsMemberController()
