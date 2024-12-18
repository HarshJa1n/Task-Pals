import { User } from '@/types';
import UserNameEditor from './UserNameEditor';

interface UserSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  users: User[];
  onUpdate: () => void;
}

export default function UserSettingsModal({ isOpen, onClose, users, onUpdate }: UserSettingsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="glass-card w-full max-w-md p-6 m-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-medium">User Settings</h2>
          <button
            onClick={onClose}
            className="glass-button p-2 rounded-lg hover:bg-white/10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="space-y-6">
          {users.map(user => (
            <div key={user.id} className="flex items-center justify-between p-4 glass-card bg-opacity-50">
              <span className={`text-sm font-medium ${
                user.id === 'user1' ? 'text-blue-500' : 'text-purple-500'
              }`}>
                {user.id === 'user1' ? 'User One' : 'User Two'}
              </span>
              <UserNameEditor user={user} onUpdate={onUpdate} />
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="glass-button px-4 py-2 rounded-lg text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
} 