export default function makePosition({
  aspectRatio,
  gap,
  gutter,
  screenHeight,
  screenWidth,
  numVideos,
  minVideoWidth,
}) {
  const availableWidth = screenWidth - 2 * gutter;
  const availableHeight = screenHeight - 2 * gutter;

  const maxCols = Math.floor(availableWidth / (minVideoWidth + gap));
  const numRows = Math.ceil(numVideos / maxCols);

  let videoWidth = Math.max(
    minVideoWidth,
    (availableWidth - (maxCols - 1) * gap) / maxCols
  );
  let videoHeight = videoWidth / aspectRatio;

  const positions = { pos: [], spot: [] };
  for (let i = 0; i < numVideos; i++) {
    const col = i % maxCols;
    const row = Math.floor(i / maxCols);

    positions.spot.push({ col, row });

    const x = gutter + col * (videoWidth + gap);
    const y = gutter + row * (videoHeight + gap);

    positions.pos.push({ x, y });
  }

  return {
    videoWidth,
    videoHeight,
    positions,
    maxCols,
    numRows,
  };
}
