-- CreateEnum
CREATE TYPE "DayOfWeek" AS ENUM ('MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY');

-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "day" "DayOfWeek",
ADD COLUMN     "endTime" TEXT,
ADD COLUMN     "startTime" TEXT;
