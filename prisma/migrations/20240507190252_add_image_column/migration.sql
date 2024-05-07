/*
  Warnings:

  - You are about to drop the column `url` on the `image` table. All the data in the column will be lost.
  - Added the required column `compressUrl` to the `image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `key` to the `image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `originUrl` to the `image` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "image" DROP COLUMN "url",
ADD COLUMN     "compressUrl" TEXT NOT NULL,
ADD COLUMN     "key" TEXT NOT NULL,
ADD COLUMN     "originUrl" TEXT NOT NULL;
