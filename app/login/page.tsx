export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-sa-blue to-sa-dark-blue px-4">
      <div className="w-full max-w-md bg-sa-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-sa-dark-blue mb-6 text-center">Staff Login</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sa-blue focus:border-transparent"
              placeholder="your.email@scottish-airways.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sa-blue focus:border-transparent"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-sa-dark-blue text-sa-white font-semibold rounded-lg hover:bg-sa-blue transition-colors"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
