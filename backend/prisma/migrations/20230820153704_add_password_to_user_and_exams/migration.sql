/*
  Warnings:

  - Added the required column `exam_A` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `exam_B` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "exam_A" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "exam_B" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" TEXT NOT NULL;
