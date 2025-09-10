export default function PersonalInfo() {
  return (
    <section className="w-full py-12 md:py-16 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-50 border border-gray-200 rounded-xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 text-center">Personal Information</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📧</div>
                  <p className="text-lg md:text-xl text-gray-700 mb-4">
                    <strong className="text-gray-800">Contact Email:</strong>
                  </p>
                  <a 
                    href="mailto:nandhinikiwi@gmail.com" 
                    className="text-xl md:text-2xl text-blue-600 hover:text-blue-800 underline font-medium transition-colors duration-200"
                  >
                    nandhinikiwi@gmail.com
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="mt-6 bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <p className="text-lg text-gray-700">
                <strong className="text-gray-800">Marital Status:</strong> Unmarried
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
  