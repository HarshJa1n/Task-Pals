import { NextRequest, NextResponse } from 'next/server';
import { transferTask } from '@/lib/data';

export async function POST(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const taskId = context.params.id;
    const { fromUserId, toUserId } = await request.json();
    
    if (!fromUserId || !toUserId || 
        (fromUserId !== 'user1' && fromUserId !== 'user2') ||
        (toUserId !== 'user1' && toUserId !== 'user2')) {
      return NextResponse.json(
        { error: 'Invalid user IDs' },
        { status: 400 }
      );
    }

    const updatedTask = await transferTask(taskId, fromUserId, toUserId);
    
    if (!updatedTask) {
      return NextResponse.json(
        { error: 'Task not found or not assigned to user' },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedTask);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 