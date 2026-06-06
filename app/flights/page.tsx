export default function Flights() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-sa-dark-blue text-sa-white p-6">
        <h1 className="text-3xl font-bold">Flight Schedule</h1>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-sa-white rounded-lg shadow overflow-hidden">
          <div className="bg-sa-blue text-sa-white p-4">
            <h2 className="text-xl font-bold">Your Scheduled Flights</h2>
          </div>
          <div className="p-6">
            <p className="text-gray-600">No flights scheduled at this time.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
