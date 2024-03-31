import { Route, Routes } from 'react-router-dom';

import { Scheduler } from './components/scheduler/Scheduler';
import { SideNav } from './components/navigation/SideNav'

function App() {

  return (
    <div className='flex flex-row max-h-full h-screen'>
        <div className='w-2/12 bg-green-600 shadow'>
            <SideNav />
        </div>
        <div className='flex-auto px-4'>
            <Routes>
                <Route path="/" element={ <Scheduler /> } />
                <Route path="/scheduler" element={ <Scheduler /> } />
            </Routes>
        </div>
    </div>
  )
}

export default App
