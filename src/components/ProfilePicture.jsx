
import profilePic from '../assets/profile.jpg';

export default function ProfilePicture() {
  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="w-30 h-30 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg bg-white bg-opacity-20 flex items-center justify-center">
        {/* Placeholder until you add the actual image */}
        {/* <span className="text-black text-xs md:text-sm font-semibold text-center">Dr.<br/>Nandhini</span> */}
        {/* Uncomment and add your image when ready */}
        <img
          src={profilePic}
          alt="Dr. Nandhini"
          className="w-full h-full rounded-full object-cover"
        />
      </div>
    </div>
  );
}
  