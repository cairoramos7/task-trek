import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const todos = await prisma.todo.findMany();
  return NextResponse.json(todos);
}

export async function POST(request: Request) {
  const { title } = await request.json();
  const newTodo = await prisma.todo.create({ data: { title } });
  return NextResponse.json(newTodo, { status: 201 });
}
