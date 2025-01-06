import { NextRequest, NextResponse } from 'next/server';
import { updateTaskStatus, undoTaskCompletion } from '@/lib/data';

type Params = Promise<{ id: string }>

export async function PATCH(
  request: NextRequest,
  segmentData: { params: Params }
) {
  try {
    const params = await segmentData.params;
    const taskId = params.id;
    const { userId } = await request.json();
    
    if (!userId || (userId !== 'user1' && userId !== 'user2')) {
      return NextResponse.json(
        { error: 'Invalid user ID' },
        { status: 400 }
      );
    }

    const task = await updateTaskStatus(taskId, userId);
    
    if (!task) {
      return NextResponse.json(
        { error: 'Task not found or not assigned to user' },
        { status: 404 }
      );
    }

    return NextResponse.json(task);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 