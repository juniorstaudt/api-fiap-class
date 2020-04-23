const firebase = require('firebase');
const firebaseConfig = require('../config/firebase')

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class BaseModel {
    constructor(){
        this.db = firebaseApp.firestore();
    }
}