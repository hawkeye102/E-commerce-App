import searchicon from '../../assets/search.png'
import carticon from '../../assets/cart.png'

import SearchBar from './SearchBar';


export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 text-sm">
      {/* Top Strip */}
      <div className="flex justify-between items-center px-6 py-2 bg-gray-100 text-gray-600">
        {/* /* Promo Message */ }
        <p>Get up to 50% off new season styles, limited time only</p>

       

        {/* Center Options */}
        <div className="flex items-center gap-4">
          <a href="#" className="hover:underline">Help Center</a>
          <span className="h-4 w-px bg-gray-500"></span>
          <a href="#" className="hover:underline text-blue-600 font-medium">Order Tracking</a>
        </div>

        {/* Language & Currency Dropdowns (Together) */}
        <div className="flex items-center gap-2">
          <select className="border-none bg-transparent cursor-pointer">
            <option>🇺🇸 English</option>
            <option>🇮🇳 Hindi</option>
            <option>🇫🇷 French</option>
          </select>

          <select className="border-none bg-transparent cursor-pointer">
            <option>USD</option>
            <option>INR</option>
            <option>EUR</option>
          </select>
        </div>
      </div>
      
       
       {/* Main Navigation */}
        <nav className="flex justify-between items-center px-6 py-4">

        {/* Left: Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <a href="#">E-Shop</a>
        </div>


        {/* used materialui from react */}
        <div className="flex-1 flex justify-center ml-40">
          <SearchBar />
        </div>
      
       
       {/* a signIn button  */}
       <div className="mr-10">
  <button className="px-4 py-2 bg-blue-500 text-white rounded">Sign In</button>
</div>
        

        {/* Right: Navigation Links & Cart */}
        <div className="flex items-center gap-6">
          <ul className="flex gap-6">
            <li><a href="#" className="text-gray-700 hover:text-black">Home</a></li>
            <li><a href="#" className="text-gray-700 hover:text-black">Shop</a></li>
            <li><a href="#" className="text-gray-700 hover:text-black">Contact</a></li>
          </ul>

          {/* Cart Icon */}
          <button className="relative">
          <img src={carticon} alt="Cart" className="w-6 h-6" />
          
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">3</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
