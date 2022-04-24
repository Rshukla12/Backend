// Problem Statement
// DESIGN A MEETING ROOM
// Build a system for booking meeting rooms for 91Springboard

// Assumptions:
// Meeting rooms are located in multiple buildings and multiple floors and each floor can have multiple conference rooms, and each room should have a unique id.
// Booking will be done for slots in hours. Hours will be taken in 24 hours format eg. Book from 1am to 3am {1:3}, from 12pm to 1pm {12:13}
// Each meeting room can be booked as long as its available during that slot and can only have a maximum of 4 hours at a time.

// Input for meeting => Book from 1am to 3am {1:3}, from 12pm to 1pm {12:13}
// Maximum duration for meeting is only 4 hours, do not book meetings longer than 4 hours

// Features
// List all the meeting rooms available in a given building.
// be able to book a room for a particular slot if it’s valid and available.
// cancel a booking
// List down all booked slots.

// Bonus Questions/Features:
// Create an option to provide suggestions incase a user is not able to get a slot
// Unit tests and Logging.

// Expectation
// Code should be written in a clean format and functionality needs to be present.
// Manage errors and edge cases and display correct responses to users
// Apply Object-Oriented Design.


// 1. Entities
    // 1. Buildings
    // 2. Floors
    // 3. Rooms
    // 4. Slots
    // 5. Slot => Meeting
    // 6. Scheduler

// 2. Relation between Entieties
    // Multiple Meeting can happen in a Room
    // Muliple Rooms can belong to a single Floor
    // A Building can have multiple floor
    // There are multiple buildings campus

// 3. Details

    // Slot => slot: [start, end]
    
    // Slots => Slot[]
    // methods => add, delete, isAvailable
    
    // Meeting room
    // properties => name, capacity, slots
    // methods => addSlots, deleteSlots, isAvailable, setAvailablesSlots, suggestedSlots, listAllSlots

    // Floor
    // properties => name, meetings
    // methods => addMeetingRoom, doesMeetingRoomExist, deleteMeetingRoom, listAllMeetingRoom

    // Building
    // properties => name, floors
    // methods => addfloor, doesfloorExist, deletefloor, listAllFloors

    // Scheduler
    // properties => buildings
    // methods => addBuilding, addFloor, addMeetingRoom, listAllRooms, bookRoomSlot, cancelSlots, listAllSlots, isslotAvailable, suggestSlot

class Slot {
    #slot: [number, number];
    constructor( start: number, end: number ){
        this.#slot = [start, end];
    }
    get start(){
        return this.#slot[0];
    }
    get end(){
        return this.#slot[1];
    }
}

class Slots {
    #slots: Slot[];
    #availableSlots: Slot[];
    constructor(){
        this.#slots = [];
        this.#availableSlots = [];
    }
    get slots(){
        return this.#slots;
    }
    get size(){
        return this.#slots.length;
    }
    get availableSlots(){
        return this.#availableSlots;
    }
    add( slot: Slot ){
        if ( this.isAvailable(slot.start, slot.end) ){
            this.#slots.push(slot);
            this.#slots.sort( (a,b) => a.start - b.start );
            this.setAvailableSlots();
            return true;
        }
        return false;
    }
    isAvailable( start: number, end: number ){
        for ( let slot of this.#slots ){
            if ( slot.start < end && slot.end > start ){
                return false;
            }
        }
        return true;
    }
    listSlots(){
        for ( const slot of this.#slots ){
            console.log( slot.start, slot.end );
        }
    }
    deleteSlots(slot: Slot){
        for ( let i = 0; i < this.#slots.length; i++ ){
            if ( this.#slots[i].start === slot.start && this.#slots[i].end === slot.end ){
                this.#slots.splice(i, 1);
                return true;
            }
        }
        return false;
    }
    setAvailableSlots(){
        this.#availableSlots = [];
        if ( this.#slots.length === 0 ){
            const slot = new Slot(1, 24)
            this.#availableSlots.push(slot);
            return true;
        }
        let start = 1;
        for ( let slot of this.#slots ){
            if ( slot.start <= start ){
                start = slot.end;
                continue;
            }
            const end = slot.start;
            const newSlot = new Slot(start, end);
            this.#availableSlots.push(newSlot);
            start = slot.end;
        }
        if ( start < 24 ){
            const end = 24;
            const newSlot = new Slot(start, end);
            this.#availableSlots.push(newSlot);
        }
        return true;
    }
}

