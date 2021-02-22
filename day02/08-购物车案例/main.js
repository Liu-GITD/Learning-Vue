const app = new Vue({
  el: '#app',
  data: {
    isDel: false,
    message: "nihao",
    book: [
      { bookName: '算法大全', id: 1, date: '2006', price: 86.00, count: 1 },
      { bookName: '操作系统', id: 2, date: '2006', price: 78.00, count: 1 },
      { bookName: '数据结构', id: 3, date: '2006', price: 97.00, count: 1 },
      { bookName: '编程珠玑', id: 4, date: '2006', price: 69.00, count: 1 }
    ]
  },
  methods: {
    add(item) {
      item.count++
    },
    sub(item) {
      item.count--;
    },
    del(index) {
      this.book[index].count=0;
      this.book.splice(index,1)

    }
  },
  computed: {
    sumPrice() {
      // let sum = 0;
      // for (item of this.book) {
      //   sum = sum + item.price * item.count
      // }
      // return sum
      return this.book.reduce(function(preValue,book){
        return book.count*book.price +preValue
      },0)
    }
  },
  filters:{//过滤器
    showPrice(price){
      return '￥'+price.toFixed(2)//实现价格保留两位小数并显示人民币符号
    }
  }
})