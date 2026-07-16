export interface Service {
  id: string;
  title: string;
  description: string;
  detailedBenefits: string[];
  iconName: string; // references lucide icons
  imageUrl: string;
  basePrice: number;
}

export interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  serviceId: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  notes: string;
  priceEstimate: number;
  pestUrgency: 'low' | 'medium' | 'high' | 'emergency';
  createdAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  review: string;
  rating: number;
  imageUrl: string;
  verified: boolean;
  date: string;
}

export interface Industry {
  id: string;
  name: string;
  iconName: string;
  description: string;
  imageUrl: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Step {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'safety' | 'pricing' | 'warranties' | 'preparation' | 'general';
}
