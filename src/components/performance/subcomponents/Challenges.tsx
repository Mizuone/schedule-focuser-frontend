import { Card } from "../../reuseable/Card";

export const Challenges = () => {
    return (
        <Card cardTitle="Challenges">
            {false ? (
                <>
                
                </>
            ) : (
                <div className="flex h-full w-full justify-center items-center bg-gray-50">
                    <p className="italic text-gray-500 text-center">No Active Challenges</p>
                </div>
            )}
        </Card>
    )
}