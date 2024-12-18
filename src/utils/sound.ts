export const playTaskCompleteSound = (userId: 'user1' | 'user2') => {
  if (typeof window === 'undefined') return;

  const sound = new Audio(userId === 'user1' ? '/sounds/ding1.mp3' : '/sounds/ding2.mp3');
  
  sound.play().catch((error) => {
    console.error('Error playing sound:', error);
  });
}; 