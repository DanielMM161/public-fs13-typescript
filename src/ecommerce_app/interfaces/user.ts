import { Entity } from "./common";

export interface User extends Entity {
    email: string,
    password: string
    name: string,
    role: string,
    avatar: string
}