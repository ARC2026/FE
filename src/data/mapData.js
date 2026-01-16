// 각 탭별 맵 데이터 설정

// ALL 탭 데이터 (map_background.svg 기준)
// viewBox: "0 0 594 610"
const allMapData = {
  viewBox: { width: 594, height: 610 },
  fixedSize: { width: 594, height: 610 }, // 고정 픽셀 크기
  rawArtworks: [
    // Place 1 (빨간색) - SVG에서 추출한 원본 좌표
    { order: 1, cx: 46.773, cy: 266.52, type: 'place1' },
    { order: 2, cx: 78.2144, cy: 266.52, type: 'place1' },
    { order: 3, cx: 108.326, cy: 266.52, type: 'place1' },
    { order: 4, cx: 138.853, cy: 266.52, type: 'place1' },
    { order: 5, cx: 169.382, cy: 266.52, type: 'place1' },
    { order: 6, cx: 211.343, cy: 266.52, type: 'place1' },
    { order: 7, cx: 241.961, cy: 266.52, type: 'place1' },
    { order: 8, cx: 272.406, cy: 266.52, type: 'place1' },
    { order: 9, cx: 303.027, cy: 266.52, type: 'place1' },
    { order: 10, cx: 333.543, cy: 266.52, type: 'place1' },
    { order: 11, cx: 379.406, cy: 241.862, type: 'place1' },
    { order: 12, cx: 379.406, cy: 216.62, type: 'place1' },
    { order: 13, cx: 379.406, cy: 191.382, type: 'place1' },
    { order: 14, cx: 379.406, cy: 166.14, type: 'place1' },
    { order: 15, cx: 349.406, cy: 129.14, type: 'place1' },
    { order: 16, cx: 367.406, cy: 101.14, type: 'place1' },
    { order: 17, cx: 295.406, cy: 185.14, type: 'place1' },
    { order: 18, cx: 230.921, cy: 184.061, type: 'place1' },
    { order: 19, cx: 263.777, cy: 139.817, type: 'place1' },
    { order: 20, cx: 169.957, cy: 153.774, type: 'place1' },
    { order: 21, cx: 169.957, cy: 128.963, type: 'place1' },
    { order: 22, cx: 169.957, cy: 104.156, type: 'place1' },
    { order: 23, cx: 169.957, cy: 79.3453, type: 'place1' },
    { order: 24, cx: 169.957, cy: 54.5342, type: 'place1' },
    { order: 25, cx: 214.406, cy: 44.1402, type: 'place1' },
    { order: 26, cx: 247.406, cy: 44.1402, type: 'place1' },
    { order: 27, cx: 279.687, cy: 44.1402, type: 'place1' },
    { order: 28, cx: 311.966, cy: 44.1402, type: 'place1' },
    { order: 29, cx: 344.246, cy: 44.1402, type: 'place1' },
    { order: 30, cx: 376.527, cy: 44.1402, type: 'place1' },
    { order: 31, cx: 524.248, cy: 96.1402, type: 'place1' },
    { order: 32, cx: 535.406, cy: 149.14, type: 'place1' },
    { order: 33, cx: 524.248, cy: 198.14, type: 'place1' },
    { order: 34, cx: 409.859, cy: 148.748, type: 'place1' },
    
    // Place 2 (파란색) - SVG에서 추출한 원본 좌표
    { order: 35, cx: 460.232, cy: 297.274, type: 'place2' },
    { order: 36, cx: 405.414, cy: 367.14, type: 'place2' },
    { order: 37, cx: 405.414, cy: 411.14, type: 'place2' },
    { order: 38, cx: 365.822, cy: 497.028, type: 'place2' },
    { order: 39, cx: 427.406, cy: 532.493, type: 'place2' },
    { order: 40, cx: 461.406, cy: 532.14, type: 'place2' },
    { order: 41, cx: 474.474, cy: 481.487, type: 'place2' },
    { order: 42, cx: 474.474, cy: 434.583, type: 'place2' },
    { order: 43, cx: 535.406, cy: 365.14, type: 'place2' },
    { order: 44, cx: 579.738, cy: 383.066, type: 'place2' },
    { order: 45, cx: 562.332, cy: 475.47, type: 'place2' },
    { order: 46, cx: 562.332, cy: 537.115, type: 'place2' },
    { order: 47, cx: 578.406, cy: 578.875, type: 'place2' },
    { order: 48, cx: 527.406, cy: 595.14, type: 'place2' },
    { order: 49, cx: 479.406, cy: 578.875, type: 'place2' },
    { order: 50, cx: 496.431, cy: 537.115, type: 'place2' },
    { order: 51, cx: 496.431, cy: 493.971, type: 'place2' },
    { order: 52, cx: 496.431, cy: 441.455, type: 'place2' },
  ],
};

