function twoNumberSum(array, targetSum) {
    for (let i = 0 ; i <array.length; i++){
        for (let j = i+1; j < array.length; j++){
            if (array[i] + array[j] == targetSum){
                
                console.log(`Resultado encontrado : [${array[i]},${array[j]}]` )
                return [array[i],array[j]]
            }
        }
    }
    console.log("Not found")
    return 0
 }

const array = [3, 5, -4, 8, 11, 1, -1, 6]
const targetSum = 9
const result = twoNumberSum(array, targetSum)
