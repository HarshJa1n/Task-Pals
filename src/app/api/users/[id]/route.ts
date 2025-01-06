import { NextRequest, NextResponse } from 'next/server';
import { updateUserName } from '@/lib/data';

type Params = Promise<{ id: string }>

export async function PATCH(
  request: NextRequest,
  segmentData: { params: Params }
) {
  try {
    const params = await segmentData.params;
    const userId = params.id as 'user1' | 'user2';
    const { name } = await request.json();
    
    if (!name || typeof name !== 'string') {
      return NextResponse.json(
        { error: 'Invalid name' },
        { status: 400 }
      );
    }

    if (userId !== 'user1' && userId !== 'user2') {
      return NextResponse.json(
        { error: 'Invalid user ID' },
        { status: 400 }
      );
    }

    const updatedUser = await updateUserName(userId, name.trim());
    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 