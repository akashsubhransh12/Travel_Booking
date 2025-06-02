import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, QrCode } from 'lucide-react';

const AppDownload: React.FC = () => {
  return (
    <div className="md:flex items-center justify-between">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Get the Travel Explorer App</h2>
          <p className="text-white/90 mb-6 text-lg">
            Take your travel planning to the next level with our mobile app. 
            Access exclusive deals, track your bookings, and explore destinations on the go.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-white/20 p-2 rounded-full mr-4 mt-1">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Real-time Updates</h3>
                <p className="text-white/80">
                  Get instant notifications about price drops, flight status, and weather changes.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-white/20 p-2 rounded-full mr-4 mt-1">
                <QrCode className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Offline Access</h3>
                <p className="text-white/80">
                  Access your bookings, tickets, and itineraries even without internet connection.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                <path d="M17.2 12l-3.4-3.4v6.8l3.4-3.4m1 .2L13 17.5V6.5l5.2 5.7M11 6.5v11L5.8 12.2 11 6.5"></path>
              </svg>
              <div className="text-left">
                <div className="text-xs">GET IT ON</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </button>
            
            <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                <path d="M12 20.7c0 .83.67 1.3 1.5 1.3s1.5-.47 1.5-1.3v-2.5h-3v2.5zm-6-2.5h12v-1H6v1zm14-3.5c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v9.7zM6 5h12v9.7H6V5z"></path>
              </svg>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </button>
          </div>
        </motion.div>
      </div>
      
      <div className="md:w-5/12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-white/10 rounded-2xl p-2 shadow-xl">
            <img
              src="https://images.pexels.com/photos/6168659/pexels-photo-6168659.jpeg"
              alt="Travel Explorer App"
              className="rounded-xl w-full"
            />
            
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl text-center max-w-[80%]">
                <h3 className="text-primary-500 font-bold text-lg mb-2">Scan to Download</h3>
                <div className="bg-white p-2 inline-block rounded-md mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    className="w-24 h-24"
                  >
                    <path d="M0 0h100v100H0z" fill="#fff"></path>
                    <path d="M10 10h10v10H10zm20 0h10v10H30zm20 0h10v10H50zm20 0h10v10H70zM10 30h10v10H10zm40 0h10v10H50zm20 0h10v10H70zM10 50h10v10H10zm20 0h10v10H30zm20 0h10v10H50zm20 0h10v10H70zM10 70h10v10H10zm20 0h10v10H30zm20 0h10v10H50zm20 0h10v10H70z" fill="#1A73E8"></path>
                  </svg>
                </div>
                <p className="text-gray-600 text-sm">
                  Use your phone's camera to scan the QR code
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AppDownload;