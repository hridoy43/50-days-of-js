//Is this a triangle?

function isTriangle(a, b, c) {
    if((a+b > c)&&(a+c>b)&&(b+c)>a) return true
    return false
  }