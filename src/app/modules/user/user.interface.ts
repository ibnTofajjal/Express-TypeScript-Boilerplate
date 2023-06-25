export interface IUser {
  name: {
    firstName: string;
    lastName: string;
  };
  username: string;
  email: string;
  password: string;
  role: string;
  gender: "male" | "female";
  dateOfBirth?: string;
  contact: number;
}
