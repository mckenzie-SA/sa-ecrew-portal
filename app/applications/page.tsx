export default function Applications() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-sa-dark-blue text-sa-white p-6">
        <h1 className="text-3xl font-bold">Recruitment Applications</h1>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-sa-white rounded-lg shadow p-8 text-center">
          <h2 className="text-2xl font-bold text-sa-dark-blue mb-4">Join Our Crew</h2>
          <p className="text-gray-600 mb-6">
            Scottish Airways is currently seeking talented crew members. Apply now to be part of our team.
          </p>
          <button className="px-8 py-3 bg-sa-blue text-sa-white font-semibold rounded-lg hover:bg-sa-dark-blue transition-colors">
            Start Application
          </button>
        </div>
      </div>
    </div>
  );
}
