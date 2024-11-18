import React, {ReactNode} from 'react'
import Navbar from "@/components/navigation/navbar";
import LeftSideBar from "@/components/navigation/left-side-bar";
import RightSideBar from "@/components/navigation/right-side-bar";

const RootLayout = ({ children } : {children: ReactNode} ) => {
    return (
        <main className="background-light850_dark100 realtive">
            <Navbar />
            <div className="flex">
                <LeftSideBar />

                <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
                    <div className="mx-auto w-full max-w-5x">
                        {children}
                    </div>
                </section>
                <RightSideBar />
            </div>
        </main>
    )
};
export default RootLayout;
