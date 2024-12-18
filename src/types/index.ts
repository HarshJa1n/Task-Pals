export interface Task {
  id: string;
  title: string;
  description: string;
  assignedTo: 'user1' | 'user2';
  completed: boolean;
  completedBy?: 'user1' | 'user2';
  completedAt?: string;
  startTime: string | null;
  timeSpent: number;
}

export interface User {
  id: 'user1' | 'user2';
  name: string;
}

export interface TaskState {
  tasks: Task[];
  users: User[];
} 