/*
  Warnings:

  - A unique constraint covering the columns `[at_id]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "at_id" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "user_at_id_key" ON "user"("at_id");
