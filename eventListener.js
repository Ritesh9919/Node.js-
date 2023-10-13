const EventEmitter = require('./userEvent');

const userEvent = new EventEmitter();

function savePostToDatabase() {
    console.log('Saved post to database');
}

function sendNotification() {
    console.log('Sended notification');
}

function updateTimeline() {
    console.log('Updated timeline');
}

userEvent.addListener('createPost', savePostToDatabase);
userEvent.addListener('createPost', sendNotification);
userEvent.addListener('createPost', updateTimeline);

userEvent.createPost('My first post');

