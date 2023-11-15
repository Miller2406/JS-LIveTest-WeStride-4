//  return ตัวอักษรตรงกลางของ str อาจจะเป็น 1-2 ตัว

function midReturn(str) {

    let result;
    if (Math.round(str.length / 2) % 2 == 0) { // return 2 even
        result = str[(str.length / 2) - 1] + str[(str.length / 2)]

    } else { //return 1 odd
        result = str[Math.floor(str.length / 2)]
    }
    return result;
}

let str = 'bodyy'; // hello
console.log(midReturn(str));