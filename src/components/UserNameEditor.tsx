import { useState } from 'react';
import { User } from '@/types';

interface UserNameEditorProps {
  user: User;
  onUpdate: () => void;
}

export default function UserNameEditor({ user, onUpdate }: UserNameEditorProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.name);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && name.trim() !== user.name) {
      try {
        const response = await fetch(`/api/users/${user.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: name.trim() }),
        });

        if (response.ok) {
          onUpdate();
          setIsEditing(false);
        }
      } catch (error) {
        console.error('Error updating user name:', error);
      }
    }
  };

  if (!isEditing) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-300">{user.name}</span>
        <button
          onClick={() => setIsEditing(true)}
          className="glass-button p-1.5 rounded-lg hover:bg-white/10"
          title="Edit name"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input-field px-2 py-1 text-sm w-[140px]"
        autoFocus
        required
      />
      <button
        type="submit"
        className="glass-button p-1.5 rounded-lg text-green-400 hover:bg-green-500/10"
        title="Save"
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => {
          setIsEditing(false);
          setName(user.name);
        }}
        className="glass-button p-1.5 rounded-lg text-red-400 hover:bg-red-500/10"
        title="Cancel"
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </form>
  );
} 