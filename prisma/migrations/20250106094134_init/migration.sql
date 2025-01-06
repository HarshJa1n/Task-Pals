-- Create the user_type enum
CREATE TYPE "user_type" AS ENUM ('user1', 'user2');

-- CreateTable
CREATE TABLE "tasks" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "assignedTo" "user_type" NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "completedBy" "user_type",
    "completedAt" TIMESTAMP(3),
    "startTime" TIMESTAMP(3),
    "timeSpent" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" "user_type" NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
