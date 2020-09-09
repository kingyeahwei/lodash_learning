// console.log(_.assign({ a: 1 }, { b: 2 }, { c: 3 }));
// let x = _.map([1, 2, 3], function (item) {
//   return item * 3;
// });

// console.log(x);

// console.log(_.chunk(['a', 'b', 'c', 'd'], 2))
// console.log(_.chunk(['a', 'b', 'c', 'd'], 3))

// console.log(_.compact([0, 1, false, 2, '', 3]))
// var array = [1];
// var other = _.concat(array, 2, [3], [[4]]);
// console.log(other);

// console.log(_.difference([3, 2, 1], [4, 2]))

// tag Array
// let arr = _.chunk(['a', 'b', 'c', 'd'], 2)
// console.log(arr);

// let arr = _.chunk(['a', 'b', 'c', 'd'], 3)
// console.log(arr);

// let arr = _.compact([0, 1, false, 2, '', 3])
// console.log(arr);

// var array = [1];
// var other = _.concat(array, 2, [3], [[4]])
// console.log(other);
// console.log(array);

// let arr = _.difference([3, 2, 1], [4, 2])
// console.log(arr);

// let arr = _.differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor)

// let arr = _.differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor)
// console.log(arr);

// let arr = _.differenceBy([{ x: 2 }, { x: 1 }], [{'x': 1}], 'x');
// console.log(arr);

// var objects = [
//   { x: 1, y: 2 },
//   { x: 2, y: 1 },
// ];

// let arr = _.differenceWith(objects, [{'x': 1, 'y': 2}], _.isEqual)
// console.log(arr);

// let arr = _.drop([1, 2, 3])
// console.log(arr);

// let arr = _.drop([1, 2, 3], 2)
// console.log(arr);

// let arr = _.drop([1, 2, 3], 5)
// console.log(arr);

// let arr = _.drop([1, 2, 3], 0)
// console.log(arr);

// let arr = _.dropRight([1, 2, 3])
// console.log(arr);

// let arr = _.dropRight([1, 2, 3], 2)
// console.log(arr);

// let arr = _.dropRight([1, 2, 3], 5)
// console.log(arr);

// let arr = _.dropRight([1, 2, 3], 0)
// console.log(arr);

// var greet = function (greeting, name) {
//   return greeting + ' ' + name;
// };

// var sayHelloTo = _.partial(greet, 'hello');
// console.log(sayHelloTo('fred'))

// var greetFred = _.partial(greet, _, 'fred')
// console.log(greetFred('hi'))

// function square(n) {
//   return n * n;
// }

// let arr = _.map([4, 8], square)
// console.log(arr);

// let arr = _.map({a: 4, b: 8}, square)
// console.log(arr);

// var users = [{ user: 'barney' }, { user: 'fred' }];
// var arr = _.map(users, 'user')
// console.log(arr);

// var resolve = _.partial(_.map, _, 'user');
// var users = [
//   { user: 'barney', active: true },
//   { user: 'fred', active: false },
//   { user: 'pebbles', active: false },
// ];

// let arr = _.dropRightWhile(users, function (o) {
//   return !o.active;
// });

// let result = resolve(arr)
// console.log(result);

// var user = {
//   name: 'jinyanwei'
// }

// let result = _.matchesProperty('name', 'jinyanwei')
// console.log(result(user))

// let arr = _.dropRightWhile(users, { user: 'pebbles', active: false });
// console.log(resolve(arr));

// let arr = _.dropRightWhile(users, ['active', false])
// console.log(arr);

// console.log(resolve(arr))

// let result = resolve(_.dropRightWhile(users, 'active'))
// console.log(result);

// var users = [
//   { user: 'barney', active: false },
//   { user: 'fred', active: false },
//   { user: 'pebbles', active: true },
// ];

// let result = _.dropWhile(users, function(val) {
//   return !val.active;
// })
// console.log(result);

// let result = _.dropWhile(users, {user: 'barney', active: false})
// console.log(result);

// let result = _.dropWhile(users, ['active', false])
// console.log(result);

// let result = _.dropWhile(users, 'active')
// console.log(result);

// var arr = [1, 2, 3];
// let result = _.fill(arr, 'a')
// console.log(result);
// console.log(arr);

// let arr = _.fill(Array(3), 2)
// console.log(arr);

// let arr = _.fill([4, 6, 8, 10], '*', 1, 3)
// console.log(arr);

// var users = [
//   { user: 'barney', active: false },
//   { user: 'fred', active: false },
//   { user: 'pebbles', active: true },
// ];

// let index = _.findIndex(users, function (o) {
//   return o.user === 'barney';
// });
// console.log(index);

// let index = _.findIndex(users, { user: 'fred', active: false });
// console.log(index);

// let index = _.findIndex(users, ['active', false])
// console.log(index);

// let index = _.findIndex(users, 'active')
// console.log(index);

// var users = [
//   { user: 'barney', active: true },
//   { user: 'fred', active: false },
//   { user: 'pebbles', active: false },
// ];

// _.findLastIndex(users, function (o) {
//   return o.user === 'pebbles';
// });

// let index = _.findLastIndex(users, {user: 'barney', active: true})
// console.log(index);

// let index = _.findLastIndex(users, ['active', false])
// console.log(index);

// let index = _.findLastIndex(users, 'active')
// console.log(index);

// let arr = _.flatten([1, [2, [3, [4]], 5]]);
// console.log(arr);

// let arr = _.flattenDeep([1, [2, [3, [4]], 5]]);
// console.log(arr);

// var array = [1, [2, [3, [4]], 5]];
// let arr = _.flattenDepth(array, 1)
// console.log(arr);

