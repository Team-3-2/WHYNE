export interface User {
  id: number;
  nickname: string;
  teamId: string;
  createdAt: string;
  updatedAt: string;
  image: string;
  email?: string;
}

export interface LoginData {
  user: User;
  accessToken: string;
  refreshToken: string;
}