class MeetingRoom {
    #name: string;
    #capacity: number;
    #slots: Slots;
    constructor( name: string, capacity: number ){
        this.#name = name;
        this.#capacity = capacity;
        this.#slots = new Slots();
        this.#slots.setAvailableSlots();
    }
    get name(){
        return this.#name;
    }
    get capacity(){
        return this.#capacity;
    }
    get availalbeSlots(){
        return this.#slots.availableSlots;
    }
    get slots(){
        return this.#slots.slots;
    }
    isSlotAvialble(start: number, end: number){
        return this.#slots.isAvailable( start, end );
    }
    addSlot( slot: Slot ){
        return this.#slots.add(slot);
    }
    deleteSlot( slot: Slot ){
        return this.#slots.deleteSlots(slot);
    }
    setAvailableSlots(){
        this.#slots.setAvailableSlots();
    }
}

class Floor {
    #name: string;
    #meetingRooms: MeetingRoom[];
    constructor( name: string ){
        this.#name = name;
        this.#meetingRooms = [];
    }
    get name(){
        return this.#name;
    }
    get meetingRooms(){
        return this.#meetingRooms;
    }
    doesMeetingRoomExists(meetingRoomName: string){
        return this.meetingRooms.some( meeting => meeting.name === meetingRoomName )
    }
    addMeetingRoom(meetingRoom: MeetingRoom){
        if ( this.doesMeetingRoomExists(meetingRoom.name) ){
            return false;
        }
        this.#meetingRooms.push(meetingRoom);
        return true;
    }
}

class Building {
    #name: string;
    #floors: Floor[];
    constructor(name: string){
        this.#name = name;
        this.#floors = [];
    }
    get name(){
        return this.#name;
    }
    get totalFloors(){
        return this.#floors.length;
    }
    get allFloors(){
        return this.#floors;
    }
    doesFloorExist(floorName: string){
        return this.#floors.some(f => f.name === floorName);
    }
    addFloor(floor: Floor){
        if ( this.doesFloorExist(floor.name) ){
            return false;
        }
        this.#floors.push(floor);
        return true;
    }
}

class Scheduler {
    #buildings: Map<string, Building>;
    constructor(){
        this.#buildings = new Map();
    }
    doesBuildingExist(buildingName: string){
        if ( this.#buildings.has(buildingName) ){
            return true;
        }
        return false;
    }
    addBuilding(buildingName: string){
        if ( this.doesBuildingExist(buildingName) ){
            console.log(`building ${buildingName} already exists!`);
            return false;
        }
        const building = new Building(buildingName);
        this.#buildings.set( building.name, building );
        console.log(`building ${building.name} added`);
        return true;
    }
    addFloor( buildingName: string, floorName: string ){
        if ( !this.doesBuildingExist(buildingName) ){
            console.log(`building ${buildingName} does not exists!`);
            return false;
        } 
        const floor = new Floor(floorName);
        this.#buildings.get(buildingName)?.addFloor(floor);
        console.log(`floor ${floor.name} is added to building ${buildingName}`);
        return true;
    }
    addMeetingRoom( buildingName: string, floorName: string, meetingRoomName: string, capacity: number ){
        if ( !this.doesBuildingExist(buildingName) ){
            console.log(`building ${buildingName} does not exists!`);
            return false;
        }
        const building = this.#buildings?.get(buildingName);    
        if ( !building?.doesFloorExist(floorName) ){
            console.log(`floor ${floorName} in building ${buildingName} does not exists!`);
            return false;
        }
        const floor = building?.allFloors?.find( f => f.name === floorName );
        if ( floor?.doesMeetingRoomExists( meetingRoomName ) ){
            console.log(`floor ${floorName} in building ${buildingName} already has ${meetingRoomName} in it.`);
            return false;
        }
        const meetingRoom = new MeetingRoom(meetingRoomName, capacity);
        floor?.addMeetingRoom( meetingRoom );
        console.log(`meetingRoom ${meetingRoomName} is added to floor ${floorName} in building ${buildingName}`);
        return true;
    }
    listRooms ( buildingName: string, floorName: string ){
        if ( !this.doesBuildingExist(buildingName) ){
            console.log(`building ${buildingName} does not exists!`);
            return false;
        }
        const building = this.#buildings?.get(buildingName);    
        if ( !building?.doesFloorExist(floorName) ){
            console.log(`floor ${floorName} in building ${buildingName} does not exists!`);
            return false;
        }
        const floor = building?.allFloors?.find( f => f.name === floorName );
        const meetingRooms = floor?.meetingRooms || [];
        for ( const meetingRoom of meetingRooms ){
            console.log( meetingRoom.name )
        }
        return true;
    }
    listAllRooms(){
        console.log("There are follwoing meeting rooms: ")
        for ( const [ buildingName, building ] of this.#buildings ){
            console.log(buildingName);
            for ( const floor of building?.allFloors  ){
                console.log("   ", floor.name);
                for ( const meetingRoom of floor?.meetingRooms ){
                    console.log("       ", meetingRoom.name );
                }
            }
        }
    }

