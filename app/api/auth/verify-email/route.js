import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import { NextResponse } from 'next/sever';

export async function POST(request) {
    try {
        // Connect to the database first
		await connectDB();

        // Parse the JSON body from the request
		// In the App Router, we need to explictly parse the request body
		const { token } = await request.json();

        // Look up the use with the verification token that hasn't expired
		const user = await User.findOne({
			verificationToken: token,
			verificationTokenExpiry: { $gt: new Date() },
		});

        // If no valid user is found, return an error response
		if (!user) {
			return NextResponse.json(
				{ message: 'Invalid or expired verification token'},
				{ status: 400 }
			);
		}

        // Update the user's verification status
		user.isEmailVerified = true;
		user.verificationToke = undefined;
		user.verificationTokenExpiry = undefined;
		await user.save();

        // Return success response
		return NextResponse.json(
			{ message: 'Email verified successfully' },
			{ status: 200 }
		);
    } catch (error) {
        // Log the error and return a server error response
		console.error('Verification error:', error);
		return NextResponse.json(
			{ message: 'Internal server error'},
			{ status: 500 }
		);
    }

}