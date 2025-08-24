import React, { useState, useRef, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { 
  FaChevronLeft, 
  FaChevronRight, 
  FaSearchPlus, 
  FaSearchMinus, 
  FaExpand, 
  FaCompress, 
  FaList, 
  FaDownload, 
  FaShare, 
  FaPrint,
  FaTimes
} from 'react-icons/fa';

// Images import or use public folder paths
import page1 from '../../assets/images/catelog/1.png';
import page2 from '../../assets/images/catelog/2.png';
import page3 from '../../assets/images/catelog/3.png';
import page4 from '../../assets/images/catelog/4.png';
import page5 from '../../assets/images/catelog/5.png';
import page6 from '../../assets/images/catelog/6.png';
import page7 from '../../assets/images/catelog/7.png';
import page8 from '../../assets/images/catelog/8.png';
import page9 from '../../assets/images/catelog/9.png';
import page10 from '../../assets/images/catelog/10.png';
import page11 from '../../assets/images/catelog/11.png';
import page12 from '../../assets/images/catelog/12.png';
import page13 from '../../assets/images/catelog/13.png';
import page14 from '../../assets/images/catelog/14.png';
import page15 from '../../assets/images/catelog/15.png';
import page16 from '../../assets/images/catelog/16.png';
import page17 from '../../assets/images/catelog/17.png';
import page18 from '../../assets/images/catelog/18.png';
import page19 from '../../assets/images/catelog/19.png';
import page20 from '../../assets/images/catelog/20.png';

const pages = [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14, page15, page16, page17, page18, page19, page20];

// Table of contents data
const tableOfContents = [
  { title: "Tile Leveling System", page: 4 },
  { title: "Rubber Mallet", page: 4 },
  { title: "Trowel", page: 6 },
  { title: "Tile Spacers", page: 6 },
  { title: "Carbide Tile Grout Saw", page: 8 },
  { title: "Rubber Float", page: 8 },
  { title: "ST9-1400 Mixer", page: 10 },
  { title: "Suction Cup", page: 12 },
  { title: "Cordless Tile Vibrator", page: 12 },
  { title: "Tile Shaping", page: 14 },
  { title: "Hole Marker", page: 14 }
];

const ImageFlipBook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [showTOC, setShowTOC] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [initialDistance, setInitialDistance] = useState(0);
  const [initialZoom, setInitialZoom] = useState(1);
  
  const flipBookRef = useRef(null);
  const containerRef = useRef(null);

  // Handle page change
  const handlePageChange = (e) => {
    setCurrentPage(e.data);
  };

  // Navigate to specific page
  const goToPage = (pageNumber) => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flip(pageNumber);
    }
  };

  // Navigate to previous page
  const goToPrevPage = () => {
    if (flipBookRef.current && currentPage > 0) {
      flipBookRef.current.pageFlip().flipPrev();
    }
  };

  // Navigate to next page
  const goToNextPage = () => {
    if (flipBookRef.current && currentPage < pages.length - 1) {
      flipBookRef.current.pageFlip().flipNext();
    }
  };

  // Zoom functions
  const zoomIn = () => {
    setZoom(prev => Math.min(prev + 0.2, 3));
  };

  const zoomOut = () => {
    setZoom(prev => Math.max(prev - 0.2, 0.5));
  };

  // Full screen toggle
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullScreen(true);
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  // Drag functionality for mouse
  const handleMouseDown = (e) => {
    if (zoom > 1) {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && zoom > 1) {
      e.preventDefault();
      e.stopPropagation();
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = (e) => {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsDragging(false);
  };

  // Touch functionality for mobile
  const handleTouchStart = (e) => {
    if (e.touches.length === 1 && zoom > 1) {
      // Single touch - dragging
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(true);
      const touch = e.touches[0];
      setDragStart({
        x: touch.clientX - position.x,
        y: touch.clientY - position.y
      });
    } else if (e.touches.length === 2) {
      // Two touches - pinch to zoom
      e.preventDefault();
      e.stopPropagation();
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const distance = Math.sqrt(
        Math.pow(touch2.clientX - touch1.clientX, 2) +
        Math.pow(touch2.clientY - touch1.clientY, 2)
      );
      setInitialDistance(distance);
      setInitialZoom(zoom);
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 1 && isDragging && zoom > 1) {
      // Single touch - dragging
      e.preventDefault();
      e.stopPropagation();
      const touch = e.touches[0];
      setPosition({
        x: touch.clientX - dragStart.x,
        y: touch.clientY - dragStart.y
      });
    } else if (e.touches.length === 2 && initialDistance > 0) {
      // Two touches - pinch to zoom
      e.preventDefault();
      e.stopPropagation();
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const distance = Math.sqrt(
        Math.pow(touch2.clientX - touch1.clientX, 2) +
        Math.pow(touch2.clientY - touch1.clientY, 2)
      );
      
      const scale = distance / initialDistance;
      const newZoom = Math.max(0.5, Math.min(3, initialZoom * scale));
      setZoom(newZoom);
    }
  };

  const handleTouchEnd = (e) => {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsDragging(false);
    setInitialDistance(0);
  };

  // Reset position when zoom changes
  useEffect(() => {
    if (zoom <= 1) {
      setPosition({ x: 0, y: 0 });
    }
  }, [zoom]);

  // Fullscreen change listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative bg-gray-100 ${isFullScreen ? 'w-screen h-screen' : 'w-full h-screen'}`}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Header */}
      <div className="bg-white shadow-sm border-b px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">
            pages: {currentPage + 1}-{Math.min(currentPage + 2, pages.length)} / {pages.length}
          </span>
        </div>
      </div>

      <div className="flex h-full">
        {/* Main Content Area */}
        <div className="flex-1 relative overflow-hidden">
          {/* Flip Buttons */}
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 0}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaChevronLeft size={20} />
          </button>

          <button
            onClick={goToNextPage}
            disabled={currentPage >= pages.length - 1}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaChevronRight size={20} />
          </button>

          {/* FlipBook Container */}
          <div 
            className="w-full h-full flex items-center justify-center mx-auto"
            style={{
              transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
              transformOrigin: 'center center',
              cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
              transition: isDragging ? 'none' : 'transform 0.1s ease-out',
              touchAction: zoom > 1 ? 'none' : 'auto',
              userSelect: 'none',
              WebkitUserSelect: 'none',
              WebkitTouchCallout: 'none'
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Overlay to prevent flipbook interaction when dragging */}
            {zoom > 1 && (
              <div 
                className="absolute inset-0 z-10"
                style={{
                  pointerEvents: isDragging ? 'auto' : 'none',
                  cursor: isDragging ? 'grabbing' : 'grab'
                }}
              />
            )}
            
            <HTMLFlipBook
              ref={flipBookRef}
              width={500}
              height={350}
              size="stretch"
              minWidth={315}
              maxWidth={1000}
              maxShadowOpacity={0.5}
              showCover={false}
              mobileScrollSupport={zoom <= 1}
              onFlip={handlePageChange}
              className="shadow-2xl"
              style={{
                pointerEvents: zoom > 1 ? 'none' : 'auto'
              }}
            >
              {pages.map((imgSrc, index) => (
                <div
                  key={`page_${index + 1}`}
                  className="page"
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={imgSrc}
                    alt={`Page ${index + 1}`}
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                    draggable={false}
                  />
                </div>
              ))}
            </HTMLFlipBook>
          </div>
        </div>
      </div>

      {/* Bottom Toolbar */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg px-4 py-2 flex items-center space-x-2">
        <button
          onClick={zoomOut}
          disabled={zoom <= 0.5}
          className="p-2 rounded-full text-gray-600 hover:bg-gray-200 transition-colors disabled:opacity-50"
          title="Zoom Out"
        >
          <FaSearchMinus size={16} />
        </button>

        <span className="text-sm text-gray-600 min-w-[40px] text-center">
          {Math.round(zoom * 100)}%
        </span>

        <button
          onClick={zoomIn}
          disabled={zoom >= 3}
          className="p-2 rounded-full text-gray-600 hover:bg-gray-200 transition-colors disabled:opacity-50"
          title="Zoom In"
        >
          <FaSearchPlus size={16} />
        </button>

        <div className="w-px h-6 bg-gray-300"></div>

        <button
          onClick={toggleFullScreen}
          className="p-2 rounded-full text-gray-600 hover:bg-gray-200 transition-colors"
          title={isFullScreen ? "Exit Full Screen" : "Full Screen"}
        >
          {isFullScreen ? <FaCompress size={16} /> : <FaExpand size={16} />}
        </button>
      </div>
    </div>
  );
};

export default ImageFlipBook;
