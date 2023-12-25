import './App.css';
import { FiSearch } from 'react-icons/fi'
import CurrentStats from './components/minidash/CurrentStats';
import { Sidebar } from './components/sidebar/Sidebar';
import Overview from './components/overview/Overview';
import Customers from './components/customers/Customers';
import ProductSell from './components/sells/ProductSell';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className='w-full h-screen overflow-y-scroll bg-gray-200 p-4'>
        <div className='flex px-4 py-3 justify-between'>
          <div className='text-lg'>Hello Tronsouls 👋,</div>
          <div className='w-fit py-1 px-2 bg-white rounded-md text-gray-500 flex items-center gap-2 outline outline-1 outline-gray-400'>
            <FiSearch />
            <input placeholder='Search' className='outline-none max-sm:hidden' />
          </div>
        </div>
        <CurrentStats />
        <div className='flex flex-row max-sm:flex-col max-md:flex-col justify-evenly gap-4'>
          <Overview />
          <Customers />
        </div>
        <div>
          <ProductSell />
        </div>
      </div>
    </div>
  );
}

export default App;
