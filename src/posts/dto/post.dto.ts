export class CreatePostDto {
    title: string;
    body: string;
    author: string;
}

export class UpdatePostDto {
    title?: string;
    body?: string;
    author?: string;
}