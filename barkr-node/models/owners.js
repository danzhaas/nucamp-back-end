const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactsSchema = new Schema({
    contactType: {
        type:String,
        required:true
    },
    name: {
        type:String,
        required:true
    },
    address: {
        type:String,
        required:true
    },
    phone: {
        type:Number,
        required:true
    }
}, {
    timestamps:true
});

const ownerSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    zip: {
        type:Number,
        required:false
    },
    phone: {
        type:Number,
        required:false
    },
    dogsOwned: {
        type: ObjectId,
        required:false
    },
    dogsFavorited: {
        type: ObjectId,
        required:false
    }, 
    contacts: [contactsSchema]
}, {
    timestamps:true
});

// Owner data
//     name:                input type text
//     email:               input type email
//     password:            input type password
//     zip:                 input type text
//     phone:               input type text
//     dogsOwned:           Not input - hidden
//     dogsFavorited:       Not input - hidden
//     "contacts": [        
//         {
//             "id":0,
//             "contactType":"Owner",       input dropdown selections primary vet, emergency vet
//             "name":"",                   input type text
//             "address":"",                input type text
//             "phone": ""                  input type text
//         },
//         {
//             "id":1,
//             "contactType":"Primary Vet",       input dropdown selections primary vet, emergency vet
//             "name":"",                   input type text
//             "address":"",                input type text
//             "phone": ""                  input type text
//         },
//         {
//             "id":2,
//             "contactType":"Emergency Vet",       input dropdown selections primary vet, emergency vet
//             "name":"",                   input type text
//             "address":"",                input type text
//             "phone": ""                  input type text
//         }
//     ]

const Owner = mongoose.model('Owner', ownerSchema);

module.exports = Owner;