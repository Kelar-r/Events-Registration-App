const {Event, EventsList, EventsMember, Member} = require('../models/models')
const ApiError = require('../error/ApiError');
const { where, Op } = require('sequelize');

class EventController {
    async adding(req, res, next) {
        try {
            const {title, description, date} = req.body
            const event = await Event.create({title, description, date})
            const eventsList = await EventsList.create({eventId: event.id})
            return res.json(event, eventsList)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }


    async getALL(req, res) {
        let {limit, page, order} = req.query
        page = page || 1
        limit = limit || 12
        order = order || "ASC"

        let offset = page * limit - limit

        const events = await Event.findAndCountAll({limit, offset, order: [['id', order]]})
        return res.json(events)
    }


    async getEventId(req, res) {
        try {
            let {limit, page} = req.query
            page = page || 1
            limit = limit || 12
            const id = req.params.id; // Getting id from param
            
            //Getting event from event DB
            let events = await Event.findAll({attributes: ['id', 'title', 'description', 'date'], where: { id: {[Op.eq]: id, }, }, })
            let event = events[0]

            //Getting list of participants
            let eventsLists = await EventsList.findAll({attributes: ['id', 'eventId'], where: { eventId: {[Op.eq]: id, }, }, })
            let eventsList = eventsLists[0]
            

            //Getting Members of participants
            let eventsMembers = await EventsMember.findAll({attributes: ['memberId'], where: { eventsListId: {[Op.eq]: eventsList.id, }, }, })

            if (!event && !eventsMembers) {
                return res.status(404).json({ message: 'Event not found' }); // Якщо подію не знайдено, повертаємо 404
            }

            return res.json([event, eventsMembers])
        }
        catch (e) {
            return res.json(e)
        }
    }


    async delete(req, res, next) {
        try {

            let id = req.query.id
            if (id == null) {
                return res.json("Id not initialize")
            }


            let eventlist = await EventsList.findAll({ where: { eventId: {[Op.eq]: id, }, }, })
            let listId = eventlist[0].id


            //Getting Members Id
            let memberForDestroy = await EventsMember.findAll({ where: { eventsListId: {[Op.eq]: listId,}, }, });

            //async deleting members
            const memberDelete = new MemberDelete()
            memberForDestroy.forEach(member => {
                memberDelete.deleteMember(member.id);
            });


            //Deleting all participants from list of event participants
            let destroyEventMember = await EventsMember.destroy({ where: { eventsListId: {[Op.eq]: listId,}, }, });

            //Deleting list of participants from listDB
            let destroyList = await EventsList.destroy({ where: { id: {[Op.eq]: listId,}, }, });

            //Deleting event from eventDB
            let destroyEvent = await Event.destroy({ where: { id: {[Op.eq]: id,}, }, });


            return res.json(destroyEvent, destroyList, destroyEventMember)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

class MemberDelete {
    async deleteMember(id) {
        await Member.destroy({ where: {id: {[Op.eq]: id, }, }, })
    }
}


module.exports = new EventController()
