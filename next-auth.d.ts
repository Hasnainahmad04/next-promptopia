declare global {
  interface User {
    id: string;
    email: string;
    username: string;
    image: string;
  }

  module "next-auth" {
    interface Session {
      user: User;
    }
  }
}
