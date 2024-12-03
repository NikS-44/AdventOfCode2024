const processInput = (input: string) => {
    const lines = input.split("\n");
    const inputList1 = [];
    const inputList2 = [];

    lines.forEach((line) =>{
        const lineArr = line.split("   ");
        inputList1.push(Number(lineArr[0]));
        inputList2.push(Number(lineArr[1]));
    })

    return {list1: inputList1, list2: inputList2};
}

const processLists = (list1: number[], list2: number[]) => {
    list1.sort((a, b) => a - b)
    list2.sort((a, b) => a - b)

    const result = list1.reduce((acc, val, index) => Math.abs(val - list2[index]) + acc, 0)

    console.log(result)
}

const processLists2 = (list1: number[], list2: number[]) => {
    list1.sort((a, b) => a - b)

    const list2Map = new Map();
    list2.map((val) => {
        const currVal = list2Map.get(val);
        if(currVal === undefined){
            list2Map.set(val, 1)
        } else {
            list2Map.set(val, currVal + 1 );
        }
    })

    const result = list1.reduce((acc, val, index) => {
            const occurrences = list2Map.get(val);
            return occurrences ? acc + occurrences * val : acc
        }
    , 0)

    console.log(result)
}

const inputString =
    "3   4\n" +
    "4   3\n" +
    "2   5\n" +
    "1   3\n" +
    "3   9\n" +
    "3   3";

const {list1, list2} = processInput(inputString);

// processLists(list1, list2);
processLists2(list1, list2);
