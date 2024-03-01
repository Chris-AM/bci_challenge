export interface ClientModel {
    users: User[];
    total: number;
    skip:  number;
    limit: number;
}

export interface User {
    id:         number;
    firstName:  string;
    lastName:   string;
    maidenName: string;
    age:        number;
    gender:     Gender;
    email:      string;
    phone:      string;
    birthDate:  string;
    image:      string;
    height:     number;
    weight:     number;
    address:    Address;
    bank:       Bank;
    crypto:     Crypto;
}

export interface Address {
    address:     string;
    city?:       string;
    postalCode:  string;
    state:       string;
}

export interface Bank {
    cardExpire: string;
    cardNumber: string;
    cardType:   string;
    currency:   string;
    iban:       string;
}


export interface Crypto {
    coin:    Coin;
    wallet:  Wallet;
}

export enum Coin {
    Bitcoin = "Bitcoin",
}

export enum Wallet {
    The0Xb9Fc1004Bfe7702De522516Cf34A5Da41C4Ef2B5 = "0xb9fc1004bfe7702de522516cf34a5da41c4ef2b5",
    The0Xb9Fc2Fe63B2A6C003F1C324C3Bfa53259162181A = "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
    The0Xb9Fc4B4B855Bc44Eb30D5E36Fd18F491F44A15B7 = "0xb9fc4b4b855bc44eb30d5e36fd18f491f44a15b7",
    The0Xb9Fe6979A82Fb43Fdd9Ba9F446846Dc4Dfca3Deb = "0xb9fe6979a82fb43fdd9ba9f446846dc4dfca3deb",
}


export enum Gender {
    Female = "female",
    Male = "male",
}


