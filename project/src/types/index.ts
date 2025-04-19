export interface Service {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  imageUrl: string;
  benefits: string[];
  howItWorks: string[];
  featured?: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  phone?: string;
  address?: string;
  createdAt: string;
}

export interface Order {
  id: string;
  userId: string;
  userName: string;
  serviceId: string;
  serviceName: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  amount: number;
  date: string;
  address: string;
  phone: string;
  notes?: string;
}

export interface Payment {
  id: string;
  orderId: string;
  userId: string;
  userName: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  method: 'credit_card' | 'debit_card' | 'upi' | 'net_banking' | 'cash';
  date: string;
}

export interface ScrapRate {
  id: string;
  name: string;
  rate: number;
  unit: 'kg' | 'piece' | 'ton';
  updatedAt: string;
}

export interface Job {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  location: string;
  type: 'full-time' | 'part-time' | 'contract';
  postedAt: string;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
}

export interface DashboardStats {
  totalOrders: number;
  pendingOrders: number;
  completedOrders: number;
  totalRevenue: number;
  recentOrders: Order[];
  userCount: number;
  serviceStats: {
    name: string;
    count: number;
  }[];
}