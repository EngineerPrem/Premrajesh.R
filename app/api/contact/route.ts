import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(request:NextRequest) {
    try{
        const body = await request.json();
        const { name, email, message } = body;

        if(!name || !email || !message) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Please filll in all fields.",
                },
                {status: 400}
            );
        }

        const emailRegax = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailRegax.test(email)){
            return NextResponse.json(
                {
                    success: false,
                    message: "Please enter a valid email address.",
                },
                {status: 400}
            );
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth:{
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

//Email Sent to you
        await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: process.env.CONTACT_EMAIL,
            replyTo: email,
            subject: `New Portfolio Message from ${name}`,

            text: `
            You have received a new message from your portfolio.
            
            Name: ${name}
            Email: ${email}
            
            Message: ${message}
                    `,
                    html:`
                <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                    <h2>New Portfolio Contact Message</h2>

                    <p>
                        You have received a new message from your portfolio website.
                    </p>

                    <hr />

                    <p>
                        <strong>Name:</strong> ${name}
                    </p>

                    <p>
                        <strong>Email:</strong>
                        <a href="mailto:${email}">
                            ${email}
                        </a>
                    </p>

                    <p>
                        <strong>Message:</strong>
                    </p>

                    <div
                        style="
                            padding: 15px;
                            background: #f4f4f4;
                            border-radius: 8px;
                            white-space: pre-line;
                        "
                    >
                        ${message}
                    </div>

                    <hr />

                    <p style="font-size: 12px; color: #777;">
                        Sent from Premrajesh Ravichandran's portfolio website.
                    </p>
                </div>
            `,
        });

        return NextResponse.json(
            {
                success: true, message: "Your message has been sent successfully!",
            },
            {status: 200}
        );
    } catch (error) {
        console.error ("Contact form error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Something went wrong. Please try again later.",
            },
            {status: 500}
        );

    }

}