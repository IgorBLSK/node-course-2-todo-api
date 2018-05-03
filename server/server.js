var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
   },
    completed: {
        type: Boolean,
        default: false
   },
   completedAt: {
        type: Number,
        default: null
   }
});

// var newTodo = new Todo({
//     text: ' get to 4th kyu   '
// });

// newTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unable to save todo', e)
// });

// User
var User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
   }
});

var user = new User({
    name: 'Igor Koska',
    email: ' test@testing.com   '
});

user.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
    console.log('Unable to save the user', e)
});

