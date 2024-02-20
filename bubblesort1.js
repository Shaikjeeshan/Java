function bubbleSort(arr) {
    const length = arr.length;

    for (let i = 0; i < length - 1; i++) {
      // Last i elements are already in place
      for (let j = 0; j < length - 1 - i; j++) {
        // Compare adjacent elements
        if (arr[j] > arr[j + 1]) {
          // Swap the elements
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }

    return arr;
  }

  var arr = [1, 7, 2, 8, 3, 4, 5, 0, 9];
  console.log(bubbleSort(arr));