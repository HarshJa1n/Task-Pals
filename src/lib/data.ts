import { promises as fs } from 'fs';
import path from 'path';
import { Task, TaskState } from '@/types';

const dataFilePath = path.join(process.cwd(), 'src/lib/data.json');

export async function getData(): Promise<TaskState> {
  const data = await fs.readFile(dataFilePath, 'utf8');
  return JSON.parse(data);
}

export async function saveData(data: TaskState): Promise<void> {
  await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2));
}

export async function updateTaskStatus(taskId: string, userId: 'user1' | 'user2'): Promise<Task | null> {
  const data = await getData();
  const taskIndex = data.tasks.findIndex(task => task.id === taskId);
  
  if (taskIndex === -1) return null;
  
  const task = data.tasks[taskIndex];
  if (task.assignedTo !== userId) return null;
  
  task.completed = true;
  task.completedBy = userId;
  task.completedAt = new Date().toISOString();
  
  data.tasks[taskIndex] = task;
  await saveData(data);
  
  return task;
} 