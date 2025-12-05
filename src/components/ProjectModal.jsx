import { useState, useEffect } from "react";

export default function ProjectModal({ project, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!project) return null;

  const screenshots = project.screenshots || [project.image];

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  // Disable background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">

      {/* Modal Container */}
      <div className="
        relative w-[95%] max-w-[1000px] max-h-[90vh] overflow-y-auto sm:rounded-2xl
        bg-[#101010] backdrop-blur-xl border border-white/10 shadow-2xl
        flex flex-col
      ">

        {/* Sticky Header */}
        <header className="
          sticky top-0 z-10 flex items-center justify-between px-6 py-1
          bg-black/60 backdrop-blur-md border-b border-purple-700/40
        ">
          <h2 className="text-[#A855F7] text-lg font-semibold">{project.title}</h2>

         <button
  onClick={onClose}
  className="
    text-gray-500 text-3xl font-light
    cursor-pointer
    rounded-full
    flex items-center justify-center
    hover:text-white
    transform duration-75
    hover:scale-110
  "
>
  &times;
</button>

        </header>

        {/* Main Image Preview */}
        <div className="relative flex flex-col items-center px-6 py-4">
          <img
            src={screenshots[currentIndex]}
            className="w-full max-h-[55vh] object-contain rounded-xl shadow-lg"
          />

          {/* Prev / Next Buttons */}
          {screenshots.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="
                  absolute left-2 top-1/2 -translate-y-1/2 text-white text-4xl
                  px-3 hover:text-purple-500 cursor-pointer
                "
              >
                &#10094;
              </button>

              <button
                onClick={handleNext}
                className="
                  absolute right-2 top-1/2 -translate-y-1/2 text-white text-4xl
                  px-3 hover:text-purple-500 cursor-pointer
                "
              >
                &#10095;
              </button>
            </>
          )}

          {/* Centered Thumbnails */}
{screenshots.length > 1 && (
  <div className="flex gap-3 mt-4 justify-center px-2 pb-4 
                  overflow-x-auto">
    {screenshots.map((img, idx) => (
      <img
        key={idx}
        src={img}
        onClick={() => setCurrentIndex(idx)}
        className={`
         w-18 h-12 md:h-16 object-cover rounded-lg cursor-pointer
          transition-all border
          ${idx === currentIndex
            ? "border-purple-500 drop-shadow-[0_0_2px_rgba(168,85,247,0.7)] shadow-lg"
            : "border-transparent opacity-70 hover:opacity-100"}
        `}
      />
    ))}
  </div>
)}

        </div>

        {/* Content Section (Left/Right) */}
        <div className="flex flex-col lg:flex-row px-6 pb-6 gap-6">

          {/* Left: Description */}
          <div className="lg:w-1/2 bg-[#0B0B0B] rounded p-4">
            <h3 className="text-white font-medium mb-2 uppercase">About this project</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
          </div>

          {/* Right: Technologies + Links */}
          <div className="lg:w-1/2 flex flex-col gap-4 bg-[#0B0B0B] rounded p-4">

            {/* Technologies */}
            {project.technologies && (
              <div>
                <h3 className="text-white font-medium mb-2 uppercase">Built with</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1 px-2 py-1 rounded bg-[#101010] hover:bg-purple-700/20 transition"
                    >
                      <img src={tech.icon} className="w-4 h-4" />
                      <span className="text-[11px] text-gray-200">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Links */}
            {project.links && (
              <div>
                <h3 className="text-white font-medium mb-2 uppercase">Links</h3>
                <div className="flex flex-wrap gap-3">
                  {project.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex items-center gap-2 px-3 py-1 rounded bg-[#101010]
                        text-white hover:bg-[#A855F7]/30 transition shadow
                      "
                    >
                      <img src={link.icon} className="w-4 h-4" />
                      <span className="text-[11px]">{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}
