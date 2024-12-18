import { promises as fs } from 'fs';
import path from 'path';
import { Task, TaskState, User } from '@/types';

const dataFilePath = path.join(process.cwd(), 'src/lib/data.json');

export async function getData(): Promise<TaskState> {
  const data = await fs.readFile(dataFilePath, 'utf8');
  return JSON.parse(data);
}

export async function saveData(data: TaskState): Promise<void> {
  await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2));
}

export async function importTasks(tasksJson: string): Promise<Task[]> {
  try {
    let newTasks;
    try {
      newTasks = JSON.parse(tasksJson);
    } catch (e) {
      throw new Error('Invalid JSON format');
    }

    if (!Array.isArray(newTasks)) {
      throw new Error('Tasks must be an array');
    }

    const isValidTask = (task: any): task is Task => {
      return typeof task === 'object' &&
        typeof task.title === 'string' &&
        typeof task.description === 'string' &&
        (task.assignedTo === 'user1' || task.assignedTo === 'user2');
    };

    if (!newTasks.every(isValidTask)) {
      throw new Error('One or more tasks have invalid structure');
    }

    const data = await getData();
    const processedTasks = newTasks.map(task => ({
      ...task,
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      completed: false,
      startTime: null,
      timeSpent: 0
    }));

    data.tasks = [...data.tasks, ...processedTasks];
    await saveData(data);
    
    return processedTasks;
  } catch (error) {
    throw new Error('Failed to import tasks: ' + (error as Error).message);
  }
}

export async function transferTask(taskId: string, fromUserId: 'user1' | 'user2', toUserId: 'user1' | 'user2'): Promise<Task | null> {
  const data = await getData();
  const taskIndex = data.tasks.findIndex(task => task.id === taskId);
  
  if (taskIndex === -1) return null;
  
  const task = data.tasks[taskIndex];
  if (task.assignedTo !== fromUserId) return null;
  
  task.assignedTo = toUserId;
  task.startTime = null; // Reset timer when transferring
  
  data.tasks[taskIndex] = task;
  await saveData(data);
  
  return task;
}

export async function updateUserName(userId: 'user1' | 'user2', name: string): Promise<User> {
  const data = await getData();
  const userIndex = data.users.findIndex(user => user.id === userId);
  
  if (userIndex === -1) throw new Error('User not found');
  
  data.users[userIndex].name = name;
  await saveData(data);
  
  return data.users[userIndex];
}

export async function createTask(title: string, description: string, userId: 'user1' | 'user2'): Promise<Task> {
  const data = await getData();
  const newTask: Task = {
    id: Date.now().toString(),
    title,
    description,
    assignedTo: userId,
    completed: false,
    startTime: null,
    timeSpent: 0
  };
  
  data.tasks.push(newTask);
  await saveData(data);
  
  return newTask;
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
  
  // Calculate time spent if task was started
  if (task.startTime) {
    const endTime = new Date();
    const startTime = new Date(task.startTime);
    task.timeSpent = (task.timeSpent || 0) + (endTime.getTime() - startTime.getTime());
    task.startTime = null;
  }
  
  data.tasks[taskIndex] = task;
  await saveData(data);
  
  return task;
}

export async function undoTaskCompletion(taskId: string, userId: 'user1' | 'user2'): Promise<Task | null> {
  const data = await getData();
  const taskIndex = data.tasks.findIndex(task => task.id === taskId);
  
  if (taskIndex === -1) return null;
  
  const task = data.tasks[taskIndex];
  if (task.assignedTo !== userId) return null;
  
  task.completed = false;
  task.completedBy = undefined;
  task.completedAt = undefined;
  task.startTime = null;
  
  data.tasks[taskIndex] = task;
  await saveData(data);
  
  return task;
}

export async function deleteTask(taskId: string, userId: 'user1' | 'user2'): Promise<boolean> {
  const data = await getData();
  const taskIndex = data.tasks.findIndex(task => task.id === taskId);
  
  if (taskIndex === -1) return false;
  
  const task = data.tasks[taskIndex];
  if (task.assignedTo !== userId) return false;
  
  data.tasks.splice(taskIndex, 1);
  await saveData(data);
  
  return true;
}

export async function updateTask(
  taskId: string,
  userId: 'user1' | 'user2',
  updates: { title?: string; description?: string }
): Promise<Task | null> {
  const data = await getData();
  const taskIndex = data.tasks.findIndex(task => task.id === taskId);
  
  if (taskIndex === -1) return null;
  
  const task = data.tasks[taskIndex];
  if (task.assignedTo !== userId) return null;
  
  if (updates.title) task.title = updates.title;
  if (updates.description) task.description = updates.description;
  
  data.tasks[taskIndex] = task;
  await saveData(data);
  
  return task;
}

export async function startTask(taskId: string, userId: 'user1' | 'user2'): Promise<Task | null> {
  const data = await getData();
  const taskIndex = data.tasks.findIndex(task => task.id === taskId);
  
  if (taskIndex === -1) return null;
  
  const task = data.tasks[taskIndex];
  if (task.assignedTo !== userId || task.completed) return null;
  
  task.startTime = new Date().toISOString();
  
  data.tasks[taskIndex] = task;
  await saveData(data);
  
  return task;
}

export async function pauseTask(taskId: string, userId: 'user1' | 'user2'): Promise<Task | null> {
  const data = await getData();
  const taskIndex = data.tasks.findIndex(task => task.id === taskId);
  
  if (taskIndex === -1) return null;
  
  const task = data.tasks[taskIndex];
  if (task.assignedTo !== userId || task.completed || !task.startTime) return null;
  
  const endTime = new Date();
  const startTime = new Date(task.startTime);
  task.timeSpent = (task.timeSpent || 0) + (endTime.getTime() - startTime.getTime());
  task.startTime = null;
  
  data.tasks[taskIndex] = task;
  await saveData(data);
  
  return task;
} 