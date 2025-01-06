import { NextRequest, NextResponse } from 'next/server';
import { getData, createTask } from '@/lib/data';

export async function GET() {
  try {
    const data = await getData();
    
    // Ensure we always return valid arrays
    return NextResponse.json({
      tasks: Array.isArray(data.tasks) ? data.tasks : [],
      users: Array.isArray(data.users) ? data.users : []
    });
  } catch (error) {
    console.error('Error in GET /api/tasks:', error);
    return NextResponse.json(
      { error: 'Internal server error', tasks: [], users: [] },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { title, description, userId } = await request.json();
    
    if (!title || !description || !userId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (userId !== 'user1' && userId !== 'user2') {
      return NextResponse.json(
        { error: 'Invalid user ID' },
        { status: 400 }
      );
    }

    const newTask = await createTask(title, description, userId);
    return NextResponse.json(newTask);
  } catch (error) {
    console.error('Error in POST /api/tasks:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 