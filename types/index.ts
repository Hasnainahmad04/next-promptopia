export interface Post {
  prompt: string;
  tag: string;
  id?: string;
}

export interface Prompt {
  _id: string;
  prompt: string;
  tag: string;
  creator: Creator;
}

export interface Creator {
  username: string;
  email: string;
  image: string;
  _id: string;
}
