import { v4 as createId } from 'uuid';

const fakeBooks = [
    { name : 'Harry Potter', price : 17.99, category : 'fantasy' , id : createId()},
    { name : 'Stock Tips for Dummies', price : 11.99, category : 'Self Help' , id : createId()},
    { name : 'The Snowman', price : 24.99, category : 'murder mystery' , id : createId()},
    { name : 'Lord of the Rings', price : 11.99, category : 'fantasy' , id : createId()}
]

export default fakeBooks