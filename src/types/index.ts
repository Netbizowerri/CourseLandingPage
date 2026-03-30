export interface Enrolment {
  id?: string;
  fullName: string;
  email: string;
  phone: string;
  amountTransferred: number;
  status: 'pending' | 'confirmed' | 'rejected';
  adminNotes?: string;
  courseEmailSent?: boolean;
  submittedAt: string;
}

export interface AppSettings {
  confirmedCount: number;
  totalLimit: number;
  promoOpen: boolean;
  courseLink: string;
  bankName: string;
  accountName: string;
  accountNumber: string;
  adminEmail: string;
}
