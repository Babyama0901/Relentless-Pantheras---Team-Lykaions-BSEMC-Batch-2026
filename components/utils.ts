export function getAssetPath(path: string) {
  // Check if it's already an absolute URL or data URI
  if (path.startsWith('http') || path.startsWith('data:')) {
    return path;
  }
  // Ensure path starts with a slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  if (process.env.NODE_ENV === 'production') {
    return `/Relentless-Pantheras---Team-Lykaions-BSEMC-Batch-2026${normalizedPath}`;
  }
  return normalizedPath;
}
