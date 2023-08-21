/*
  Warnings:

  - You are about to drop the column `exam_A` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `exam_B` on the `Course` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `B` on the `_SelectedCourses` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "_SelectedCourses" DROP CONSTRAINT "_SelectedCourses_B_fkey";

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "exam_A",
DROP COLUMN "exam_B";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "_SelectedCourses" DROP COLUMN "B",
ADD COLUMN     "B" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "_SelectedCourses_AB_unique" ON "_SelectedCourses"("A", "B");

-- CreateIndex
CREATE INDEX "_SelectedCourses_B_index" ON "_SelectedCourses"("B");

-- AddForeignKey
ALTER TABLE "_SelectedCourses" ADD CONSTRAINT "_SelectedCourses_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
