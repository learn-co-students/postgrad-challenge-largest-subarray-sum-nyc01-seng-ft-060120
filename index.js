const arraySum = (ar) => ar.reduce((sum=0, e)=> sum+e)


// function largestSubarraySum(ar) {
//     let currentLargest = [...ar]
//     let currentAr
//     for (let x=0; x<ar.length; x++) {
//         for (let y=x+1; y<=ar.length; y++) {
//             currentAr = ar.slice(x,y)
//             if (arraySum(currentAr) > arraySum(currentLargest)) currentLargest = currentAr
//         }
//     }
//     return arraySum(currentLargest)
// }

// function largestSubArraySum(ar) {
//     let max = ar.max()
//     if (max <=0) {
//         return max
//     }
// }

function largestSubarraySum(ar) {
    let max=Math.max(...ar), sub=0
    if (max <=0) {
        return 0
    }
    else {
        max=0
    }
    ar.forEach((e) => {
        if (e > 0) {
            sub+=e
            max= Math.max(sub, max)
        }
        else if (sub+e > 0) {
            max=sub
            sub+=e
        }
        else {
            max=sub
            sub=0
        }
    })
    return max
}