const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const siblingSchema = new Schema({
// number of siblings will vary from 0 on up
    name: {
        type:String,
        required:true
    },
    id: {
        type:String,
        required:true
    }
}, {
    timestamps:true
});

const commandSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    image: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    }
}, {
    timestamps:true
});

const routineSchema = new Schema({
    detail: {
        type:String,
        required:true
    }
}, {
    timestamps:true
});

const suppliesSchema = new Schema({
    detail: {
        type:String,
        required:true
    }
}, {
    timestamps:true
});

const notesSchema = new Schema({
    content: {
        type:String,
        required:true
    },
    author: {
        type:String,
        required:true
    }
}, {
    timestamps:true
});

// Dog code starts here

const contactsSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    bio: {
        type:String,
        required:false
    },
    sex: {
        type:String,
        required:true
    },
    breed: {
        type:String,
        required:true
    },
    yearBorn: {
        type:Number,
        required:false
    },
    from: {
        type:String,
        required:false
    },
    siblings: [siblingSchema],
    owner: {
        type:String,
        required:true
    },
    thumbnailPic: {
        type:String,
        required:true
    },
    profilePic: {
        type:String,
        required:true
    },
    commands: [commandSchema],
    zip: {
        type:Number,
        required:false
    },
    supplies: [suppliesSchema],
    notes: [notesSchema],
    contacts: [contactsSchema]
}, {
    timestamps:true
});

// {
//     "id":1,
//     "name":""
//     "bio":"",
//     "sex": "",
//     "breed": "",
//     "yearBorn": "",
//     "from": "",
//     "siblings": [
//         {
//             "name":"",
//             "id":""
//         }
//     ],
//     "owner": "",
//     NOTE: CONVERT PICS FROM SUBDOCS TO JUST thumbnailPic and profilePic fields
//      "pic": [
//         {
//             "type":"thumbnail",
//             "img": ""
//         },
//         {
//             "type":"profilePic",
//             "img":""
//         }
//     ],
//      NOTE: COMMAND ID IS NO LONGER NEEDED
//     "commands": [
//         {
//             "id":0,
//             "name":"",
//             "image":"",
//             "description":""
//         },
//     ],    
//     "ZIP":"21202",
//      NOTE: ROUTINE ID NO LONGER NEEDED
//     "routine": [
//         {
//             "id":0,
//             "detail": ""
//         },
//     ],
//      NOTE: SUPPLIES ID NO LONGER NEEDED
//     "supplies": [
//         {
//             "id":0,
//             "detail": ""
//         },
//     ],
//     "notes": [
//         {
//             "id":0,
//             "content":""
//         }
//     ],    
//     "contacts": [
//         {
//             "id":0,
//             "tabName":"Owner",
//             "tabContent":"",
//             "tabPhone":"",
//             "emergencyVet": false
//         },
//         {
//             "id":1,
//             "tabName":"Primary Vet",
//             "tabContent":"",
//             "tabPhone":"",
//             "emergencyVet": false
//         },
//         {
//             "id":2,
//             "tabName":"Emergency Vet",
//             "tabContent":"",
//             "tabPhone":"",
//             "emergencyVet": true
//         }
//     ]
// }

const Campsite = mongoose.model('Campsite', campsiteSchema);

module.exports = Campsite;