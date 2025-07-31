export default function Card() {
  return (
    <div className="w-full max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="relative h-64 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
        <div className="absolute bg-black bg-opacity-"></div>
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src="https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Premium Wireless Headphones"
        />
        <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          NEW
        </div>
        <div className="absolute top-4 left-4 w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-50 dark:hover:bg-red-900 transition-colors">
          <svg
            className="w-4 h-4 text-gray-600 dark:text-gray-300 hover:text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-purple-600 dark:text-purple-400 uppercase tracking-wide">
            Audio • Electronics
          </span>
          <div className="flex items-center space-x-1">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              In Stock
            </span>
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
          Sony WH-1000XM5 Wireless Noise Canceling Headphones
        </h3>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
            30hr Battery
          </span>
          <span className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
            Fast Charge
          </span>
          <span className="px-2 py-1 text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">
            Hi-Res Audio
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < 4 ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
            4.8 (2.1k reviews)
          </span>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              $299
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
              $399
            </span>
            <span className="text-sm font-medium text-green-600 dark:text-green-400">
              25% OFF
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800">
            Add to Cart
          </button>
          <div className="flex space-x-3">
            <button className="flex-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium py-2 px-4 rounded-lg transition-colors duration-200">
              Compare
            </button>
            <button className="flex-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium py-2 px-4 rounded-lg transition-colors duration-200">
              Quick View
            </button>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Free shipping</span>
            </div>
            <span className="text-gray-500 dark:text-gray-400">
              Delivery in 2-3 days
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
