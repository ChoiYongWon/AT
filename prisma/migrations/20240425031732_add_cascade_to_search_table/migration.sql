-- DropForeignKey
ALTER TABLE "search" DROP CONSTRAINT "search_spotId_fkey";

-- AddForeignKey
ALTER TABLE "search" ADD CONSTRAINT "search_spotId_fkey" FOREIGN KEY ("spotId") REFERENCES "spot"("id") ON DELETE CASCADE ON UPDATE CASCADE;