// PLACE1 탭 데이터 (map_place1.svg 기준)
// viewBox: "0 0 649 339"
const place1MapData = {
  viewBox: { width: 649, height: 339 },
  fixedSize: { width: 968, height: 532.4 }, // 고정 픽셀 크기 (10% 더 확대: 880 * 1.1 = 968, 484 * 1.1 = 532.4)
  // fixedSize: { width: 623.85, height: 343.05 }, // 고정 픽셀 크기 (캡쳐 기준)
  rawArtworks: [
    // map_place1.svg에서 추출한 좌표 (1-35번)
    { order: 1, cx: 79.7703, cy: 230.06, type: 'place1' },
    { order: 2, cx: 113.208, cy: 230.06, type: 'place1' },
    { order: 3, cx: 145.229, cy: 230.06, type: 'place1' },
    { order: 4, cx: 177.696, cy: 230.06, type: 'place1' },
    { order: 5, cx: 210.163, cy: 230.06, type: 'place1' },
    { order: 6, cx: 254.442, cy: 230.06, type: 'place1' },
    { order: 7, cx: 287.442, cy: 230.06, type: 'place1' },
    { order: 8, cx: 339.893, cy: 230.06, type: 'place1' },
    { order: 9, cx: 372.356, cy: 230.06, type: 'place1' },
    { order: 10, cx: 404.656, cy: 230.06, type: 'place1' },
    { order: 11, cx: 436.856, cy: 228.066, type: 'place1' },
    { order: 12, cx: 436.856, cy: 213.024, type: 'place1' },
    { order: 13, cx: 436.856, cy: 198.778, type: 'place1' },
    { order: 14, cx: 436.856, cy: 183.648, type: 'place1' },
    { order: 15, cx: 436.856, cy: 169.348, type: 'place1' },
    { order: 16, cx: 434.356, cy: 148.555, type: 'place1' },
    { order: 17, cx: 404.056, cy: 148.555, type: 'place1' },
    { order: 18, cx: 348.493, cy: 182.448, type: 'place1' },
    { order: 19, cx: 275.493, cy: 182.448, type: 'place1' },
    { order: 20, cx: 310.608, cy: 157.066, type: 'place1' },
    { order: 21, cx: 210.763, cy: 165.153, type: 'place1' },
    { order: 22, cx: 210.763, cy: 150.653, type: 'place1' },
    { order: 23, cx: 210.763, cy: 136.153, type: 'place1' },
    { order: 24, cx: 210.763, cy: 121.653, type: 'place1' },
    { order: 25, cx: 210.763, cy: 107.153, type: 'place1' },
    { order: 26, cx: 295.842, cy: 101.7048, type: 'place1' },
    { order: 27, cx: 328.363, cy: 101.7048, type: 'place1' },
    { order: 28, cx: 370.363, cy: 101.7048, type: 'place1' },
    { order: 29, cx: 401.373, cy: 101.7048, type: 'place1' },
    { order: 30, cx: 432.363, cy: 101.7048, type: 'place1' },
    { order: 31, cx: 463.626, cy: 101.7048, type: 'place1' },
    { order: 32, cx: 494.653, cy: 101.7048, type: 'place1' },
    { order: 33, cx: 465.711, cy: 162.007, type: 'place1' },
    { order: 34, cx: 587.359, cy: 133.153, type: 'place1' },
    { order: 35, cx: 587.309, cy: 189.996, type: 'place1' },
  ],
};

// PLACE2 탭 데이터 (map_place2.svg 기준)
// viewBox: "0 0 422 486"
const place2MapData = {
  viewBox: { width: 422, height: 486 },
  // fixedSize: { width: 421.08, height: 450.5 }, // 고정 픽셀 크기 (캡쳐 기준)
  fixedSize: { width: 447.4, height: 478.66 }, // 고정 픽셀 크기 (15% 축소: 526.35 * 0.85 = 447.4, 563.125 * 0.85 = 478.66)
  rawArtworks: [
    // map_place2.svg에서 추출한 좌표 (36-52번)
    { order: 35, cx: 208.602, cy: 23.1443, type: 'place2' },
    { order: 36, cx: 139.902, cy: 117.099, type: 'place2' },
    { order: 37, cx: 139.902, cy: 176.333, type: 'place2' },
    { order: 38, cx: 90.059, cy: 292.497, type: 'place2' },
    { order: 39, cx: 167.309, cy: 339.697, type: 'place2' },
    { order: 40, cx: 209.682, cy: 339.224, type: 'place2' },
    { order: 41, cx: 226.25, cy: 271.033, type: 'place2' },
    { order: 42, cx: 226.25, cy: 207.642, type: 'place2' },
    { order: 43, cx: 302.412, cy: 114.599, type: 'place2' },
    { order: 44, cx: 357.779, cy: 138.537, type: 'place2' },
    { order: 45, cx: 336.047, cy: 262.931, type: 'place2' },
    { order: 46, cx: 336.047, cy: 345.919, type: 'place2' },
    { order: 47, cx: 355.909, cy: 401.931, type: 'place2' },
    { order: 48, cx: 292.607, cy: 423.919, type: 'place2' },
    { order: 49, cx: 232.612, cy: 401.931, type: 'place2' },
    { order: 50, cx: 253.832, cy: 345.919, type: 'place2' },
    { order: 51, cx: 253.832, cy: 287.938, type: 'place2' },
    { order: 52, cx: 253.832, cy: 217.424, type: 'place2' },
  ],
};

// 좌표 변환 함수
const convertArtworks = (rawArtworks, viewBoxWidth, viewBoxHeight) => {
  return rawArtworks
    .map((item) => {
      const left = (item.cx / viewBoxWidth) * 100;
      const top = (item.cy / viewBoxHeight) * 100;
      
      return {
        id: item.order,
        left: parseFloat(left.toFixed(2)),
        top: parseFloat(top.toFixed(2)),
        type: item.type,
      };
    })
    .filter(item => item !== null)
    .sort((a, b) => a.id - b.id);
};

// 각 탭별 맵 설정
export const mapConfigs = {
  ALL: {
    ...allMapData,
    artworks: convertArtworks(allMapData.rawArtworks, allMapData.viewBox.width, allMapData.viewBox.height),
  },
  PLACE1: {
    ...place1MapData,
    artworks: convertArtworks(place1MapData.rawArtworks, place1MapData.viewBox.width, place1MapData.viewBox.height),
  },
  PLACE2: {
    ...place2MapData,
    artworks: convertArtworks(place2MapData.rawArtworks, place2MapData.viewBox.width, place2MapData.viewBox.height),
  },
};
