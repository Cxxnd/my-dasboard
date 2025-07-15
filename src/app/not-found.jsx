'use client';
import { FileSearchIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";


const Page = () => {
    const router = useRouter();
    return (
    <div className="min-h-screen flex items-center justify-center text-center gap-3">
        
        <div>
        <div className="flex justify-center">
            <FileSearchIcon size={50} className="text-black"/>
        </div>
            <h3 className="font-bold text-black text-2xl">PAGE NOT FOUND</h3>
            <button onClick={() => router.back()} className="text-primary rounded underline font-bold hover:text-black">Back to Page</button>
        </div>
    </div>
    );
}
export default Page;