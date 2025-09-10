export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-16 mt-8 flex justify-center">
      <div className="w-full max-w-6xl px-4">
        <div className="text-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Dr. V. Nandhini B.H.M.S.</h3>
            <p className="text-lg">Tuticorin, Tamil Nadu</p>
            <p className="text-md">📞 +91-XXXXXXXXXX | ✉️ nandhinikiwi@gmail.com</p>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-600 text-base text-gray-400">
            &copy; {new Date().getFullYear()} Dr. Nandhini | All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
  
  