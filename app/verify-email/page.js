// src/app/verify-email/page.js
'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function VerifyEmailPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [verificationStatus, setVerificationStatus] = useState('Verifying...');

    useEffect(() => {
        // Get the token from the URL query parameters
        const token = searchParams.get('token');
        
        if (!token) {
            setVerificationStatus('No verification token found');
            return;
        }

        // Function to verify the email
        const verifyEmail = async () => {
            try {
                const response = await fetch('/api/auth/verify-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ token }),
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.message);
                }

                setVerificationStatus('Email verified successfully! Redirecting...');
                
                router.push('/Dashboard');
               

            } catch (error) {
                setVerificationStatus(error.message || 'Verification failed');
            }
        };

        verifyEmail();
    }, [searchParams, router]);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h1 className="mb-4 text-2xl font-bold">Email Verification</h1>
                <p>{verificationStatus}</p>
            </div>
        </div>
    );
}