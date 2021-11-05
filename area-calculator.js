const pi = Math.PI

const calculateRectangleArea = function (length, width) {
  if (length === NaN || width === NaN) {
    return undefined
  } else {
      return length * width
  }
};

const calculateTriangleArea = function (base, height) {
  if (base === NaN || height === NaN) {
    return undefined
  } else {
      return base * height / 2
  }
};

const calculateCircleArea = function (radius) {
  if (radius === NaN) {
    return undefined
  } else {
  return pi * (radius * radius)
  }
};





// calculateRectangleArea(length, width)
// calculateTriangleArea(base, height)
// calculateCircleArea(radius)
