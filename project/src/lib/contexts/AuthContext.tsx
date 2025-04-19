import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../../types';
import { users } from '../../data/mockData';

// Define the shape of our Auth context
interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  error: string | null;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  login: async () => {},
  signup: async () => {},
  logout: () => {},
  error: null
});

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

// Provider component that wraps the app and makes auth object available
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Check if user is already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Mock login function
  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Special case for admin login with "admin" / "admin"
      if (email === 'admin' && password === 'admin') {
        const adminUser: User = {
          id: '0',
          name: 'Admin',
          email: 'admin',
          role: 'admin',
          createdAt: new Date().toISOString(),
        };
        setUser(adminUser);
        localStorage.setItem('currentUser', JSON.stringify(adminUser));
      } else {
        // In a real app, this would be an API call to validate credentials
        const foundUser = users.find(u => u.email === email);
        
        // Simple validation for demo purposes
        // In production, you'd verify the password properly
        if (foundUser && password === 'password123') {
          setUser(foundUser);
          localStorage.setItem('currentUser', JSON.stringify(foundUser));
        } else {
          throw new Error('Invalid email or password');
        }
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  // Mock signup function
  const signup = async (name: string, email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Check if user already exists
      const existingUser = users.find(u => u.email === email);
      if (existingUser) {
        throw new Error('User with this email already exists');
      }

      // Create new user object
      const newUser: User = {
        id: (users.length + 1).toString(),
        name,
        email,
        role: 'user',
        createdAt: new Date().toISOString(),
      };

      // Add new user to users array (mock database)
      users.push(newUser);

      // Automatically log in the new user
      setUser(newUser);
      localStorage.setItem('currentUser', JSON.stringify(newUser));
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  // Provide the authentication context
  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};
