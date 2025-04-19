import { Service, User, Order, Payment, ScrapRate, Job, Notification, DashboardStats } from '../types';

export const services: Service[] = [
  {
    id: '1',
    name: 'Scrap Collection',
    slug: 'scrap-collection',
    shortDescription: 'Efficient collection of all types of scrap materials',
    description: 'Our professional scrap collection service offers convenient and environmentally responsible disposal of your unwanted scrap materials. We collect a wide range of scrap items including paper, plastic, metals, and more. Our team ensures proper recycling and disposal of all materials collected.',
    imageUrl: './pexels-cottonbro-6591428%20scrapcollection.jpg',
    benefits: [
      'Convenient doorstep collection',
      'Competitive rates for your scrap',
      'Eco-friendly disposal methods',
      'Reduces landfill waste',
      'Contributes to circular economy'
    ],
    howItWorks: [
      'Schedule a pickup through our website or call center',
      'Our team arrives at your location on the scheduled date',
      'We weigh and categorize your scrap',
      'Receive payment based on current scrap rates',
      'Get a receipt for the transaction'
    ],
    featured: true
  },
  {
    id: '2',
    name: 'Waste Management',
    slug: 'waste-management',
    shortDescription: 'Comprehensive waste management solutions for homes and businesses',
    description: 'Our waste management service provides end-to-end solutions for all your waste disposal needs. We handle sorting, recycling, and responsible disposal of various types of waste. Our service is designed to minimize environmental impact while providing convenient waste removal options.',
    imageUrl: './pexels-digitalbuggu-167538%20waste%20manage.jpg',
    benefits: [
      'Regular scheduled pickups',
      'Reduces environmental impact',
      'Compliance with local regulations',
      'Customizable waste management plans',
      'Detailed waste audit reports'
    ],
    howItWorks: [
      'Contact us for a waste assessment',
      'Receive a customized waste management plan',
      'Schedule regular pickups based on your needs',
      'Our team collects and properly disposes of your waste',
      'Receive periodic reports on waste reduction'
    ],
    featured: true
  },
  {
    id: '3',
    name: 'E-Waste Recycling',
    slug: 'e-waste-recycling',
    shortDescription: 'Safe disposal and recycling of electronic waste',
    description: 'Our e-waste recycling service ensures that your electronic items are disposed of responsibly. We handle computers, phones, appliances, and other electronic equipment. Our process ensures data security and environmentally safe recycling of components.',
    imageUrl: './pexels-humanistagram-19037726e-waste.jpg',
    benefits: [
      'Secure data destruction',
      'Prevents toxic materials from entering landfills',
      'Recovery of valuable materials',
      'Certification of proper disposal',
      'Reduces need for raw material extraction'
    ],
    howItWorks: [
      'Book an e-waste collection',
      'Pack your electronic items for collection',
      'Our team picks up your e-waste',
      'We securely wipe all data storage devices',
      'Items are dismantled and recycled properly'
    ],
    featured: true
  },
  {
    id: '4',
    name: 'Car Scrap Service',
    slug: 'car-scrap-service',
    shortDescription: 'Professional car scrapping and recycling service',
    description: 'Our car scrap service offers hassle-free disposal of end-of-life vehicles. We handle all the paperwork and ensure that your vehicle is recycled properly. Our service includes free towing and competitive pricing for your old vehicle.',
    imageUrl: './pexels-umutart-29879066%20car.jpg',
    benefits: [
      'Free vehicle pickup and towing',
      'Competitive prices for your old vehicle',
      'Proper recycling of all vehicle components',
      'Complete documentation for deregistration',
      'Environmentally responsible disposal'
    ],
    howItWorks: [
      'Contact us with your vehicle details',
      'Receive a quote based on vehicle condition',
      'Schedule a convenient pickup time',
      'We handle all necessary paperwork',
      'Receive payment for your scrapped vehicle'
    ],
    featured: false
  },
  {
    id: '5',
    name: 'Biomedical Waste Management',
    slug: 'biomedical-waste-management',
    shortDescription: 'Specialized handling of medical and biohazard waste',
    description: 'Our biomedical waste management service ensures safe and compliant disposal of medical waste. We cater to hospitals, clinics, laboratories, and other healthcare facilities. Our team follows strict protocols for the handling and disposal of biohazardous materials.',
    imageUrl: './pexels-tomfisk-3174345%20biomedical.jpg',
    benefits: [
      'Compliance with healthcare waste regulations',
      'Specialized containers for different waste types',
      'Regular scheduled collections',
      'Complete documentation and certificates',
      'Reduces risk of contamination and infection'
    ],
    howItWorks: [
      'Initial assessment of your biomedical waste needs',
      'Setup of appropriate waste containers',
      'Regular scheduled pickups',
      'Proper treatment and disposal of collected waste',
      'Documentation for regulatory compliance'
    ],
    featured: false
  },
  {
    id: '6',
    name: 'After Event Cleanup',
    slug: 'after-event-cleanup',
    shortDescription: 'Quick and thorough cleanup service for events and functions',
    description: 'Our after event cleanup service provides comprehensive waste management solutions for events of all sizes. We handle everything from general waste to recyclables, ensuring your venue is left clean and waste is properly disposed of. Perfect for corporate events, weddings, festivals, and more.',
    imageUrl: './pexels-pixabay-433452%20event.jpg',
    benefits: [
      'Fast and efficient cleanup',
      'Sorting and recycling of event waste',
      'Reduces event carbon footprint',
      'On-demand service availability',
      'Custom solutions for different event types'
    ],
    howItWorks: [
      'Contact us with your event details',
      'Receive a customized cleanup plan',
      'We arrive after your event concludes',
      'Our team efficiently cleans and removes all waste',
      'Waste is sorted and disposed of responsibly'
    ],
    featured: false
  }
];

