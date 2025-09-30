class B {
    constructor(y1) {
        this.y = y1;
    }
}
class A extends B{
    constructor(x1, y1) {
        super(y1);
        this.x = x1;
    }

    f1() {
        console.log(this.x);
        console.log(this.y);
    }
}
var teoem = new A(100, 200);
console.log(teoem);
teoem.f1();

const elList = ["laptop", "điện thoại", "phụ kiện"]
var newList = elList.map((el) => {
    return el + 'x';
})
console.log(newList);