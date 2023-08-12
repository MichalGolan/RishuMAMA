/*
  Warnings:

  - Added the required column `LectureId` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isLecture` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lecutrer` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "LectureId" INTEGER NOT NULL,
ADD COLUMN     "isLecture" BOOLEAN NOT NULL,
ADD COLUMN     "lecutrer" TEXT NOT NULL,
ADD COLUMN     "practices" INTEGER[];
