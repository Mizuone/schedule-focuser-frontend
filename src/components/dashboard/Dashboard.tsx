import { Scheduler } from "../scheduler/Scheduler"

export const Dashboard = () => {
    
    return (
        <>
            <div className="content flex-col">
                <div className="dashboard-header tile shadow p-2 my-4">
                    <h1 className="m-4 tile-marker text-2xl ">Hello User!</h1>
                    <p className="m-4 text-xl">Welcome to the schedule focuser. Start by filling out your schedule below.</p>
                </div>
                <div className="dashboard-content tile rounded shadow">
                    <Scheduler />
                </div>
            </div>
        </>
    )
}