-- CreateEnum
CREATE TYPE "Department" AS ENUM ('COMPUTER_SCIENCE', 'PSYCHOLOGY');

-- CreateEnum
CREATE TYPE "Semester" AS ENUM ('A', 'B', 'SUMMER');

-- CreateEnum
CREATE TYPE "Year" AS ENUM ('A', 'B', 'C', 'OPTIONAL_COURSES');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Course" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "department" "Department" NOT NULL,
    "semester" "Semester" NOT NULL,
    "year" "Year" NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_SelectedCourses" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_SelectedCourses_AB_unique" ON "_SelectedCourses"("A", "B");

-- CreateIndex
CREATE INDEX "_SelectedCourses_B_index" ON "_SelectedCourses"("B");

-- AddForeignKey
ALTER TABLE "_SelectedCourses" ADD CONSTRAINT "_SelectedCourses_A_fkey" FOREIGN KEY ("A") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SelectedCourses" ADD CONSTRAINT "_SelectedCourses_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
