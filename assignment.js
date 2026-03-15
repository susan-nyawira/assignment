console.log("Hello World")

        let sentence="I Love Coding"
        console.log(sentence)

        // .length. returns the number of characters in a string
        console.log(sentence.length)

        //.toUppercase()-converts text to uppercase
        console.log(sentence.toUpperCase())

        //.toLowercase(.converts text to lowercase)
        console.log(sentence.toLowerCase())

        //.includes().checks if a string contains ceratin text
        console.log(sentence.includes("Coding"))

        //Array Methods
        let animal=["dog","cat","elephant"]
        console.log(animal)

        //push().adds new item to the end of the array
        animal.push("lion")
        console.log(animal)

        //.unshift().adds a new element to the start of an array
        animal.unshift("fish")
        console.log(animal)

        //.pop().it removes the last item from the array
        animal.pop()
        console.log(animal)

        //.shift-removes the first item from the array
        animal.shift()
        console.log(animal)

        //.includes().checks if a string contains ceratin text
        console.log(animal.includes("dogs"))

        //.length.returns the number of items in an array
        console.log(animal.length)