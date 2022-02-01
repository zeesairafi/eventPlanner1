const res = require("express/lib/response")
const Data = require("../../models/Event")





exports.fetchEvent = async (req, res) =>{
    try{
        const events = await Event.find({}.select("List of Events"))
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
exports.createEvent=(req, res) => {
    
    try{
      const newEvent = await Event.create(req.body)
      res.status(201).json(newEvent)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
  }

  exports.updateEvent =  async (req, res) => {
      const {eventId} = req.params
      try{
          const foundEvent = await Event.findByIdAndUpdate(
              {_id: eventId}, 
              req.body,
              { new: true, runValidators: true}
          )
          if (foundEvent) res.json(foundEvent)
          else res.status(404).end()
      } catch (error) {
          res.status(500).json({message: error.message})
      }
  }

  exports.deleteEvent = async (req, res) => {
    try{
    const {eventId} = req.params
    // constdataId = req.params.dataId => same you can use any
    const foundData = await Data.findByIdAndDelete({_id: eventId}) 

    if (foundData) {
    res.status(204).end()
    } else {
        res.status(404).json({message: "not found"})
    }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

