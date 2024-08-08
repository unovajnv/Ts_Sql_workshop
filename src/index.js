export class Hotel {
    private id: number;
    private Hotelname: string;
    private HotelLocation: string;
    private Contact: string;
    private RoomsAvailable: number;

    constructor(id: number, hotelname: string, hotelLocation: string, contact: string, roomsAvailable: number) {
        this.id = id;
        this.Hotelname = hotelname;
        this.HotelLocation = hotelLocation;
        this.Contact = contact;
        this.RoomsAvailable = roomsAvailable;
    }   

    getID() {
        return this.id;
    }
    getHotelname() {
        return this.Hotelname;
    }
    getHotelLocation() {
        return this.HotelLocation;
    }
    getContact() {
        return this.Contact;
    }
    getRoomsAvailable() {
        return this.RoomsAvailable;
    }
    setRoomsAvailable(newRoomsAvailable: number) {
        this.RoomsAvailable = newRoomsAvailable;
    }
};