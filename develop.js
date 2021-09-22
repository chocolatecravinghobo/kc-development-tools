Array.prototype.deepCopy = function () {
  var temp = [];
  for (var i = 0; i < this.length; ++i) {
    if (this[i] == undefined) temp[i] = this[i];
    else if (this[i] instanceof Array) temp[i] = this[i].deepCopy();
    else if (typeof this[i] == "object") temp[i] = this[i].clone();
    else temp[i] = this[i];
  }
  return temp;
};

var developMap = [//炮战（油钢，弹，铝），水雷（油钢，弹，铝），航母（油钢，弹，铝）
  [1, 4, 0, 0, 6, 2, 2, 2, 2, 0],
  [2, 2, 0, 0, 1, 4, 2, 2, 2, 0],
  [3, 2, 0, 0, 6, 4, 2, 8, 8, 0],
  [4, 6, 2, 2, 6, 4, 2, 0, 0, 0],
  [5, 4, 4, 2, 2, 4, 2, 0, 0, 0],
  [6, 6, 6, 2, 2, 2, 0, 0, 0, 0],
  [7, 0, 1, 1, 0, 2, 2, 0, 0, 0],
  [8, 0, 8, 8, 0, 0, 0, 0, 0, 0],
  [9, 0, 4, 4, 0, 0, 0, 0, 0, 0],
  [10, 2, 6, 8, 0, 4, 4, 8, 2, 0],
  [11, 6, 6, 0, 6, 4, 0, 0, 0, 0],
  [12, 4, 4, 0, 2, 2, 0, 0, 0, 0],
  [13, 4, 4, 0, 2, 2, 0, 0, 0, 0],
  [14, 4, 4, 0, 4, 4, 0, 0, 0, 0],
  [15, 0, 0, 0, 2, 2, 0, 0, 0, 0],
  [16, 0, 2, 4, 2, 4, 4, 0, 6, 6],
  [17, 0, 2, 4, 0, 2, 2, 0, 8, 8],
  [18, 0, 0, 2, 0, 0, 0, 0, 4, 4],
  [19, 0, 0, 4, 2, 0, 4, 4, 2, 6],
  [20, 0, 0, 6, 2, 0, 4, 4, 2, 1],
  [21, 0, 0, 4, 0, 0, 2, 2, 2, 8],
  [22, 0, 0, 2, 0, 0, 0, 0, 0, 2],
  [23, 0, 2, 4, 2, 2, 2, 0, 6, 6],
  [24, 0, 2, 2, 0, 2, 4, 0, 6, 6],
  [25, 2, 0, 6, 2, 0, 1, 1, 12, 8],
  [26, 0, 0, 4, 0, 0, 2, 2, 8, 8],
  [27, 2, 0, 0, 4, 2, 2, 2, 0, 2],
  [28, 0, 2, 2, 2, 2, 2, 2, 0, 0],
  [29, 2, 2, 2, 2, 2, 2, 2, 0, 0],
  [30, 2, 0, 0, 0, 0, 0, 2, 0, 2],
  [31, 2, 0, 0, 0, 0, 0, 2, 0, 0],
  [32, 2, 0, 0, 0, 0, 0, 2, 0, 0],
  [33, 4, 4, 2, 4, 4, 2, 6, 0, 0],
  [34, 2, 4, 2, 2, 4, 2, 4, 0, 0],
  [35, 4, 4, 2, 0, 2, 2, 0, 6, 6],
  [36, 4, 2, 2, 0, 0, 0, 0, 0, 0],
  [37, 8, 2, 0, 4, 2, 0, 6, 4, 0],
  [38, 6, 2, 0, 2, 2, 2, 4, 2, 0],
  [39, 4, 4, 2, 4, 4, 2, 6, 4, 0],
  [40, 2, 2, 2, 0, 2, 2, 2, 2, 0],
  [41, 0, 2, 2, 0, 2, 2, 6, 2, 0],
  [44, 0, 0, 0, 2, 1, 8, 0, 0, 0],
  [45, 0, 0, 0, 0, 2, 2, 0, 0, 0],
  [46, 0, 0, 0, 0, 0, 8, 0, 0, 0],
  [47, 0, 0, 0, 0, 0, 2, 0, 0, 0],
  [49, 2, 2, 2, 4, 2, 0, 6, 2, 0],
  [51, 0, 0, 0, 0, 0, 0, 2, 2, 0],
  [52, 0, 0, 0, 0, 0, 0, 0, 2, 2],
  [54, 0, 0, 0, 0, 0, 0, 0, 0, 4],
  [55, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [57, 0, 0, 0, 0, 0, 0, 0, 2, 2],
  [59, 0, 0, 0, 0, 0, 0, 2, 0, 0],
  [60, 0, 0, 0, 0, 0, 0, 0, 2, 2],
  [61, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [65, 0, 0, 0, 4, 4, 0, 0, 0, 0],
  [66, 0, 0, 0, 4, 0, 0, 0, 0, 0],
  [72, 4, 0, 0, 0, 0, 0, 0, 0, 0],
  [73, 2, 0, 0, 0, 0, 0, 0, 0, 0],
  [75, 0, 0, 0, 4, 0, 0, 0, 0, 0],
  [90, 2, 2, 0, 0, 0, 0, 0, 0, 0],
  [120, 0, 0, 2, 0, 0, 4, 0, 0, 2],
  [181, 0, 0, 0, 0, 0, 2, 2, 0, 2],
  [226, 0, 0, 0, 0, 4, 4, 0, 0, 0],
  [78, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [147, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [163, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [168, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [194, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [195, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [197, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [207, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [242, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [249, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [250, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

var developList = [
  [
    [],[],[],
  ],
  [
    [],[],[],
  ],
  [
    [],[],[],
  ],
];

for (let i = 0; i < 3; ++i) {
  for (let j = 0; j < 3; ++j) {
    for( let k = 0;k < itemlist.length; ++k){
      developList[i][j][k]=[];
      developList[i][j][k][0]=developMap[k][0];
      developList[i][j][k][1]=developMap[k][(i+1)*(j+1)];
    }
  }
}

//fuel, ammo, steel, baux 油，彈，鋼，鋁
//secretary 秘書艦開發池 00水雷系 01炮戰系 02航母系
//layer 資源開發池 0油 1彈 2鋼 3鋁 實際油鋼池相同 改为2铝 0油鋼 1彈
//isitaly 是否為意大利
//hqlevel 司令部等級

function develop(fuel, ammo, steel, baux, secretary, isitaly, hqlevel) {
  fuel = parseInt(fuel);
  ammo = parseInt(ammo);
  steel = parseInt(steel);
  secretary = parseInt(secretary);
  isitaly = isitaly != 0;
  baux = parseInt(baux);
  hqlevel = parseInt(hqlevel);
  var layer = 0,
    max = fuel;
  if (steel > max) {
    layer = 0; 
    max = steel;
  }
  if (ammo > max) {
    layer = 1;
    max = ammo;
  }
  if (baux > max) {
    layer = 2;
    max = baux;
  }
  var list = developList[secretary][layer].deepCopy();
  if (
    secretary == 2 &&
    (layer == 1 || layer == 2) &&
    fuel >= 240 &&
    ammo >= 260 &&
    baux >= 250
  ) {
    for (var i = 0; i < list.length; ++i) {
      if (items[list[i][0]][0] == 21) list[i][1] -= 2;
      if (items[list[i][0]][0] == 23) list[i][1] -= 2;
      if (items[list[i][0]][0] == 24) list[i][1] -= 2;
      if (items[list[i][0]][0] == 25) list[i][1] -= 2;
      if (list[i][1] <= 0) {
        list.splice(i, 1);
        --i;
      }
    }
    list.push([59, 8]);
    list.sort(listSort);
  }
  if (isitaly && layer == 2) {
    for (var i = 0; i < list.length; ++i) {
      if (items[list[i][0]][0] == 25) list[i][1] -= 2;
      if (items[list[i][0]][0] == 22 && secretary == 1) list[i][1] -= 2;
      if (list[i][1] <= 0) {
        list.splice(i, 1);
        --i;
      }
    }
    list.push([44, secretary == 1 ? 4 : 2]);
    list.sort(listSort);
  }
  var succ = [],
    fail = [];
  var failprob = 100;
  for (var i = 0; i < list.length; ++i) {
    var result = new developResult(
      list[i][0],
      list[i][1],
      [fuel, ammo, steel, baux],
      hqlevel
    );
    if (result.successful) {
      succ.push(result);
      failprob -= result.percentage;
    } else fail.push(result);
  }
  return [
    succ,
    fail,
    failprob,
    [[fuel, ammo, steel, baux], secretary, isitaly, hqlevel],
  ];
}

function listSort(i1, i2) {
  return i1[0] - i2[0];
}

function resultSort(r1, r2) {
  return (r1.successful ? 0 : 1) - (r2.successful ? 0 : 1);
}
