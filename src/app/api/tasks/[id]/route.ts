import { NextRequest, NextResponse } from 'next/server';
import { updateTaskStatus } from '@/lib/data';

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const taskId = params.id;
    const { userId } = await request.json();
    
    if (!userId || (userId !== 'user1' && userId !== 'user2')) {
      return NextResponse.json(
        { error: 'Invalid user ID' },
        { status: 400 }
      );
    }

    const updatedTask = await updateTaskStatus(taskId, userId);
    
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