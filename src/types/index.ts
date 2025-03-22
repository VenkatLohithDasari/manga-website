// Basic interfaces for our manga website

export interface IManga {
    id: string;
    title: string;
    description: string;
    coverImage: string;
    author: string;
    genres: string[];
    status: 'ongoing' | 'completed' | 'hiatus';
    createdAt: Date;
    updatedAt: Date;
}

export interface IChapter {
    id: string;
    mangaId: string;
    chapterNumber: number;
    title: string;
    pages: string[];
    createdAt: Date;
    updatedAt: Date;
}

export interface IUser {
    id: string;
    username: string;
    email: string;
    bookmarks: string[]; // Array of manga IDs
    readingHistory: Array<{
        mangaId: string;
        chapterId: string;
        lastReadPage: number;
        lastReadAt: Date;
    }>;
    createdAt: Date;
    updatedAt: Date;
}
