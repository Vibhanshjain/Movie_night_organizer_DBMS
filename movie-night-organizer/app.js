const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());

const usersRoutes = require('./routes/users');
const moviesRoutes = require('./routes/movies');
const eventsRoutes = require('./routes/events');
const rsvpsRoutes = require('./routes/rsvps');
const commentsRoutes = require('./routes/comments');


// Routes
app.use('/api/users', usersRoutes);
app.use('/api/movies', moviesRoutes);
app.use('/api/events', eventsRoutes);
app.use('/api/rsvps', rsvpsRoutes);
app.use('/api/comments', commentsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
