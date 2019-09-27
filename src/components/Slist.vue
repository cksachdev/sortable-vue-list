<template>
  <div class="Slist">
    <ListenKeyStroke @setItem="setTimeStamp" />
    <h1>Press A or B</h1>
      <SlickList lockAxis="y" v-model="items" class="list">
        <SlickItem v-for="(item, index) in items" :index="index" :key="index" class="list-item">
          <span class="strA">{{ item.keyA }}</span>
          <span class="strB">{{ item.keyB }}</span>
          <span class="rmBtn"><button @click="removeItem(index)">Remove</button></span>
          <div class="clear"></div>
        </SlickItem>
      </SlickList>
  </div>
</template>

<script>
import { SlickList, SlickItem } from 'vue-slicksort';
import ListenKeyStroke from './ListenKeyStroke'
export default {
  name: 'Slist',
  components: {
    SlickItem,
    SlickList,
    ListenKeyStroke
  },
  data() {
    return {
      firstKey: 'a',
      secondKey: 'b',
      items: [
        {
          keyA: "",
          keyB: ""
        }
      ]
    };
  },
  methods: {
    addNewItem() {
      this.items.push({
        keyA: "",
        keyB: ""
      })
    },
    setTimeStamp(key, timestamp) {
      if(key == this.firstKey) {
        this.setA(timestamp)
      }
      if(key == this.secondKey) {
        this.setB(timestamp)
      }
    },
    setA(dateTime) {
      let itemLength = (this.items.length  == 0) ? this.items.length : this.items.length - 1
      if(this.items[itemLength].keyA == "") {
        this.items[itemLength].keyA = dateTime
      } else {
        this.findEmptyObjectorAdd(this.firstKey, dateTime)
      }
    },
    setB(dateTime) {
      let itemLength = (this.items.length  == 0) ? this.items.length : this.items.length - 1
      if(this.items[itemLength].keyA == "") {
        alert("First Add Item A");
        return false;
      }
      if(this.items[itemLength].keyB == "") {
        this.items[itemLength].keyB = dateTime
        this.addNewItem()
      }else{
        this.findEmptyObjectorAdd(this.firstKey, dateTime)
      }
    },
    findEmptyObjectorAdd(key, datetime) {
      this.items.filter(item => {
        if(item.keyA == "") {
          
        }
      })
    },
    removeItem(itemIndex) {
      if(this.items[itemIndex]) {
        this.items.splice(itemIndex, 1);
        if(this.items.length <= 0) {
          this.addNewItem()
        }
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  background: #FAFAFF;
  padding: 20px;
  font-family: Helvetica;
}

.Slist {
  background: #EEE;
  border-radius: 4px;
  border: 1px solid #EEE;
  transition: all 0.2s;
  width: 40%;
  margin: 0 auto;
}

.list-item {
  padding: 10px;
  list-style-type: none;
  cursor: pointer;
  background: #FFF;
  border-bottom: 1px solid #EEE;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-align: center;
}
.strA{
    float: left;
    width: 40%;
    text-align: left;
    background: #efefef;
    padding: 5px;
    min-height: 30px;
    line-height: 30px;
}
.strB {
    float: left;
    width: 40%;
    text-align: left;
    background: #efefef;
    padding: 5px;
    min-height: 30px;
    line-height: 30px;
    margin: 0px 3px;
}
.rmBtn {
  float: right;
}
.clear {
  clear: both;
}

h2 {
  font-weight: bold;
  margin-bottom: 15px;
}
</style>
