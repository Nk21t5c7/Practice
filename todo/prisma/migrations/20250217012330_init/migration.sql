-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "todoTitle" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
