import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const { completed } = await request.json();
  const updatedTodo = await prisma.todo.update({
    where: { id: Number(id) },
    data: { completed },
  });
  return NextResponse.json(updatedTodo);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  await prisma.todo.delete({ where: { id: Number(id) } });
  return NextResponse.json({ message: "Todo deleted" });
}
