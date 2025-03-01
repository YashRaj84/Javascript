// for of

const arr = [1,2,3,4,5]
for(const num of arr) {
    // console.log(num);
}

// Map
const map = new Map()
map.set('IN', 'India')
map.set('PK', 'Pakistan')
map.set('FR', 'France')        // Repeated value doesn't prints

// console.log(map)
for(const [key,value] of map)
{
    // console.log(key, ":", value)
}

// Doesn't work for OBJECTS
const myObj = {
    'game1': 'Uncharted',
    'game2': 'Spider-man2',
    'game3': 'GTA V'
}
// for(const [key,value] of myObj)
// {
    // console.log(key, ":", value)
// }

// for in

const arr1 = ['Java', 'C++', 'Node', 'React']
for(const key in arr1)
{
    // console.log(key)
    // console.log(arr1[key])
}

const myObj1 = {
    js: 'Javascript',
    css: 'Cascading Style Sheet',
    py: 'Python'
}
for(const key in myObj1) {
    // console.log(myObj1[key])
    // console.log(`${key} is shortcut for ${myObj1[key]}`)
}

const map1 = new Map()
map.set('IN', 'India')
map.set('PK', 'Pakistan')
map.set('FR', 'France')  

// Not iterable
// for(const key in map1) {
    // console.log(key)
// }