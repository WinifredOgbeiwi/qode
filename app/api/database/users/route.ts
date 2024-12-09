
import { db } from "@/firebase";
import {  AuthDBProps } from "@/types";
import { NextRequest, NextResponse } from "next/server";
import { doc, setDoc } from "firebase/firestore";


export const  POST = async(req: NextRequest) =>{
    const { uid, email, firstname,lastname,experience, }: AuthDBProps = await req.json();
    try {
   await setDoc(doc(db, "users", uid), {
        firstname,
        lastname,
        experience,
        email,
        createdAt: new Date(),
      });
     return NextResponse.json({message:"User created successfully", uid}, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 400 });
  }
}
