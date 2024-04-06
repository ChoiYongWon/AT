/*
  Warnings:

  - Added the required column `name` to the `map` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "map" ADD COLUMN     "name" TEXT NOT NULL;