    bookSlot( buildingName: string, floorName: string, meetingRoom: string, slotStart: number, slotEnd: number ){
        if ( !this.doesBuildingExist(buildingName) ){
            console.log(`building ${buildingName} does not exists!`);
            return false;
        }
        const building = this.#buildings?.get(buildingName);    
        if ( !building?.doesFloorExist(floorName) ){
            console.log(`floor ${floorName} in building ${buildingName} does not exists!`);
            return false;
        }
        const floor = building?.allFloors?.find( f => f.name === floorName );
        if ( !floor?.doesMeetingRoomExists( meetingRoom ) ){
            console.log(`meeting room ${meetingRoom} on floor ${floorName} in building ${buildingName} does not exists!`);
            return false;
        }
        const meetingRoomToBook = floor?.meetingRooms?.find( m => m.name === meetingRoom );
        if ( !meetingRoomToBook?.isSlotAvialble( slotStart, slotEnd ) ){
            console.log(`slot ${slotStart} to ${slotEnd} in meeting room ${meetingRoom} on floor ${floorName} in building ${buildingName} is not available!`);
            return false;
        }
        const slot = new Slot(slotStart, slotEnd)
        meetingRoomToBook?.addSlot(slot);
        console.log(`slot slot ${slotStart} to ${slotEnd}  in meeting room ${meetingRoom} on floor ${floorName} in building ${buildingName} is booked successfully!`);
        return true;
    }
    cancelSlot( buildingName: string, floorName: string, meetingRoom: string, slotStart: number, slotEnd: number ){
        if ( !this.doesBuildingExist(buildingName) ){
            console.log(`building ${buildingName} does not exists!`);
            return false;
        }
        const building = this.#buildings?.get(buildingName);    
        if ( !building?.doesFloorExist(floorName) ){
            console.log(`floor ${floorName} in building ${buildingName} does not exists!`);
            return false;
        }
        const floor = building?.allFloors?.find( f => f.name === floorName );
        if ( !floor?.doesMeetingRoomExists( meetingRoom ) ){
            console.log(`meeting room ${meetingRoom} on floor ${floorName} in building ${buildingName} does not exists!`);
            return false;
        }
        const meetingRoomToBook = floor.meetingRooms?.find( m => m.name === meetingRoom );
        if ( meetingRoomToBook?.isSlotAvialble( slotStart, slotEnd ) ){
            console.log(`slot ${slotStart} to ${slotEnd} in meeting room ${meetingRoom} on floor ${floorName} in building ${buildingName} is not booked!`);
            return false;
        }
        const slot = new Slot(slotStart, slotEnd);
        meetingRoomToBook?.deleteSlot(slot);
        console.log(`slot ${slotStart} to ${slotEnd}  in meeting room ${meetingRoom} on floor ${floorName} in building ${buildingName} is cancelled successfully!`);
        return true;
    }
    listAllSlots( buildingName: string, floorName: string, meetingRoom: string ){
        if ( !this.doesBuildingExist(buildingName) ){
            console.log(`building ${buildingName} does not exists!`);
            return false;
        }
        const building = this.#buildings?.get(buildingName);    
        if ( !building?.doesFloorExist(floorName) ){
            console.log(`floor ${floorName} in building ${buildingName} does not exists!`);
            return false;
        }
        const floor = building?.allFloors?.find( f => f.name === floorName );
        if ( !floor?.doesMeetingRoomExists( meetingRoom ) ){
            console.log(`meeting room ${meetingRoom} on floor ${floorName} in building ${buildingName} does not exists!`);
            return false;
        }
        const meetingRoomToBook = floor?.meetingRooms?.find( m => m.name === meetingRoom );
        console.log(`booked slots for meeting room ${meetingRoom} on floor ${floorName} in building ${buildingName} are as follows:` )
        const availableSlots = meetingRoomToBook?.slots || [];
        for ( const slot of availableSlots ){
            console.log(slot.start, slot.end);
        }
    }
    isSlotAvailable( buildingName: string, floorName: string, meetingRoom: string, slotStart: number, slotEnd: number ){
        if ( !this.doesBuildingExist(buildingName) ){
            console.log(`building ${buildingName} does not exists!`);
            return false;
        }
        const building = this.#buildings?.get(buildingName);    
        if ( !building?.doesFloorExist(floorName) ){
            console.log(`floor ${floorName} in building ${buildingName} does not exists!`);
            return false;
        }
        const floor = building?.allFloors?.find( f => f.name === floorName );
        if ( !floor?.doesMeetingRoomExists( meetingRoom ) ){
            console.log(`meeting room ${meetingRoom} on floor ${floorName} in building ${buildingName} does not exists!`);
            return false;
        }
        const meetingRoomToBook = floor?.meetingRooms?.find( m => m.name === meetingRoom );
        if ( !meetingRoomToBook?.isSlotAvialble( slotStart, slotEnd ) ){
            console.log(`slot ${slotStart} to ${slotEnd} in meeting room ${meetingRoom} on floor ${floorName} in building ${buildingName} is not available!`);
            return false;
        }
        console.log(`slot ${slotStart} to ${slotEnd} in meeting room ${meetingRoom} on floor ${floorName} in building ${buildingName} is available!`);
        return true;
    }
}

