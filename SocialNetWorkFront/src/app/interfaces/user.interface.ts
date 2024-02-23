import { Post } from "./post.interface";

export interface User {
    id?: number;
    full_name: string;
    age: number;
    email: string;
    password: string;
    posts?: Post[]; // Array of Post objects associated with this user
    createdAt?: Date;
    updatedAt?: Date | null;
    deletedAt?: Date | null;
}