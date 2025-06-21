import { User, LoginCredentials } from "../types/auth";

const DEMO_USERS: User[] = [
  {
    id: "1",
    name: "Admin User",
    role: "admin",
    avatar: "👑",
    username: "admin",
  },
  {
    id: "2",
    name: "Seller User",
    role: "seller",
    avatar: "🏪",
    username: "seller",
  },
  {
    id: "3",
    name: "Customer User",
    role: "customer",
    avatar: "👤",
    username: "admin",
  },
];

export class AuthService {
  async login(credentials: LoginCredentials): Promise<User | null> {
    //Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    const user = DEMO_USERS.find((u) => u.username === credentials.username);
    if (user && credentials.password === "demo") {
      localStorage.setItem("messaging_user", JSON.stringify(user));
      return user;
    }

    return null;
  }

  getCurrentUser(): User | null {
    try {
        const userData = localStorage.getItem('message_user');
        return userData ? JSON.parse(userData) : null;
    } catch {
        return null;
    }
  }

  logout(): void {
    localStorage.removeItem('messaging_user');
  }

  isAuthenticated(): boolean {
    return this.getCurrentUser() !== null;
  }
}

export const authService = new AuthService();
