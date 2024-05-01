import { Route, Routes } from 'react-router-dom';

import { GetTasksDocument } from './graphql/generated';
import { Scheduler } from './components/scheduler/Scheduler';
import { SideNav } from './components/navigation/SideNav'
import { useQuery } from 'urql';

function App() {
	const [tasks] = useQuery({
		query: GetTasksDocument
	});

    return (
      <div className='flex flex-row max-h-full h-screen'>
          <SideNav />
          <div className='content flex-col p-4'>
              <Routes>
                  <Route path="/" element={ <Scheduler /> } />
                  <Route path="/scheduler" element={ <Scheduler /> } />
              </Routes>
          </div>
      </div>
    );
}

export default App
