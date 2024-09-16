export default function makePosition({
  activeIndex,
  aspectRatio,
  gap,
  gutter,
  screenWidth,
  numVideos,
  minVideoWidth,
}) {
  const availableWidth = screenWidth - 2 * gutter;

  const maxCols = Math.floor(availableWidth / (minVideoWidth + gap));
  const numRows = Math.ceil(numVideos / maxCols);

  let videoWidth = Math.max(
    minVideoWidth,
    (availableWidth - (maxCols - 1) * gap) / maxCols
  );
  let videoHeight = videoWidth / aspectRatio;

  const positions = { pos: [], spot: [] };
  const occupied = Array(numRows * maxCols).fill(false);

  const markOccupied = (col, row, spanCols, spanRows) => {
    for (let r = row; r < row + spanRows; r++) {
      for (let c = col; c < col + spanCols; c++) {
        if (r < numRows && c < maxCols) {
          occupied[r * maxCols + c] = true;
        }
      }
    }
  };

  const findNextAvailableSpot = (startCol, startRow, spanX, spanY) => {
    for (let row = startRow; row < numRows; row++) {
      for (let col = startCol; col < maxCols; col++) {
        if (col + spanX <= maxCols && row + spanY <= numRows) {
          let fits = true;
          for (let r = row; r < row + spanY; r++) {
            for (let c = col; c < col + spanX; c++) {
              if (occupied[r * maxCols + c]) {
                fits = false;
                break;
              }
            }
            if (!fits) break;
          }
          if (fits) return { col, row };
        }
      }
    }
    throw new Error("No available spot found");
  };

  for (let i = 0; i < numVideos; i++) {
    let col, row, x, y;
    let spanCols = 1;
    let spanRows = 1;

    col = i % maxCols;
    row = Math.floor(i / maxCols);

    if (i === activeIndex) {
      let spanWidth = videoWidth;
      let spanHeight = videoHeight;

      if (maxCols > 1) {
        spanWidth = 2 * (videoWidth + gap) - gap;
        spanHeight = 2 * (videoHeight + gap) - gap;
        spanCols = 2;
        spanRows = 2;
      }

      x = gutter + col * (videoWidth + gap);
      y = gutter + row * (videoHeight + gap);

      if (col + spanCols > maxCols) {
        col = Math.max(col - 1, 0);
        x = gutter + col * (videoWidth + gap);
      }
      if (row + spanRows > numRows) {
        row = Math.max(row - 1, 0);
        y = gutter + row * (videoHeight + gap);
      }

      markOccupied(col, row, spanCols, spanRows);

      positions.spot.push({ col, row });
      positions.pos.push({ x, y, width: spanWidth, height: spanHeight });
    } else {
      try {
        const { col: newCol, row: newRow } = findNextAvailableSpot(
          col,
          row,
          1,
          1
        );

        x = gutter + newCol * (videoWidth + gap);
        y = gutter + newRow * (videoHeight + gap);

        markOccupied(newCol, newRow, 1, 1);

        positions.spot.push({ col: newCol, row: newRow });
        positions.pos.push({ x, y, width: videoWidth, height: videoHeight });
      } catch (e) {
        console.error(e.message);
      }
    }
  }

  return {
    occupied,
    positions,
    maxCols,
    numRows,
  };
}
