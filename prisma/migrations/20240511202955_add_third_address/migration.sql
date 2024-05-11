/*
  Warnings:

  - Added the required column `third_address` to the `spot` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "spot" ADD COLUMN     "third_address" TEXT NOT NULL;
