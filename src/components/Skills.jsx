export default function Skills() {
  return (
<section className="w-full py-4 px-4 md:px-8 bg-white flex justify-center mb-8">
  <div className="w-full max-w-5xl">
    <div className="bg-gray-50 border border-gray-200 rounded-xl shadow-lg p-8 md:p-12 mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 text-center">Skills</h2>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-start">
              <span className="text-blue-500 text-xl mr-3 mt-1">•</span>
              <span className="text-gray-700 text-lg md:text-xl">Sound knowledge in medical terminology</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-start">
              <span className="text-green-500 text-xl mr-3 mt-1">•</span>
              <span className="text-gray-700 text-lg md:text-xl">Case taking & patient interaction</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-start">
              <span className="text-purple-500 text-xl mr-3 mt-1">•</span>
              <span className="text-gray-700 text-lg md:text-xl">Basic repertory use (manual/software)</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-start">
              <span className="text-orange-500 text-xl mr-3 mt-1">•</span>
              <span className="text-gray-700 text-lg md:text-xl">Knowledge of Materia Medica and Organon</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-start">
              <span className="text-red-500 text-xl mr-3 mt-1">•</span>
              <span className="text-gray-700 text-lg md:text-xl">Patient counselling & communication</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-start">
              <span className="text-teal-500 text-xl mr-3 mt-1">•</span>
              <span className="text-gray-700 text-lg md:text-xl">Basic computer knowledge</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
  