// let arr = _.flattenDepth(array, 2)
// console.log(arr);

// let obj = _.fromPairs([
//   ['fred', 30],
//   ['barney', 40],
// ]);
// console.log(obj);

// let result = _.head([1, 2, 3])
// console.log(result);

// let index = _.indexOf([1, 2, 1, 2], 2)
// console.log(index);

// let index = _.indexOf([1, 2, 2, 2], 2, 2)
// console.log(index);

// let arr = _.initial([1, 2, 3])
// console.log(arr);

// let arr = _.intersection([2, 1], [4, 2], [1, 2])
// console.log(arr);

// let num = _.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor)
// console.log(num);

// let result = _.intersectionBy([{x: 1}], [{x: 2}, {x: 1}], 'x')
// console.log(result);

// var objects = [
//   { x: 1, y: 2 },
//   { x: 2, y: 1 },
// ];
// var others = [
//   { x: 1, y: 1 },
//   { x: 1, y: 2 },
// ];

// let result = _.intersectionWith(objects, others, _.isEqual)
// console.log(result);

// let str =  _.join(['a', 'b', 'c'], '~')
// console.log(str);

// let num = _.last([1, 2, 3])
// console.log(num);

// let index = _.lastIndexOf([1, 2, 1, 2], 2)
// console.log(index);

// let index = _.lastIndexOf([1, 2, 1, 2], 2, 2)
// console.log(index);

// var array = [1, 2, 3];

// let arr = _.reverse(array)
// console.log(arr);

// var array = [1, 2, 3, 1, 2, 3];
// let arr = _.pull(array, 2, 3);
// console.log(arr);

// var arr = [1, 2, 3, 1, 2, 3];
// let array = _.pullAll(arr, [2, 3])
// console.log(arr);
// console.log(array);

// var array = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }];

// let result = _.pullAllBy(array, [{ x: 1 }, { x: 3 }], function (val) {
//   return val.x;
// });
// console.log(result);
// console.log(array);

// var array = [5, 10, 15, 20];
// var evens = _.pullAt(array, 1, 3);
// console.log(array);
// console.log(evens);

// var array = [1, 2, 3, 4];
// var evens = _.remove(array, function(val) {
//   return val % 2 === 0;
// })

// console.log(array);
// console.log(evens);

// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// let result = _.slice(array, 3, 5)
// console.log(result);

// let index = _.sortedIndex([30, 50], 40)
// console.log(index);

// let index = _.sortedIndex([4, 5], 4)
// console.log(index);

// note sortedIndexBy
// var array = [0, 1, 2];
// var object = { a: array, b: array, c: array };
// let result = _.propertyOf(object)
// console.log(result('a'));
// var dict = { thirty: 30, forty: 40, fifty: 50 };

// let result = _.sortedIndexBy(['thirty', 'fifty'], 'forty', _.propertyOf(dict))
// console.log(result);

// let index = _.sortedIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, function (val) {
//   console.log(val);
//   return val.x;
// });

// console.log(index);
// let index = _.sortedIndexOf([1, 1, 2, 2], 2)
// console.log(index);

// let index = _.sortedLastIndex([4, 5], 4)
// console.log(index);

// let index = _.sortedLastIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, function(val) {
//   return val.x;
// });

// console.log(index);

// let index = _.sortedLastIndexOf([1, 2, 2, 2], 2)
// console.log(index);

// let index = _.sortedUniq([1, 1, 2])
// console.log(index);

// let result = _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], function(val) {
//   return Math.floor(val)
// });
// console.log(result);

// let result = _.tail([1, 2, 3])
// console.log(result);

// let arr = _.take([1, 2, 3])
// console.log(arr);

// let arr = _.take([1, 2, 3], 2)
// console.log(arr);

// let arr = _.take([1, 2, 3], 5);
// console.log(arr);

// let arr = _.take([1, 2, 3], 0)
// console.log(arr);

// let result =  _.takeRight([1, 2, 3])
// console.log(result);

// let result = _.takeRight([1, 2, 3], 2)
// console.log(result);

// let result = _.takeRight([1, 2, 3], 5)
// console.log(result);

// let result = _.takeRight([1, 2, 3], 0)
// console.log(result);

// var users = [
//   { user: 'barney', active: true },
//   { user: 'fred', active: false },
//   { user: 'pebbles', active: false },
// ];

// let result = _.takeRightWhile(users, function(o) {
//   return !o.active
// })
// console.log(result);

// let result = _.takeRightWhile(users, {user: 'pebbles', active: false})
// console.log(result);

// let reslut = _.takeRightWhile(users, ['active', false])
// console.log(reslut);

// let result = _.takeRightWhile(users, 'active')
// console.log(result);

// var users = [
//   { user: 'barney', active: false },
//   { user: 'fred', active: false },
//   { user: 'pebbles', active: true },
// ];

// let result = _.takeWhile(users, function(o) {
//   return !o.active;
// })
// console.log(result);

// let result = _.takeWhile(users, {user: 'barney', active: false})
// console.log(result);

// let result = _.takeWhile(users, ['active', false])
// console.log(result);

// let result = _.takeWhile(users, 'active')
// console.log(result);

// let result = _.union([2, 1], [4, 2], [1, 2])
// console.log(result);

// let result = _.unionBy([2.1, 1.2], [4.3, 2.4], Math.floor)
// console.log(result);

// let result = _.unionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], 'x');
// console.log(result);

// var objects = [
//   { x: 1, y: 2 },
//   { x: 2, y: 1 },
// ];
// var others = [
//   { x: 1, y: 1 },
//   { x: 1, y: 2 },
// ];

// let result = _.unionWith(objects, others, _.isEqual)
// console.log(result);
