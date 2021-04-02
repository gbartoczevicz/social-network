export interface ICreatePostDTO {
  title: string;
  content?: string;
  published: boolean;
  authorId: number;
}
