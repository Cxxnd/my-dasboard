'use client'
import { useRouter } from "next/navigation";


const page = () => {
    const router = useRouter();
    const handleclick = (event) => {
        event.preventDefault();
        router.back();
    }

    
    return (
        <div className="h-screen flex flex-col justify-center items-center overflow-hidden gap-11 p-6 relative">
            <button onClick={handleclick}>back</button>
            <div className="absolute top-6 mt-3 flex justify-center items-center text-center bg-accent p-6 rounded-full shadow-lg h-20 sm:w-150 md:w-3xl lg:w-5xl w-110">
                <h1 className="text-4xl font-bold">Welcome</h1>
            </div>
            <div className="text-center bg-accent p-6 rounded-lg shadow-lg overflow-auto max-w-lg">

                <p className="text-base">
                    mfesljkhnzjgsfbujeishiekgihgerkhgivkvbvbvvvv ge g xbdfb b fbdf
                    e bgbfdb vdb dbdffbedg bdb bfbdfbdfbdf thhvsvsv
                </p>
            </div>
        </div>
    );
};
export default page;
