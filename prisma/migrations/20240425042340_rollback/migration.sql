/*
  Warnings:

  - You are about to drop the `search` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "search" DROP CONSTRAINT "search_spotId_fkey";

-- DropTable
DROP TABLE "search";
