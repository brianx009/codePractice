let meeting = { //creating an object called meetings
    attendees : [], //empty array that is to be filled with attendees
    add(attendee){ //function add attendee that will run everytime we add a persons name
        console.log(`${attendee} has joined the meeting`); // console will log the user who just joined
        this.attendees.push(attendee); // this will push the users name into the empty attendees array
        return this; //this will return the object it belongs to 
    },
    get latest(){ //getter that will get the latest person who joined
        let count = this.attendees.length; //creating a count of who has joined
        return count == 0 ? 'No one has joined' : this.attendees[count-1]; // if the count is zero, no one is in the meeting, else point to the last person and return them.
    }
}

meeting.add('Barry').add('Barny').add('Wilma').add('Daphney');
console.log(`The last person who has joined the meeting is ${meeting.latest}.`);
