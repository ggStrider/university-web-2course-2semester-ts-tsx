export interface Member {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: number;
  membershipType: 'basic' | 'standard' | 'premium';
  joinDate: string;
  status: 'active' | 'inactive' | 'suspended';
  trainerId?: number;
  image?: string;
}

export type MembershipType = Member['membershipType'];
export type MemberStatus = Member['status'];

