// app/api/auth/signup.js
import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb'; // Database connection utility
import User from '@/models/User'; // User model for MongoDB
import bcrypt from 'bcryptjs'; // Password hashing library
import crypto from 'crypto'; // For generating secure tokens
import nodemailer from 'nodemailer'; // Email sending utility


export async function POST(request: NextRequest) {
    try {
        await connectDB();

        // Parse inputs
        const { 
			email, 
			password
		} = await request.json();

        // Validate required fields (email, password required)
		if (!email || !password) {
			return NextResponse.json(
				{ message: 'Email and password are required' },
				{ status: 400 }
			);
		}

        // Check if user already exists
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return NextResponse.json(
				{ message: 'User already exists' },
				{ status: 400 }
			);
		}

        // Hash password
	    const hashedPassword = await bcrypt.hash(password, 10);

        // Create verification token
        const verificationToken = crypto.randomBytes(32).toString('hex');
        const verificationTokenExpiry = new Date();
        verificationTokenExpiry.setHours(verificationTokenExpiry.getHours() + 24);

        // Create new user
        const newUser = await User.create({
            email, 
            password: hashedPassword,
            isEmailVerified: false,
            verificationToken,
            verificationTokenExpiry,
        });

        // Send verification email
        const transporter = nodemailer.createTransport({
            // Configure your email service here
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
            tls: {
                rejectUnauthorized: false  // Helps prevent certificate issues
            },
            debug: true  // Enable debug logs during development
        });

        const verificationUrl = `${process.env.NEXT_PUBLIC_APP_URL}/verify-email?token=${verificationToken}`;

        const emailResult = await transporter.sendMail({
            from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
            to: email,
            subject: 'Verify your email',
            html: `
                <h1> Email Verification </h1>
                <p> Thank you for registering! Please verify your email by clicking the link below: </p>
                <a href="${verificationUrl}"> Verify Email </a>
                <p> This link will expire in 24 hours. </p>
                <p> If you didn't create an account, please ignore this email. </p>
            `
        });

        return  NextResponse.json(
            { message: 'User created successfully. Please check your email to verify your account.'},
            { status: 201 }
        );

        console.log('Verification email sent:', emailResult.messageId)
    } catch(error) {
        if (error.name === 'ValidationError' ) {
			// Extract all validation error messages into an array
			const validationErrors = Object.values(error.errors).map((err:any) => err.message);
			return NextResponse.json(
				{ status: 'error',
					message: 'Invalid input data',
					details: validationErrors 
				},
				{ status: 400 }
			);
		}

        return NextResponse.json(
            { message: 'Internal server error'},
            { status: 500}
        );
    }
    
}