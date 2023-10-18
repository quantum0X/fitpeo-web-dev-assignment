import './App.css';
import CurrentStats from './components/minidash/CurrentStats';
import { Sidebar } from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className='w-full h-screen bg-gray-200 p-4'>
        {/* <CurrentStats /> */}
      </div>
    </div>
  );
}

export default App;
