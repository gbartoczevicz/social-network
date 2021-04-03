export interface IUpdateProfileDTO {
  id: number;
  bio?: string;
  birthday?: Date;
  userId: number;
}

export type IIncomingProfileToUpdateDTO = Omit<IUpdateProfileDTO, 'id'>;
