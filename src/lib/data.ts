import { Task, User } from '@/types';
import { prisma } from './prisma';

export async function getData(): Promise<{ tasks: Task[]; users: User[] }> {
  const [tasks, users] = await Promise.all([
    prisma.task.findMany(),
    prisma.user.findMany(),
  ]);
  return { tasks, users };
}

export async function createTask(title: string, description: string, userId: 'user1' | 'user2'): Promise<Task> {
  return prisma.task.create({
    data: {
      title,
      description,
      assignedTo: userId,
    },
  });
}

export async function updateTaskStatus(taskId: string, userId: 'user1' | 'user2'): Promise<Task | null> {
  const task = await prisma.task.findFirst({
    where: { id: taskId, assignedTo: userId },
  });

  if (!task) return null;

  return prisma.task.update({
    where: { id: taskId },
    data: {
      completed: true,
      completedBy: userId,
      completedAt: new Date(),
      startTime: null,
    },
  });
}

export async function undoTaskCompletion(taskId: string, userId: 'user1' | 'user2'): Promise<Task | null> {
  const task = await prisma.task.findFirst({
    where: { id: taskId, assignedTo: userId },
  });

  if (!task) return null;

  return prisma.task.update({
    where: { id: taskId },
    data: {
      completed: false,
      completedBy: null,
      completedAt: null,
      startTime: null,
    },
  });
}

export async function deleteTask(taskId: string, userId: 'user1' | 'user2'): Promise<boolean> {
  const task = await prisma.task.findFirst({
    where: { id: taskId, assignedTo: userId },
  });

  if (!task) return false;

  await prisma.task.delete({
    where: { id: taskId },
  });

  return true;
}

export async function updateTask(
  taskId: string,
  userId: 'user1' | 'user2',
  updates: { title?: string; description?: string }
): Promise<Task | null> {
  const task = await prisma.task.findFirst({
    where: { id: taskId, assignedTo: userId },
  });

  if (!task) return null;

  return prisma.task.update({
    where: { id: taskId },
    data: updates,
  });
}

export async function startTask(taskId: string, userId: 'user1' | 'user2'): Promise<Task | null> {
  const task = await prisma.task.findFirst({
    where: { id: taskId, assignedTo: userId, completed: false },
  });

  if (!task) return null;

  return prisma.task.update({
    where: { id: taskId },
    data: {
      startTime: new Date(),
    },
  });
}

export async function pauseTask(taskId: string, userId: 'user1' | 'user2'): Promise<Task | null> {
  const task = await prisma.task.findFirst({
    where: { id: taskId, assignedTo: userId, completed: false },
  });

  if (!task || !task.startTime) return null;

  const endTime = new Date();
  const startTime = new Date(task.startTime);
  const additionalTimeSpent = endTime.getTime() - startTime.getTime();

  return prisma.task.update({
    where: { id: taskId },
    data: {
      startTime: null,
      timeSpent: task.timeSpent + additionalTimeSpent,
    },
  });
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

    const processedTasks = await prisma.$transaction(
      newTasks.map(task => 
        prisma.task.create({
          data: {
            title: task.title,
            description: task.description,
            assignedTo: task.assignedTo,
            completed: false,
            timeSpent: 0,
          },
        })
      )
    );

    return processedTasks;
  } catch (error) {
    throw new Error('Failed to import tasks: ' + (error as Error).message);
  }
}

export async function updateUserName(userId: 'user1' | 'user2', name: string): Promise<User> {
  return prisma.user.update({
    where: { id: userId },
    data: { name },
  });
}

export async function transferTask(taskId: string, fromUserId: 'user1' | 'user2', toUserId: 'user1' | 'user2'): Promise<Task | null> {
  const task = await prisma.task.findFirst({
    where: { id: taskId, assignedTo: fromUserId },
  });

  if (!task) return null;

  return prisma.task.update({
    where: { id: taskId },
    data: {
      assignedTo: toUserId,
      startTime: null, // Reset timer when transferring
    },
  });
} 