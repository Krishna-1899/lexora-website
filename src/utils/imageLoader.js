/**
 * Utility function to handle image loading and provide fallbacks
 * @param {string} src - The image source path
 * @param {string} fallback - Optional fallback image path
 * @returns {string} - The resolved image path
 */
export const getImagePath = (src, fallback = null) => {
  // Check if the src is a full URL
  if (src.startsWith('http')) {
    return src;
  }
  
  // For local images, ensure they're in the public folder
  try {
    // Try to use the path as is
    return src;
  } catch (error) {
    // If there's an error, try with the fallback
    if (fallback) {
      return fallback;
    }
    
    // If no fallback, return a placeholder
    return 'https://via.placeholder.com/300';
  }
};

/**
 * Utility function to preload important images
 * @param {Array} imagePaths - Array of image paths to preload
 */
export const preloadImages = (imagePaths) => {
  imagePaths.forEach(path => {
    const img = new Image();
    img.src = getImagePath(path);
  });
};

export default {
  getImagePath,
  preloadImages
}; 