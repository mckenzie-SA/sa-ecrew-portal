export default function Admin() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-sa-dark-blue text-sa-white p-6">
        <h1 className="text-3xl font-bold">Admin Management Tools</h1>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Management Cards */}
          <div className="bg-sa-white rounded-lg shadow p-6 border-t-4 border-sa-dark-blue hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold text-sa-dark-blue mb-2">User Management</h2>
            <p className="text-gray-600">Manage user accounts and permissions</p>
          </div>

          <div className="bg-sa-white rounded-lg shadow p-6 border-t-4 border-sa-blue hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold text-sa-dark-blue mb-2">Flight Management</h2>
            <p className="text-gray-600">Create and manage flight schedules</p>
          </div>

          <div className="bg-sa-white rounded-lg shadow p-6 border-t-4 border-sa-dark-blue hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold text-sa-dark-blue mb-2">Reports</h2>
            <p className="text-gray-600">View crew and flight statistics</p>
          </div>

          <div className="bg-sa-white rounded-lg shadow p-6 border-t-4 border-sa-blue hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold text-sa-dark-blue mb-2">Settings</h2>
            <p className="text-gray-600">System configuration and preferences</p>
          </div>
        </div>
      </div>
    </div>
  );
}
