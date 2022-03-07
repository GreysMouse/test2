export interface IUserBody {
  username: string;
  email: string;
  registration_date: string;
  rating: number;
}

export interface IUser extends IUserBody {
  id: string;
}
