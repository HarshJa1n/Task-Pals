import { useState } from 'react';

interface AddTaskFormProps {
  currentUser: 'user1' | 'user2';
  onAddTask: (title: string, description: string) => Promise<void>;
}

export default function AddTaskForm({ currentUser, onAddTask }: AddTaskFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      await onAddTask(title.trim(), description.trim());
      setTitle('');
      setDescription('');
      setIsOpen(false);
    }
  };

  return (
    <div className="mb-8">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="glass-button px-4 py-2 rounded-lg text-sm bg-blue-500"
        >
          Add New Task
        </button>
      ) : (
        <div className="glass-card p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-medium">Create New Task</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="glass-button p-2 rounded-lg hover:bg-white/10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium mb-2 text-gray-300">
                Task Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="input-field w-full px-4 py-2"
                placeholder="Enter task title"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="description" className="block text-sm font-medium mb-2 text-gray-300">
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="input-field w-full px-4 py-2"
                rows={3}
                placeholder="Enter task description"
                required
              />
            </div>
            
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="glass-button px-4 py-2 rounded-lg text-sm"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="glass-button px-4 py-2 rounded-lg text-sm bg-blue-500"
              >
                Create Task
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
} 