const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dogsOwnedSchema = new Schema({
    id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Dog'
    }
});

const dogsFavoritedSchema = new Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dog'
        }
});

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

const userSchema = new Schema({
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
    dogsOwned: [dogsOwnedSchema],
    dogsFavorited: [dogsFavoritedSchema],
    contacts: [contactsSchema]
}, {
    timestamps:true
});

// User data
//     id                   Not input - hidden
//     name:                input type text
//     email:               input type email
//     password:            input type password
//     zip:                 input type text
//     phone:               input type text
//     dogsOwned: [         Not input - hidden
//          {
//              "id":"fjfjfjjf"
//          }
//      ],
//     dogsFavorited: [     Not input - hidden
//          {
//              "id":"fjfjfjjf"
//          }
//      ],
//     "contacts": [        
//         {
//             "id":0,
//             "contactType":"User",       input dropdown selections primary vet, emergency vet
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

const User = mongoose.model('User', userSchema);

module.exports = User;