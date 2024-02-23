export interface Post {
    id?: number;
    title: string;
    content: string;
    likes: number;
    createdAt: Date;
    updatedAt?: Date | null;
    deletedAt?: Date | null;
    userId: string; // Reference to the ID of the user who created this post
}