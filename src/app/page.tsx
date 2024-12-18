'use client';

import { useEffect, useState } from 'react';
import TaskCard from '@/components/TaskCard';
import { Task, User } from '@/types';

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentUser, setCurrentUser] = useState<'user1' | 'user2'>('user1');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('/api/tasks');
      const data = await response.json();
      setTasks(data.tasks);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleComplete = async (taskId: string) => {
    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: currentUser }),
      });

      if (response.ok) {
        await fetchTasks();
      }
    } catch (error) {
      console.error('Error completing task:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl text-gray-600">Loading tasks...</div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Task Competition</h1>
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">Current User:</span>
          <select
            value={currentUser}
            onChange={(e) => setCurrentUser(e.target.value as 'user1' | 'user2')}
            className="border border-gray-300 rounded px-3 py-2"
          >
            <option value="user1">User One</option>
            <option value="user2">User Two</option>
          </select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Your Tasks</h2>
          {tasks
            .filter((task) => task.assignedTo === currentUser)
            .map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                currentUser={currentUser}
                onComplete={handleComplete}
              />
            ))}
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Other User's Tasks</h2>
          {tasks
            .filter((task) => task.assignedTo !== currentUser)
            .map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                currentUser={currentUser}
                onComplete={handleComplete}
              />
            ))}
        </div>
      </div>
    </div>
  );
} 