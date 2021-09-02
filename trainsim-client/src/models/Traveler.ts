export default class Traveler {
    private _firstName: string;
    private _lastName: string;
    private _phone: string;
    private _email: string;

    constructor(firstName: string, lastName: string, phone: string, email: string) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._phone = phone;
        this._email = email;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(fistname) {
        this._firstName = fistname;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(lastName) {
       this._lastName = lastName
    }

    public get phone(): string {
        return this._phone;
    }

    public set phone(phone) {
        this._phone = phone
     }

    public get email(): string {
        return this._email;
    }

    public set email(email) {
        this._email = email
     }
    
}