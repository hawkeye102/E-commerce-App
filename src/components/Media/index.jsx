import { FaFacebookF, FaYoutube, FaPinterestP, FaInstagram } from 'react-icons/fa';

const MediaFooter= () => {
  return (
    <footer className="w-full bg-gray-100 py-6 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full shadow hover:bg-red-500">
            <FaFacebookF className="text-gray-700" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full shadow hover:bg-red-500">
            <FaYoutube className="text-gray-700" />
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full shadow hover:bg-red-500">
            <FaPinterestP className="text-gray-700" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full shadow hover:bg-red-500">
            <FaInstagram className="text-gray-700" />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-600 mt-4 md:mt-0">
          © 2025 - Ecommerce Template
        </p>

        {/* Payment Methods */}
        <div className="flex space-x-2 mt-4 md:mt-0">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Credit_card_cb.png" alt="CB" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo_%282018%29.svg" alt="AmEx" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" />
        </div>
      </div>
    </footer>
  );
};

export default MediaFooter;