export const users: User[] = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@kabadiwala.com',
    role: 'admin',
    phone: '1234567890',
    address: '123 Admin St, Admin City',
    createdAt: '2023-01-01T00:00:00Z'
  },
  {
    id: '2',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'user',
    phone: '9876543210',
    address: '456 User Ave, User Town',
    createdAt: '2023-02-15T00:00:00Z'
  },
  {
    id: '3',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'user',
    phone: '5678901234',
    address: '789 Client Rd, Client City',
    createdAt: '2023-03-20T00:00:00Z'
  }
];

export const orders: Order[] = [
  {
    id: '1',
    userId: '2',
    userName: 'John Doe',
    serviceId: '1',
    serviceName: 'Scrap Collection',
    status: 'completed',
    amount: 450,
    date: '2023-05-15T10:30:00Z',
    address: '456 User Ave, User Town',
    phone: '9876543210',
    notes: 'Mostly paper and metal scrap'
  },
  {
    id: '2',
    userId: '3',
    userName: 'Jane Smith',
    serviceId: '3',
    serviceName: 'E-Waste Recycling',
    status: 'confirmed',
    amount: 200,
    date: '2023-06-20T14:00:00Z',
    address: '789 Client Rd, Client City',
    phone: '5678901234',
    notes: 'Old laptop and desktop computer'
  },
  {
    id: '3',
    userId: '2',
    userName: 'John Doe',
    serviceId: '2',
    serviceName: 'Waste Management',
    status: 'pending',
    amount: 350,
    date: '2023-06-25T09:00:00Z',
    address: '456 User Ave, User Town',
    phone: '9876543210'
  }
];

export const payments: Payment[] = [
  {
    id: '1',
    orderId: '1',
    userId: '2',
    userName: 'John Doe',
    amount: 450,
    status: 'completed',
    method: 'credit_card',
    date: '2023-05-15T10:45:00Z'
  },
  {
    id: '2',
    orderId: '2',
    userId: '3',
    userName: 'Jane Smith',
    amount: 200,
    status: 'pending',
    method: 'upi',
    date: '2023-06-20T14:15:00Z'
  }
];

