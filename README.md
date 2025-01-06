# Task Competition App

A competitive task management application built with Next.js where two users can create and complete tasks while competing to see who completes their tasks faster.

## Features

- **Real-time Progress Tracking**: Visual progress bars show each user's task completion rate
- **Task Management**:
  - Create new tasks assigned to yourself
  - View tasks assigned to both users
  - Mark your tasks as complete
  - Track completion time and status
- **User Switching**: Easily switch between User One and User Two
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean and intuitive interface using Tailwind CSS

## Tech Stack

- **Frontend**: Next.js with TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **API**: Next.js API Routes

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd task-competition
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the database:
   - Create a `.env` file in the root directory
   - Add your PostgreSQL connection URL:
     ```
     DATABASE_URL=your_postgres_connection_url
     ```
   - Run database migrations:
     ```bash
     npx prisma migrate dev
     ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. **Switch Users**:
   - Use the dropdown in the top-right corner to switch between User One and User Two

2. **View Progress**:
   - The progress bar at the top shows each user's task completion rate
   - See who's completing tasks faster

3. **Create Tasks**:
   - Click "Add New Task"
   - Fill in the task title and description
   - The task will be assigned to the current user

4. **Complete Tasks**:
   - Find your assigned tasks in the "Your Tasks" section
   - Click "Mark as Complete" to complete a task
   - The completion time is recorded automatically

5. **Monitor Competition**:
   - Watch the progress bars to see who's leading
   - View completion timestamps for finished tasks

## Project Structure

- `/src/app`: Next.js app router files
- `/src/components`: React components
- `/src/lib`: Data management utilities
- `/src/types`: TypeScript type definitions
- `/prisma`: Database schema and migrations

## API Endpoints

- `GET /api/tasks`: Get all tasks
- `POST /api/tasks`: Create a new task
- `PATCH /api/tasks/[id]`: Update task status
- `DELETE /api/tasks/[id]`: Delete a task

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details 