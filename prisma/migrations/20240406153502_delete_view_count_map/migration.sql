/*
  Warnings:

  - You are about to drop the column `mapId` on the `image` table. All the data in the column will be lost.
  - You are about to drop the column `view_count` on the `map` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "image" DROP CONSTRAINT "image_mapId_fkey";

-- AlterTable
ALTER TABLE "image" DROP COLUMN "mapId";

-- AlterTable
ALTER TABLE "map" DROP COLUMN "view_count";
