import { NextRequest, NextResponse } from 'next/server';
import { importTasks } from '@/lib/data';

export async function POST(request: NextRequest) {
  try {
    const { tasks } = await request.json();
    
    if (!tasks) {
      return NextResponse.json(
        { error: 'No tasks provided' },
        { status: 400 }
      );
    }

    const importedTasks = await importTasks(tasks);
    return NextResponse.json({ tasks: importedTasks });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
} 