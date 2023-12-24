import { EmailTemplate } from '../../components/email-template.js';
import { NextResponse, NextRequest} from "next/server";
import { Resend } from "resend";


import { transporter,mailoptions } from '@/helpers/nodemailer.js';

const resend = new Resend("1234");
// const fromEmail = process.env.FROM_EMAIL;
const fromEmail = process.env.MY_MAIL;

export async function POST(req) {
  const { email, subject, msg } = await req.json();
  const user = {email,subject,msg}
  console.log(user);

  try {
    await transporter.sendMail({
      ...mailoptions,
      subject: "New portfolio message",
      text: "this is a test",
      html: `<h2> Sender email: ${email}</h2> <h1> ${subject}</h1> <h3> message:${msg} </h3>`
            
  })

  return NextResponse.json({msg:"sucess"},{status:200})
    
  } catch (error) {
    return NextResponse.json({error},{status:200})
  }



}
