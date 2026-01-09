'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

// Enhanced User Interface
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'tourist' | 'guide' | 'admin';
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>; 
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Initialize from LocalStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('benin_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error("Failed to parse user from storage", e);
        localStorage.removeItem('benin_user');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    // Simulation: accept any login for MVP
    await new Promise(resolve => setTimeout(resolve, 800)); // Fake network delay

    const fakeUser: User = {
      id: 'tourist-' + Date.now(),
      name: email.split('@')[0], // Derive name from email if not provided
      email: email,
      role: 'tourist',
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}` // Auto-generated avatar
    };

    setUser(fakeUser);
    localStorage.setItem('benin_user', JSON.stringify(fakeUser));
    setLoading(false);
  };

  const signup = async (name: string, email: string, password: string) => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));

    const fakeUser: User = {
      id: 'tourist-' + Date.now(),
      name: name,
      email: email,
      role: 'tourist',
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`
    };

    setUser(fakeUser);
    localStorage.setItem('benin_user', JSON.stringify(fakeUser));
    setLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('benin_user');
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      login,
      signup,
      logout,
      loading
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
