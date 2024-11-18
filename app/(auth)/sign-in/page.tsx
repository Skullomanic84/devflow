"use client";

import React from 'react';
import AuthForm from "@/components/forms/auth-forms";
import {SignInSchema} from "@/lib/validation";

const SignIn = () => {
    return (
        <AuthForm
            formType="SIGN_IN"
            schema={SignInSchema}
            defaultValues={{ email: "", password: "" }}
            onSubmit={(data) => Promise.resolve({success:true, data})}
        />
    )
};

export default SignIn;
