export interface IUpdatePostDTO {
  id: number;
  title: string;
  content?: string;
  published: boolean;
  authorId: number;
}
