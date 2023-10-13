const Events = require('events');

class EventEmitter extends Events.EventEmitter{
    createPost(content) {
        console.log('Post created');
        this.emit('createPost');
    }
}

module.exports = EventEmitter;