import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import { AuthContextProps } from "@/types";
import { NextRequest, NextResponse } from "next/server";


export const  POST = async(req: NextRequest) =>{
    const { email, password }: AuthContextProps = await req.json();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
     return NextResponse.json({ user: userCredential.user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 400 });
  }
}
