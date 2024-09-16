import express from 'express';
import contactsRouter from './routes/contacts.js';

const port = process.env.PORT || 3000;
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//routes
app.use('/api/contacts', contactsRouter);
app.use('/api/contacts/all', contactsRouter);
app.use('/api/contacts/:id', contactsRouter);
app.use('/api/contacts/create', contactsRouter);
app.use('/api/contacts/update', contactsRouter);
app.use('/api/contacts/delete', contactsRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
