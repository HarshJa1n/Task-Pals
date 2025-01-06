'use client';

import { useEffect, useState, useCallback } from 'react';
import TaskCard from '@/components/TaskCard';
import ProgressBar from '@/components/ProgressBar';
import AddTaskForm from '@/components/AddTaskForm';
import TaskImportExport from '@/components/TaskImportExport';
import UserSettingsModal from '@/components/UserSettingsModal';
import { Task, User } from '@/types';

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState<'user1' | 'user2'>('user1');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch('/api/tasks');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();

      // Ensure data.tasks is an array
      const tasksArray = Array.isArray(data.tasks) ? data.tasks : [];
      const usersArray = Array.isArray(data.users) ? data.users : [];

      // Sort tasks based on last added first and move completed tasks to the end
      const sortedTasks = [...tasksArray].sort((a: Task, b: Task) => {
        if (a.completed !== b.completed) {
          return a.completed ? 1 : -1;
        }
        return new Date(b.id).getTime() - new Date(a.id).getTime();
      });

      // Only update state if data has changed
      if (JSON.stringify(sortedTasks) !== JSON.stringify(tasks) ||
          JSON.stringify(usersArray) !== JSON.stringify(users)) {
        setTasks(sortedTasks);
        setUsers(usersArray);
      }
      setError(null);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to load tasks. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, [tasks, users]);

  useEffect(() => {
    let mounted = true;
    let pollInterval: NodeJS.Timeout;

    const initData = async () => {
      if (!mounted) return;
      await fetchData();
      
      // Start polling only after initial fetch
      if (mounted) {
        pollInterval = setInterval(fetchData, 3000);
      }
    };

    initData();

    return () => {
      mounted = false;
      if (pollInterval) {
        clearInterval(pollInterval);
      }
    };
  }, [fetchData]);

  const handleAddTask = async (title: string, description: string) => {
    try {
      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description, userId: currentUser }),
      });

      if (response.ok) {
        await fetchData();
      }
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl text-gray-600">Loading tasks...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl text-red-500">{error}</div>
      </div>
    );
  }

  const currentUserTasks = tasks.filter(task => task.assignedTo === currentUser);
  const otherUserTasks = tasks.filter(task => task.assignedTo !== currentUser);
  const currentUserCompleted = currentUserTasks.filter(task => task.completed).length;
  const otherUserCompleted = otherUserTasks.filter(task => task.completed).length;
  const currentUserName = users.find(u => u.id === currentUser)?.name || 'Unknown User';

  return (
    <>
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <span role="img" aria-label="TaskPals logo" className="text-4xl">
            🤝
          </span>
          TaskPals
        </h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-400">Current User:</span>
            <select
              value={currentUser}
              onChange={(e) => setCurrentUser(e.target.value as 'user1' | 'user2')}
              className="glass-button px-3 py-1.5 rounded-lg text-sm min-w-[120px]"
            >
              {users.map(user => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={() => setIsSettingsOpen(true)}
            className="glass-button p-2 rounded-lg hover:bg-white/10"
            title="User Settings"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      </div>

      <ProgressBar tasks={tasks} users={users} />
      <TaskImportExport tasks={tasks} onImport={fetchData} />
      <AddTaskForm currentUser={currentUser} onAddTask={handleAddTask} />

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-medium text-white">Your Tasks</h2>
            <span className="text-sm text-gray-400">
              Completed: {currentUserCompleted}/{currentUserTasks.length}
            </span>
          </div>
          {currentUserTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              users={users}
              currentUser={currentUser}
              onUpdate={fetchData}
            />
          ))}
        </div>
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-medium text-white">Other User's Tasks</h2>
            <span className="text-sm text-gray-400">
              Completed: {otherUserCompleted}/{otherUserTasks.length}
            </span>
          </div>
          {otherUserTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              users={users}
              currentUser={currentUser}
              onUpdate={fetchData}
            />
          ))}
        </div>
      </div>

      <UserSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        users={users}
        onUpdate={fetchData}
      />
    </>
  );
} 
