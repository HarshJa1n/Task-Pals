export type UserType = 'user1' | 'user2';

export interface Task {
  id: string;
  title: string;
  description: string;
  assignedTo: UserType;
  completed: boolean;
  completedBy?: UserType | null;
  completedAt?: Date | null;
  startTime: Date | null;
  timeSpent: number;
  priority: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface User {
  id: UserType;
  name: string;
}

export interface TaskState {
  tasks: Task[];
  users: User[];
} 