const meetingScheduler = new Scheduler();

meetingScheduler.addBuilding("Springboard");
meetingScheduler.addFloor( "Springboard", "a" );
// floor a is added to building Springboard

meetingScheduler.addMeetingRoom( "Springboard", "a", "room1", 2);
// meetingRoom room1 is added to floor a in building Springboard

meetingScheduler.addBuilding("Springboard");
// building Springboard already exists!

meetingScheduler.addFloor( "Springboard", "a" );
// floor a is added to building Springboard

meetingScheduler.addMeetingRoom( "Springboard", "a", "room2", 3);
// meetingRoom room2 is added to floor a in building Springboard

meetingScheduler.listRooms("Springboard", "a");
// room1
// room2

meetingScheduler.addFloor( "Springboard", "b" );
// floor b is added to building Springboard

meetingScheduler.addMeetingRoom( "Springboard", "b", "room1", 2);
// meetingRoom room1 is added to floor b in building Springboard

meetingScheduler.addMeetingRoom( "Springboard", "a", "room1", 2);
// floor a in building Springboard already has room1 in it.

meetingScheduler.listAllRooms();
// There are follwoing meeting rooms:
// Springboard
//     a
//         room1
//         room2
//     b
//         room1


meetingScheduler.listAllSlots("Springboard", "a", "room1");
// booked slots for meeting room room1 on floor a in building Springboard are as follows:

meetingScheduler.isSlotAvailable( "Springboard", "a", "room1", 1, 2);
// slot 1 to 2 in meeting room room1 on floor a in building Springboard is available!

meetingScheduler.bookSlot( "Springboard", "a", "room1", 1, 2);
// slot slot 1 to 2  in meeting room room1 on floor a in building Springboard is booked successfully!

meetingScheduler.listAllSlots("Springboard", "a", "room1");
// booked slots for meeting room room1 on floor a in building Springboard are as follows:
// 1 2

meetingScheduler.bookSlot( "Springboard", "a", "room2", 1, 2);
// slot slot 1 to 2  in meeting room room2 on floor a in building Springboard is booked successfully!

meetingScheduler.listAllSlots("Springboard", "a", "room2");
// booked slots for meeting room room2 on floor a in building Springboard are as follows:
// 1 2

meetingScheduler.bookSlot( "Springboard", "a", "room1", 3, 6);
// slot slot 3 to 6  in meeting room room1 on floor a in building Springboard is booked successfully!

meetingScheduler.bookSlot( "Springboard", "a", "room1", 2, 5);
// slot 2 to 5 in meeting room room1 on floor a in building Springboard is not available!

meetingScheduler.isSlotAvailable( "Springboard", "a", "room1", 3, 7);
// slot 3 to 7 in meeting room room1 on floor a in building Springboard is not available!

meetingScheduler.isSlotAvailable( "Springboard", "a", "room1", 7, 9);
// slot 7 to 9 in meeting room room1 on floor a in building Springboard is available!

meetingScheduler.bookSlot( "Springboard", "a", "room1", 1, 2);
// slot 1 to 2 in meeting room room1 on floor a in building Springboard is not available!

meetingScheduler.bookSlot( "Springboard", "a", "room1", 1, 2);
// slot 1 to 2 in meeting room room1 on floor a in building Springboard is not available!

meetingScheduler.isSlotAvailable( "Springboard", "a", "room1", 1, 2);
// slot 1 to 2 in meeting room room1 on floor a in building Springboard is not available!

meetingScheduler.cancelSlot( "Springboard", "a", "room1", 1, 2);
// slot 1 to 2  in meeting room room1 on floor a in building Springboard is cancelled successfully!

meetingScheduler.cancelSlot( "Springboard", "a", "room1", 3, 7);
// slot 3 to 7  in meeting room room1 on floor a in building Springboard is cancelled successfully!

meetingScheduler.listAllSlots("Springboard", "a", "room1");
// booked slots for meeting room room1 on floor a in building Springboard are as follows:
// 3 6