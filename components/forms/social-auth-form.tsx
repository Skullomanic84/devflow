import React from 'react';
import {Button} from "@/components/ui/button";
import Image from "next/image";

const SocialAuthForm = () => {
    return (
        <div className="mt-10 flex flex-wrap gap-2.5">
            <Button>
                <Image
                    src="/icons/github.svg"
                    alt="Github Logo"
                    width={20}
                    height={20}
                    className="invert-colors mr-2.5 object-contain"
                />
                <span>Log in with GitHub</span>
            </Button>

            <Button>
                <Image
                    src="/icons/google.svg"
                    alt="Google Logo"
                    width={20}
                    height={20}
                    className="mr-2.5 object-contain"
                />
                <span>Log in with Google</span>
            </Button>
        </div>
    )
}
export default SocialAuthForm
