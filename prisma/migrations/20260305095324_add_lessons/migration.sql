-- CreateEnum
CREATE TYPE "LessonColor" AS ENUM ('kid-blue', 'kid-green', 'kid-pink', 'kid-red', 'kid-orange', 'kid-purple', 'kid-yellow');

-- CreateTable
CREATE TABLE "lessons" (
    "id" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "day" INTEGER NOT NULL,
    "period" INTEGER NOT NULL,
    "room" TEXT,
    "teacher" TEXT,
    "color" "LessonColor" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "lessons_pkey" PRIMARY KEY ("id")
);