export const scrapRates: ScrapRate[] = [
  {
    id: '1',
    name: 'Newspaper',
    rate: 12,
    unit: 'kg',
    updatedAt: '2025-06-01T00:00:00Z'
  },
  {
    id: '2',
    name: 'Aluminum',
    rate: 95,
    unit: 'kg',
    updatedAt: '2025-06-01T00:00:00Z'
  },
  {
    id: '3',
    name: 'Copper',
    rate: 450,
    unit: 'kg',
    updatedAt: '2025-06-01T00:00:00Z'
  },
  {
    id: '4',
    name: 'Iron',
    rate: 25,
    unit: 'kg',
    updatedAt: '2025-06-01T00:00:00Z'
  },
  {
    id: '5',
    name: 'Plastic',
    rate: 18,
    unit: 'kg',
    updatedAt: '2025-06-01T00:00:00Z'
  },
  {
    id: '6',
    name: 'E-waste',
    rate: 30,
    unit: 'kg',
    updatedAt: '2025-06-01T00:00:00Z'
  },
  {
    id: '7',
    name: 'Steel',
    rate: 40,
    unit: 'kg',
    updatedAt: '2025-06-01T00:00:00Z'
  },
  {
    id: '8',
    name: 'Brass',
    rate: 350,
    unit: 'kg',
    updatedAt: '2025-06-01T00:00:00Z'
  },
  {
    id: '9',
    name: 'Lead',
    rate: 60,
    unit: 'kg',
    updatedAt: '2025-06-01T00:00:00Z'
  },
  {
    id: '10',
    name: 'Zinc',
    rate: 70,
    unit: 'kg',
    updatedAt: '2025-06-01T00:00:00Z'
  }
];

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Waste Management Specialist',
    description: 'We are looking for a Waste Management Specialist to join our growing team. The ideal candidate will have experience in waste management operations and environmental compliance.',
    requirements: [
      'Bachelor\'s degree in Environmental Science or related field',
      'Minimum 2 years of experience in waste management',
      'Knowledge of waste management regulations',
      'Strong communication and organizational skills',
      'Valid driver\'s license'
    ],
    location: 'Mumbai, Maharashtra',
    type: 'full-time',
    postedAt: '2023-05-10T00:00:00Z'
  },
  {
    id: '2',
    title: 'Collection Driver',
    description: 'We are hiring Collection Drivers responsible for picking up scrap materials from various locations. The role involves driving company vehicles and assisting in loading and unloading scrap materials.',
    requirements: [
      'High school diploma or equivalent',
      'Valid commercial driver\'s license',
      'Clean driving record',
      'Physical ability to lift up to 50 lbs',
      'Good customer service skills'
    ],
    location: 'Delhi, NCR',
    type: 'full-time',
    postedAt: '2023-05-15T00:00:00Z'
  },
  {
    id: '3',
    title: 'Customer Service Representative',
    description: 'We are seeking a Customer Service Representative to handle customer inquiries, schedule pickups, and provide information about our services. The ideal candidate will have excellent communication skills and a customer-focused attitude.',
    requirements: [
      'High school diploma or equivalent',
      'Previous customer service experience',
      'Excellent verbal and written communication skills',
      'Proficiency in MS Office and CRM software',
      'Ability to work in a fast-paced environment'
    ],
    location: 'Bengaluru, Karnataka',
    type: 'part-time',
    postedAt: '2023-05-20T00:00:00Z'
  }
];

export const notifications: Notification[] = [
  {
    id: '1',
    userId: '1',
    title: 'New Order Received',
    message: 'A new order for Scrap Collection has been placed by Jane Smith.',
    read: false,
    createdAt: '2023-06-22T09:30:00Z'
  },
  {
    id: '2',
    userId: '1',
    title: 'Payment Completed',
    message: 'Payment for order #1 has been successfully processed.',
    read: true,
    createdAt: '2023-06-21T14:45:00Z'
  },
  {
    id: '3',
    userId: '2',
    title: 'Order Confirmation',
    message: 'Your order for Scrap Collection has been confirmed. Our team will arrive on the scheduled date.',
    read: false,
    createdAt: '2023-06-21T15:00:00Z'
  }
];

export const dashboardStats: DashboardStats = {
  totalOrders: 152,
  pendingOrders: 28,
  completedOrders: 124,
  totalRevenue: 75450,
  recentOrders: orders,
  userCount: 85,
  serviceStats: [
    { name: 'Scrap Collection', count: 68 },
    { name: 'Waste Management', count: 34 },
    { name: 'E-Waste Recycling', count: 27 },
    { name: 'Car Scrap Service', count: 15 },
    { name: 'Biomedical Waste Management', count: 8 }
  ]
};

// Helper functions to simulate a database
export const getService = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

export const getServicesById = (ids: string[]): Service[] => {
  return services.filter(service => ids.includes(service.id));
};

export const getFeaturedServices = (): Service[] => {
  return services.filter(service => service.featured);
};

export const getUser = (id: string): User | undefined => {
  return users.find(user => user.id === id);
};

export const getUserOrders = (userId: string): Order[] => {
  return orders.filter(order => order.userId === userId);
};

export const getUserPayments = (userId: string): Payment[] => {
  return payments.filter(payment => payment.userId === userId);
};

export const getUserNotifications = (userId: string): Notification[] => {
  return notifications.filter(notification => notification.userId === userId);
};
