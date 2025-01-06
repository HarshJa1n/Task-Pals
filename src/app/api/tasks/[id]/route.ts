import { NextRequest, NextResponse } from 'next/server';
import { updateTask, updateTaskStatus, undoTaskCompletion, deleteTask, startTask, pauseTask, updateTaskPriority } from '@/lib/data';

type Params = Promise<{ id: string }>;

export async function PATCH(
  request: NextRequest,
  { params }: { params: Params }
) {
  try {
    const { id } = await params;
    const { userId, action, updates } = await request.json();

    let result = null;
    switch (action) {
      case 'update':
        result = await updateTask(id, userId, updates);
        break;
      case 'complete':
        result = await updateTaskStatus(id, userId);
        break;
      case 'undo':
        result = await undoTaskCompletion(id, userId);
        break;
      case 'start':
        result = await startTask(id, userId);
        break;
      case 'pause':
        result = await pauseTask(id, userId);
        break;
      case 'updatePriority':
        result = await updateTaskPriority(id, updates.priority);
        break;
      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }

    if (!result) {
      return NextResponse.json(
        { error: 'Task not found or unauthorized' },
        { status: 404 }
      );
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error updating task:', error);
    return NextResponse.json(
      { error: 'Failed to update task' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Params }
) {
  try {
    const { id } = await params;
    const { userId } = await request.json();
    
    if (!userId || (userId !== 'user1' && userId !== 'user2')) {
      return NextResponse.json(
        { error: 'Invalid user ID' },
        { status: 400 }
      );
    }

    const success = await deleteTask(id, userId);
    
    if (!success) {
      return NextResponse.json(
        { error: 'Task not found or not assigned to user' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 