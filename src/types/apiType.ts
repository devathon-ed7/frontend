export interface Login {
  id: number;
  username: string;
  password: string;
  token: string;
}

export interface ApiConfig {
  baseUrl: string;
}
