let people=['greg','mary','devon','james'];

console.log(people)
console.log(people.splice(0,1))
console.log(people.pop())
people.unshift('matt')
console.log(people)
people.push('meghana');
console.log(people)


let v=['matte','greg','mary','devon','james']
let a=[,,]
for(let i=0;i<=4;i++)
{
    if(v[i]=='matte'||v[i]=='mary')
    {
        continue
    }
    else{
        a=v.slice(i)
    }
}
console.log(a)

