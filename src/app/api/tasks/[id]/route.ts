import { NextRequest, NextResponse } from 'next/server';
import { updateTaskStatus, deleteTask, updateTask, undoTaskCompletion, startTask, pauseTask } from '@/lib/data';

export async function PATCH(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const taskId = context.params.id;
    const { userId, action, updates } = await request.json();
    
    if (!userId || (userId !== 'user1' && userId !== 'user2')) {
      return NextResponse.json(
        { error: 'Invalid user ID' },
        { status: 400 }
      );
    }

    let result;
    switch (action) {
      case 'complete':
        result = await updateTaskStatus(taskId, userId);
        break;
      case 'undo':
        result = await undoTaskCompletion(taskId, userId);
        break;
      case 'update':
        if (!updates) {
          return NextResponse.json(
            { error: 'No updates provided' },
            { status: 400 }
          );
        }
        result = await updateTask(taskId, userId, updates);
        break;
      case 'start':
        result = await startTask(taskId, userId);
        break;
      case 'pause':
        result = await pauseTask(taskId, userId);
        break;
      default:
        return NextResponse.json(
          { error: 'Invalid action' },
          { status: 400 }
        );
    }
    
    if (!result) {
      return NextResponse.json(
        { error: 'Task not found or not assigned to user' },
        { status: 404 }
      );
    }

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const taskId = context.params.id;
    const { userId } = await request.json();
    
    if (!userId || (userId !== 'user1' && userId !== 'user2')) {
      return NextResponse.json(
        { error: 'Invalid user ID' },
        { status: 400 }
      );
    }

    const success = await deleteTask(taskId, userId);
    
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