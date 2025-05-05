-- CreateTable
CREATE TABLE "Pdf" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "data" BYTEA NOT NULL,

    CONSTRAINT "Pdf_pkey" PRIMARY KEY ("id")
);
