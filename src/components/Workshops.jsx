export default function Workshops() {
  return (
    <section className="w-full py-4 px-4 md:px-8 bg-white flex justify-center mb-8">
    <div className="w-full max-w-4xl">
      <div className="bg-gray-50 border border-gray-200 rounded-xl shadow-lg p-8 md:p-12 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 text-center">Workshops & Seminars</h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
              <div className="flex items-start">
                <span className="text-blue-500 text-2xl mr-4 mt-1">🏆</span>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">World Homoeopathy Day Symposium</h3>
                  <p className="text-gray-600">Delhi, April 2024</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
              <div className="flex items-start">
                <span className="text-green-500 text-2xl mr-4 mt-1">🌟</span>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">International Homoeopathy Seminar</h3>
                  <p className="text-gray-600">Bangalore, May 2024</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
              <div className="flex items-start">
                <span className="text-purple-500 text-2xl mr-4 mt-1">📚</span>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">State Level Workshop on Intellectual Property Rights</h3>
                  <p className="text-gray-600">October, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
  