/*
  Warnings:

  - You are about to drop the `Search` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Search" DROP CONSTRAINT "Search_spotId_fkey";

-- DropTable
DROP TABLE "Search";

-- CreateTable
CREATE TABLE "search" (
    "id" TEXT NOT NULL,
    "spotId" TEXT NOT NULL,
    "keyword" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "search_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "search_spotId_key" ON "search"("spotId");

-- AddForeignKey
ALTER TABLE "search" ADD CONSTRAINT "search_spotId_fkey" FOREIGN KEY ("spotId") REFERENCES "spot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
