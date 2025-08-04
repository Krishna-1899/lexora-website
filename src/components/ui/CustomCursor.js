import React, { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor__cursor');
    const cursorTwo = document.querySelector('.custom-cursor__cursor-two');
    
    if (!cursor || !cursorTwo) return;
    
    let cursorX = 0;
    let cursorY = 0;
    let cursorTwoX = 0;
    let cursorTwoY = 0;
    
    const moveCursor = (e) => {
      cursorX = e.clientX;
      cursorY = e.clientY;
    };
    
    const handleMouseDown = () => {
      cursor.classList.add('active');
      cursorTwo.classList.add('active');
    };
    
    const handleMouseUp = () => {
      cursor.classList.remove('active');
      cursorTwo.classList.remove('active');
    };
    
    const handleLinkHover = () => {
      cursor.classList.add('hover');
      cursorTwo.classList.add('hover');
    };
    
    const handleLinkLeave = () => {
      cursor.classList.remove('hover');
      cursorTwo.classList.remove('hover');
    };
    
    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    // Add hover effect to all links and buttons
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHover);
      link.addEventListener('mouseleave', handleLinkLeave);
    });
    
    // Animation loop for smoother cursor movement
    const render = () => {
      // Add easing to cursor movement
      cursorTwo.style.left = `${cursorTwoX}px`;
      cursorTwo.style.top = `${cursorTwoY}px`;
      
      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;
      
      // Smooth follow for second cursor
      cursorTwoX += (cursorX - cursorTwoX) * 0.2;
      cursorTwoY += (cursorY - cursorTwoY) * 0.2;
      
      requestAnimationFrame(render);
    };
    
    requestAnimationFrame(render);
    
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHover);
        link.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);
  
  return (
    <>
      <div className="custom-cursor__cursor"></div>
      <div className="custom-cursor__cursor-two"></div>
    </>
  );
};

export default CustomCursor; 