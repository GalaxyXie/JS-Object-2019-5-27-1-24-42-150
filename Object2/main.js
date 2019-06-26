var fruit = {
apple: 20,
pear: 20,
peach: 10
};
// write your code here...
var countAll=0;
for (var i in fruit) {
	countAll+=fruit[i];
}
console.log(countAll);
