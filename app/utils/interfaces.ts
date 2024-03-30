export interface BlogType {
    title: string;
    id: number;
}

export interface Author {
    name: string;
    profession: string;
    id: number;
}
export interface Blog {
    title: string;
    type: BlogType[];
    author: Author;
    createdAt: Date;
    description: string;
    id: number,
    image: string;
}