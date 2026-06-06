export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-sa-dark-blue text-sa-white p-6">
        <h1 className="text-3xl font-bold">Crew Dashboard</h1>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-sa-white rounded-lg shadow p-6 border-l-4 border-sa-blue">
            <h2 className="text-xl font-bold text-sa-dark-blue mb-2">Next Flight</h2>
            <p className="text-gray-600">Check your upcoming flight assignments</p>
          </div>

          {/* Card 2 */}
          <div className="bg-sa-white rounded-lg shadow p-6 border-l-4 border-sa-blue">
            <h2 className="text-xl font-bold text-sa-dark-blue mb-2">Messages</h2>
            <p className="text-gray-600">You have 0 new messages</p>
          </div>

          {/* Card 3 */}
          <div className="bg-sa-white rounded-lg shadow p-6 border-l-4 border-sa-blue">
            <h2 className="text-xl font-bold text-sa-dark-blue mb-2">Profile</h2>
            <p className="text-gray-600">Manage your crew information</p>
          </div>
        </div>
      </div>
    </div>
  );
}
