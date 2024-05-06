import { Route, Routes } from 'react-router-dom';

import { Dashboard } from './components/dashboard/Dashboard';
import { GetTasksDocument } from './graphql/generated';
import { Performance } from './components/performance/Performance';
import { Scheduler } from './components/scheduler/Scheduler';
import { SideNav } from './components/navigation/SideNav'
import { useQuery } from 'urql';

function App() {
    const [tasks] = useQuery({
        query: GetTasksDocument
    });

    return (
        <div className='flex flex-row max-h-full h-screen relative'>
            <SideNav />
            <div className='w-full flex-col relative'>
                <div className='relative z-0 h-full p-2'>
                    <Routes>
                        <Route path="/" element={ <Scheduler /> } />
                        <Route path="/dashboard" element={ <Dashboard /> } />
                        <Route path="/scheduler" element={ <Scheduler /> } />
                        <Route path="/performance" element={ <Performance /> } />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App
