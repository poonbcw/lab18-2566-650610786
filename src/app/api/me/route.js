import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Poon Boonchoowit",
    studentId: "650610786",
  });
};
