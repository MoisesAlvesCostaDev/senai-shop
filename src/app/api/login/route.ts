import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Simulação de autenticação
  if (email === "moi.ac@hotmail.com" && password === "123456") {
    return NextResponse.json({
      success: true,
      id: "1",
      name: "Moisés Alves",
      email: "moi.ac@hotmail.com",
    });
  }

  return NextResponse.json(
    { success: false, message: "E-mail ou senha inválidos." },
    { status: 401 }
  );
}
