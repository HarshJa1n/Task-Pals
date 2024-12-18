import { useState } from 'react';
import { Task } from '@/types';

interface TaskImportExportProps {
  tasks: Task[];
  onImport: () => void;
}

export default function TaskImportExport({ tasks, onImport }: TaskImportExportProps) {
  const [importText, setImportText] = useState('');
  const [showImport, setShowImport] = useState(false);
  const [error, setError] = useState('');

  const handleExport = () => {
    const exportData = tasks.map(({ id, startTime, timeSpent, ...task }) => task);
    const jsonStr = JSON.stringify(exportData, null, 2);
    
    // Create and trigger download
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tasks.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImport = async () => {
    try {
      const response = await fetch('/api/tasks/import', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tasks: importText }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to import tasks');
      }

      setImportText('');
      setShowImport(false);
      setError('');
      onImport();
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return (
    <div className="mb-8">
      <div className="flex gap-4">
        <button
          onClick={handleExport}
          className="glass-button px-4 py-2 rounded-lg text-sm"
        >
          Export Tasks
        </button>
        <button
          onClick={() => setShowImport(true)}
          className="glass-button px-4 py-2 rounded-lg text-sm"
        >
          Import Tasks
        </button>
      </div>

      {showImport && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="glass-card w-full max-w-2xl p-6 m-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-medium">Import Tasks</h3>
              <button
                onClick={() => {
                  setShowImport(false);
                  setImportText('');
                  setError('');
                }}
                className="glass-button p-2 rounded-lg hover:bg-white/10"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="mb-6">
              <p className="text-sm text-gray-400 mb-2">
                Paste your JSON task list below. Example format:
              </p>
              <pre className="glass-card bg-opacity-30 p-4 rounded-lg text-xs text-gray-300 mb-4 overflow-x-auto">
{`[
  {
    "title": "Task Title",
    "description": "Task Description",
    "assignedTo": "user1",
    "completed": false
  }
]`}
              </pre>
              <textarea
                value={importText}
                onChange={(e) => setImportText(e.target.value)}
                className="input-field w-full px-4 py-3"
                rows={6}
                placeholder="Paste JSON here..."
              />
              {error && (
                <p className="text-red-400 text-sm mt-2">{error}</p>
              )}
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowImport(false);
                  setImportText('');
                  setError('');
                }}
                className="glass-button px-4 py-2 rounded-lg text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleImport}
                className="glass-button px-4 py-2 rounded-lg text-sm bg-blue-500"
              >
                Import
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 