/*
  Warnings:

  - You are about to drop the column `LectureId` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `day` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `endTime` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `isLecture` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `lecutrer` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `practices` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `startTime` on the `Course` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Course" DROP COLUMN "LectureId",
DROP COLUMN "day",
DROP COLUMN "endTime",
DROP COLUMN "isLecture",
DROP COLUMN "lecutrer",
DROP COLUMN "practices",
DROP COLUMN "startTime";

-- CreateTable
CREATE TABLE "Lecture" (
    "id" SERIAL NOT NULL,
    "startTime" TEXT,
    "endTime" TEXT,
    "day" "DayOfWeek",
    "lecutrer" TEXT NOT NULL,
    "isLecture" BOOLEAN NOT NULL,
    "practices" INTEGER[],
    "courseId" INTEGER NOT NULL,

    CONSTRAINT "Lecture_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Lecture" ADD CONSTRAINT "Lecture_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;
