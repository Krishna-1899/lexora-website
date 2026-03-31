import React, { useState, useRef, useEffect, useCallback } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { pdfToImages } from '../../utils/pdfToImages';
import {
  FaChevronLeft,
  FaChevronRight,
  FaSearchPlus,
  FaSearchMinus,
  FaExpand,
  FaCompress,
  FaStepBackward,
  FaStepForward,
  FaTh,
  FaDownload,
  FaTimes,
} from 'react-icons/fa';

const PdfFlipBook = ({ pdfUrl, images: imagesProp, title = 'LEXORA CHEMBOND' }) => {
  const [pages, setPages] = useState(imagesProp || []);
  const [loading, setLoading] = useState(!!pdfUrl && !imagesProp?.length);
  const [loadedCount, setLoadedCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [initialDistance, setInitialDistance] = useState(0);
  const [initialZoom, setInitialZoom] = useState(1);
  const [showThumbnails, setShowThumbnails] = useState(true);

  const flipBookRef = useRef(null);
  const containerRef = useRef(null);
  const thumbnailRef = useRef(null);
  const activeThumbnailRef = useRef(null);

  // Load PDF and convert to images
  useEffect(() => {
    if (imagesProp?.length) {
      setPages(imagesProp);
      setLoading(false);
      return;
    }
    if (!pdfUrl) { setLoading(false); return; }

    let cancelled = false;
    setLoading(true);
    setError(null);
    setLoadedCount(0);

    const load = async () => {
      try {
        // onPageReady fires for each page as it finishes (including background pages)
        const onPageReady = (index, dataUrl) => {
          if (cancelled) return;
          setPages((prev) => {
            const next = [...prev];
            next[index] = dataUrl;
            return next;
          });
          setLoadedCount(index + 1);
        };

        const { images, numPages } = await pdfToImages(
          pdfUrl,
          (count, total) => { if (!cancelled) setTotalCount(total); },
          onPageReady,
          4  // open flipbook after just 4 pages — rest load in background
        );

        if (!cancelled) {
          setPages(images);   // set full array (with blanks) so flipbook has correct page count
          setLoading(false);  // show flipbook immediately
        }
      } catch (err) {
        if (!cancelled) {
          setError(err?.message || 'Failed to load PDF');
          setLoading(false);
        }
      }
    };

    load();
    return () => { cancelled = true; };
  }, [pdfUrl, imagesProp]);

  // Scroll active thumbnail into view
  useEffect(() => {
    if (activeThumbnailRef.current && thumbnailRef.current) {
      activeThumbnailRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [currentPage]);

  const getPageDisplayInfo = useCallback(() => {
    if (pages.length === 0) return { pageNumber: '—', totalPages: 0 };
    if (currentPage === 0) return { pageNumber: 1, totalPages: pages.length };
    if (currentPage === pages.length - 1) return { pageNumber: pages.length, totalPages: pages.length };
    return { pageNumber: `${currentPage + 1} – ${currentPage + 2}`, totalPages: pages.length };
  }, [pages.length, currentPage]);

  const getPageFlip = () => {
    const inst = flipBookRef.current;
    if (!inst || typeof inst.pageFlip !== 'function') return null;
    const api = inst.pageFlip();
    if (!api || typeof api.flip !== 'function') return null;
    return api;
  };

  const handlePageChange = (e) => setCurrentPage(e.data ?? 0);

  const goToPage = (pageNumber) => { const api = getPageFlip(); if (api) api.flip(pageNumber); };
  const goToPrevPage = () => { const api = getPageFlip(); if (api && currentPage > 0) api.flipPrev(); };
  const goToNextPage = () => { const api = getPageFlip(); if (api && currentPage < pages.length - 1) api.flipNext(); };
  const goToFirstPage = () => { const api = getPageFlip(); if (api && currentPage > 0) api.flip(0); };
  const goToLastPage = () => { const api = getPageFlip(); if (api && currentPage < pages.length - 1) api.flip(pages.length - 1); };

  const zoomIn = () => setZoom((p) => Math.min(p + 0.2, 3));
  const zoomOut = () => setZoom((p) => Math.max(p - 0.2, 0.5));

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullScreen(true);
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  // Drag handlers
  const handleMouseDown = (e) => {
    if (zoom > 1) { e.preventDefault(); e.stopPropagation(); setIsDragging(true); setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y }); }
  };
  const handleMouseMove = (e) => {
    if (isDragging && zoom > 1) { e.preventDefault(); e.stopPropagation(); setPosition({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y }); }
  };
  const handleMouseUp = (e) => { if (isDragging) { e.preventDefault(); e.stopPropagation(); } setIsDragging(false); };

  // Touch handlers
  const handleTouchStart = (e) => {
    if (e.touches.length === 1 && zoom > 1) {
      e.preventDefault(); e.stopPropagation(); setIsDragging(true);
      const t = e.touches[0]; setDragStart({ x: t.clientX - position.x, y: t.clientY - position.y });
    } else if (e.touches.length === 2) {
      e.preventDefault(); e.stopPropagation();
      const d = Math.hypot(e.touches[1].clientX - e.touches[0].clientX, e.touches[1].clientY - e.touches[0].clientY);
      setInitialDistance(d); setInitialZoom(zoom);
    }
  };
  const handleTouchMove = (e) => {
    if (e.touches.length === 1 && isDragging && zoom > 1) {
      e.preventDefault(); e.stopPropagation();
      const t = e.touches[0]; setPosition({ x: t.clientX - dragStart.x, y: t.clientY - dragStart.y });
    } else if (e.touches.length === 2 && initialDistance > 0) {
      e.preventDefault(); e.stopPropagation();
      const d = Math.hypot(e.touches[1].clientX - e.touches[0].clientX, e.touches[1].clientY - e.touches[0].clientY);
      setZoom(Math.max(0.5, Math.min(3, initialZoom * (d / initialDistance))));
    }
  };
  const handleTouchEnd = (e) => { if (isDragging) { e.preventDefault(); e.stopPropagation(); } setIsDragging(false); setInitialDistance(0); };

  useEffect(() => { if (zoom <= 1) setPosition({ x: 0, y: 0 }); }, [zoom]);
  useEffect(() => {
    const handler = () => setIsFullScreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handler);
    return () => document.removeEventListener('fullscreenchange', handler);
  }, []);

  // Which pages are "active" (visible in current spread)
  const isActivePage = (idx) => {
    if (currentPage === 0) return idx === 0;
    if (currentPage === pages.length - 1) return idx === pages.length - 1;
    return idx === currentPage || idx === currentPage + 1;
  };

  /* ── Loading state ── */
  if (loading) {
    const pct = totalCount > 0 ? Math.round((loadedCount / totalCount) * 100) : 0;
    return (
      <div className="catalog-reader catalog-reader--center">
        <div className="text-center">
          <div className="relative w-20 h-20 mx-auto mb-6">
            <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6" />
              <circle cx="40" cy="40" r="34" fill="none" stroke="#FF861E" strokeWidth="6"
                strokeDasharray={`${2 * Math.PI * 34}`}
                strokeDashoffset={`${2 * Math.PI * 34 * (1 - pct / 100)}`}
                strokeLinecap="round"
                style={{ transition: 'stroke-dashoffset 0.4s ease' }}
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">{pct}%</span>
          </div>
          <p className="text-white/70 text-sm tracking-wide uppercase">
            {totalCount > 0 ? `Loading page ${loadedCount} of ${totalCount}` : 'Preparing catalog…'}
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="catalog-reader catalog-reader--center">
        <div className="text-center text-red-400 bg-red-900/30 border border-red-700/40 rounded-xl p-8 max-w-md">
          <p className="font-semibold text-lg mb-2">Failed to load catalog</p>
          <p className="text-sm text-red-300/70">{error}</p>
        </div>
      </div>
    );
  }

  if (pages.length === 0) {
    return (
      <div className="catalog-reader catalog-reader--center">
        <p className="text-white/40">No catalog pages found.</p>
      </div>
    );
  }

  const { pageNumber, totalPages } = getPageDisplayInfo();

  return (
    <div
      ref={containerRef}
      className={`catalog-reader${isFullScreen ? ' catalog-reader--fullscreen' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* ── Top bar ── */}
      <div className="catalog-topbar">
        <div className="catalog-topbar__left">
          <button
            onClick={() => setShowThumbnails((v) => !v)}
            className={`catalog-topbar__btn ${showThumbnails ? 'active' : ''}`}
            title="Toggle thumbnails"
          >
            <FaTh size={14} />
            <span>Thumbnails</span>
          </button>
        </div>

        <div className="catalog-topbar__center">
          <span className="catalog-topbar__title">{title}</span>
          <span className="catalog-topbar__divider">|</span>
          <span className="catalog-topbar__pages">
            pages: <strong>{pageNumber}</strong> / {totalPages}
          </span>
        </div>

        <div className="catalog-topbar__right">
          <a
            href={pdfUrl}
            download
            className="catalog-topbar__btn"
            title="Download PDF"
          >
            <FaDownload size={13} />
            <span className="hidden sm:inline">Download</span>
          </a>
          <button
            onClick={toggleFullScreen}
            className="catalog-topbar__btn"
            title={isFullScreen ? 'Exit fullscreen' : 'Fullscreen'}
          >
            {isFullScreen ? <FaCompress size={14} /> : <FaExpand size={14} />}
          </button>
        </div>
      </div>

      {/* ── Body: thumbnail sidebar + book ── */}
      <div className="catalog-body">

        {/* Thumbnail sidebar */}
        {showThumbnails && (
          <div className="catalog-thumbs" ref={thumbnailRef}>
            <div className="catalog-thumbs__header">
              <span>Thumbnails</span>
              <button onClick={() => setShowThumbnails(false)} className="catalog-thumbs__close">
                <FaTimes size={12} />
              </button>
            </div>
            <div className="catalog-thumbs__list">
              {pages.map((src, idx) => (
                <button
                  key={idx}
                  ref={isActivePage(idx) ? activeThumbnailRef : null}
                  onClick={() => goToPage(idx)}
                  className={`catalog-thumb ${isActivePage(idx) ? 'active' : ''}`}
                  title={`Page ${idx + 1}`}
                >
                  <img src={src} alt={`Page ${idx + 1}`} />
                  <span className="catalog-thumb__num">{idx + 1}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Main book area — no drag handlers here so buttons stay clickable */}
        <div className="catalog-main">
          {/* Prev arrow */}
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 0}
            className="catalog-nav catalog-nav--prev"
          >
            <FaChevronLeft size={18} />
          </button>

          {/* Flipbook — full-width wrapper so stretch mode fills the container */}
          <div className="catalog-book-wrap">
            <div
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              style={{
                width: '100%',
                transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
                transformOrigin: 'top center',
                cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
                transition: isDragging ? 'none' : 'transform 0.15s ease-out',
                touchAction: zoom > 1 ? 'none' : 'auto',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                boxShadow: '0 24px 60px rgba(0,0,0,0.55)',
                borderRadius: '2px',
              }}
            >
            {zoom > 1 && (
              <div style={{ position: 'absolute', inset: 0, zIndex: 10, pointerEvents: isDragging ? 'auto' : 'none', cursor: isDragging ? 'grabbing' : 'grab' }} />
            )}
            <div className="pdf-flip-book-outer">
              <HTMLFlipBook
                startPage={0}
                useMouseEvents={true}
                ref={flipBookRef}
                width={380}
                height={537}
                size="stretch"
                minWidth={120}
                maxWidth={380}
                minHeight={170}
                maxHeight={537}
                usePortrait={false}
                maxShadowOpacity={0.6}
                showCover={true}
                mobileScrollSupport={zoom <= 1}
                onFlip={handlePageChange}
                style={{ pointerEvents: zoom > 1 ? 'none' : 'auto' }}
              >
                {pages.map((imgSrc, index) => (
                  <div
                    key={`page_${index + 1}`}
                    className="page"
                    style={{ width: '100%', height: '100%', backgroundColor: '#fff' }}
                  >
                    <img
                      src={imgSrc}
                      alt={`Page ${index + 1}`}
                      style={{ display: 'block', width: '100%', height: '100%', objectFit: 'fill' }}
                      draggable={false}
                    />
                  </div>
                ))}
              </HTMLFlipBook>
            </div>
            </div>
          </div>{/* end catalog-book-wrap */}

          {/* Next arrow */}
          <button
            onClick={goToNextPage}
            disabled={currentPage >= pages.length - 1}
            className="catalog-nav catalog-nav--next"
          >
            <FaChevronRight size={18} />
          </button>

          {/* Bottom floating toolbar */}
          <div className="catalog-toolbar">
            <button onClick={goToFirstPage} disabled={currentPage === 0} className="catalog-toolbar__btn" title="First page">
              <FaStepBackward size={13} />
            </button>
            <button onClick={goToPrevPage} disabled={currentPage === 0} className="catalog-toolbar__btn" title="Previous">
              <FaChevronLeft size={13} />
            </button>

            <div className="catalog-toolbar__divider" />

            <button onClick={zoomOut} disabled={zoom <= 0.5} className="catalog-toolbar__btn" title="Zoom out">
              <FaSearchMinus size={13} />
            </button>
            <span className="catalog-toolbar__zoom">{Math.round(zoom * 100)}%</span>
            <button onClick={zoomIn} disabled={zoom >= 3} className="catalog-toolbar__btn" title="Zoom in">
              <FaSearchPlus size={13} />
            </button>

            <div className="catalog-toolbar__divider" />

            <button onClick={toggleFullScreen} className="catalog-toolbar__btn" title={isFullScreen ? 'Exit fullscreen' : 'Fullscreen'}>
              {isFullScreen ? <FaCompress size={13} /> : <FaExpand size={13} />}
            </button>

            <div className="catalog-toolbar__divider" />

            <button onClick={goToNextPage} disabled={currentPage >= pages.length - 1} className="catalog-toolbar__btn" title="Next">
              <FaChevronRight size={13} />
            </button>
            <button onClick={goToLastPage} disabled={currentPage >= pages.length - 1} className="catalog-toolbar__btn" title="Last page">
              <FaStepForward size={13} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfFlipBook;
