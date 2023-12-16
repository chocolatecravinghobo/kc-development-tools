Array.prototype.deepCopy = function () {
  let temp = [];
  for (let i = 0; i < this.length; ++i) {
    if (this[i] == undefined) temp[i] = this[i];
    else if (this[i] instanceof Array) temp[i] = this[i].deepCopy();
    else if (typeof this[i] == "object") temp[i] = this[i].clone();
    else temp[i] = this[i];
  }
  return temp;
};

let developMap = [
  //炮战（油钢，弹，铝），水雷（油钢，弹，铝），航母（油钢，弹，铝）
  //Heavy (F/S，A，B)，Torpedo (F/S，A，B)，Aviation (F/S，A，B)，Submarine (F/S，A，B)
  [1, 4, 0, 0, 6, 2, 2, 2, 2, 0, 22, 50, 68],
  [2, 2, 0, 0, 10, 4, 2, 2, 2, 0, 78, 50, 32],
  [3, 2, 0, 0, 6, 4, 2, 6, 6, 0, 0, 0, 0],
  [4, 6, 2, 2, 6, 4, 2, 0, 0, 0, 0, 0, 0],
  [5, 4, 4, 2, 2, 4, 2, 0, 0, 0, 0, 0, 0],
  [6, 6, 6, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0],
  [7, 0, 10, 10, 0, 2, 2, 0, 0, 0, 0, 0, 0],
  [8, 0, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [9, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [10, 2, 6, 8, 0, 4, 4, 8, 2, 0, 0, 0, 0],
  [11, 6, 6, 0, 6, 4, 0, 0, 0, 0, 0, 0, 0],
  [12, 4, 4, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0],
  [13, 4, 4, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0],
  [14, 4, 4, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0],
  [15, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0],
  [16, 0, 2, 4, 2, 4, 4, 0, 6, 6, 0, 0, 0],
  [17, 0, 2, 4, 0, 2, 2, 0, 8, 8, 0, 0, 0],
  [18, 0, 0, 2, 0, 0, 0, 0, 4, 4, 0, 0, 0],
  [19, 0, 0, 4, 2, 0, 4, 4, 2, 6, 0, 0, 0],
  [20, 0, 0, 6, 2, 0, 4, 4, 2, 10, 0, 0, 0],
  [21, 0, 0, 4, 0, 0, 2, 2, 2, 8, 0, 0, 0],
  [22, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0],
  [23, 0, 2, 4, 2, 2, 2, 0, 6, 6, 0, 0, 0],
  [24, 0, 2, 2, 0, 2, 4, 0, 6, 6, 0, 0, 0],
  [25, 2, 0, 6, 2, 0, 10, 10, 12, 8, 0, 0, 0],
  [26, 0, 0, 4, 0, 0, 2, 2, 8, 8, 0, 0, 0],
  [27, 2, 0, 0, 4, 2, 2, 2, 0, 2, 0, 0, 0],
  [28, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0],
  [29, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0],
  [30, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0],
  [31, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
  [32, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
  [33, 4, 4, 2, 4, 4, 2, 6, 0, 0, 0, 0, 0],
  [34, 2, 4, 2, 2, 4, 2, 4, 0, 0, 0, 0, 0],
  [35, 4, 4, 2, 0, 2, 2, 0, 6, 6, 0, 0, 0],
  [36, 4, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [37, 8, 2, 0, 4, 2, 0, 6, 4, 0, 0, 0, 0],
  [38, 6, 2, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0],
  [39, 4, 4, 2, 4, 4, 2, 6, 4, 0, 0, 0, 0],
  [40, 2, 2, 2, 0, 2, 2, 2, 2, 0, 0, 0, 0],
  [41, 0, 2, 2, 0, 2, 2, 6, 2, 0, 0, 0, 0],
  [44, 0, 0, 0, 2, 10, 8, 0, 0, 0, 0, 0, 0],
  [45, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0],
  [46, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0],
  [47, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
//  [48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [49, 2, 2, 2, 4, 2, 0, 6, 2, 0, 0, 0, 0],
  [51, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0],
  [52, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0],
  [54, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0],
  [55, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
  [57, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0],
  [59, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
  [60, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0],
  [61, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
  [65, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0],
  [66, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0],
  [68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [72, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [73, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [75, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0],
  [90, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [120, 0, 0, 2, 0, 0, 4, 4, 4, 0, 0, 0, 0],
  [181, 0, 0, 0, 0, 0, 2, 2, 0, 2, 0, 0, 0],
  [201, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
  //  [210, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //  [213, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [226, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0],
  //  [442, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //  [457, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //  [511, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [71, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [102, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [147, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [163, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [168, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [194, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [195, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [197, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [207, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [221, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [242, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [249, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [298, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [301, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [414, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [440, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [445, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [500, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

let developList = [
  [[], [], [], []],
  [[], [], [], []],
  [[], [], [], []],
  [[], [], [], []],
];

for (let i = 0; i < 4; ++i) {
  for (let j = 0; j < 3; ++j) {
    for (let k = 0; k < items.length; ++k) {
      developList[i][j][k] = [];
      developList[i][j][k][0] = developMap[k][0];
      developList[i][j][k][1] = developMap[k][i * 3 + j + 1];
    }
  }
  developList[i][3] = developList[i][2];
  developList[i][2] = developList[i][0]; //油钢池实际相同
}

//fuel, ammo, steel, baux 油，彈，鋼，鋁
//secretary 秘書艦開發池 0炮戰系 1水雷系 2航母系
//layer 資源開發池 0油 1彈 2鋼 3鋁
//isitaly 特殊秘书舰补正
// 100 Maestrale/Grecale/Libeccio/Scirocco 及其改造形态
// 101 Littorio(Italia)/Roma/Zara/Pola 及其改造形态
// 102 伊势改/伊势改二
// 103 日向改/日向改二
// 104 Ark Royal 及其改造形态
// 105 Warspite/Nelson 及其改造形态
// 106 Commandant Teste 及其改造形态
// 107 Z1/Z3 及其改造形态
// 108 秋月/照月/凉月/初月 及其改造形态
// 109 阿贺野/能代/矢矧/酒匂 及其改造形态
// 110 Saratoga/Hornet 及其改造形态
//hqlevel 司令部等級

function develop(fuel, ammo, steel, baux, secretary, isitaly, hqlevel) {
  fuel = parseInt(fuel);
  ammo = parseInt(ammo);
  steel = parseInt(steel);
  secretary = parseInt(secretary);
  isitaly = parseInt(isitaly);
  if (isitaly < 100) isitaly = 0;
  // isitaly = isitaly != 0;
  baux = parseInt(baux);
  hqlevel = parseInt(hqlevel);
  let layer = 0,
    max = fuel;
  if (steel > max) {
    layer = 2;
    max = steel;
  }
  if (ammo > max) {
    layer = 1;
    max = ammo;
  }
  if (baux > max) {
    layer = 3;
    max = baux;
  }
  let list = developList[secretary][layer].deepCopy();
  //九六陆攻开发池
  if (
    secretary == 2 &&
    (layer == 1 || layer == 3) &&
    fuel >= 240 &&
    ammo >= 260 &&
    baux >= 250
  ) {
    for (let i = 0; i < list.length; ++i) {
      if (list[i][0] == 21) list[i][1] -= 2;
      if (list[i][0] == 23) list[i][1] -= 2;
      if (list[i][0] == 24) list[i][1] -= 2;
      if (list[i][0] == 25) list[i][1] -= 2;
      if (list[i][0] == 168) list[i][1] += 8;
    }
  }
  // 100 Maestrale/Grecale/Libeccio/Scirocco
  if (isitaly == 100 && secretary == 1) {
    if (layer == 0 || layer == 2) {
      for (let i = 0; i < list.length; ++i) {
        if (list[i][0] == 2) list[i][1] -= 2;
        if (list[i][0] == 147) list[i][1] += 2;
      }
    } else if (layer == 1) {
      for (let i = 0; i < list.length; ++i) {
        if (list[i][0] == 16) list[i][1] -= 2;
        if (list[i][0] == 44) list[i][1] -= 2;
        if (list[i][0] == 147) list[i][1] += 4;
      }
    } else if (layer == 3) {
      for (let i = 0; i < list.length; ++i) {
        if (list[i][0] == 25) list[i][1] -= 2;
        if (list[i][0] == 16) list[i][1] -= 2;
        if (list[i][0] == 44) list[i][1] -= 2;
        if (list[i][0] == 163) list[i][1] += 2;
        if (list[i][0] == 147) list[i][1] += 4;
      }
    }
  }
  // 101 Littorio、Roma、Zara、Pola 炮战·铝池
  if (isitaly == 101 && secretary == 0 && layer == 3) {
    for (let i = 0; i < list.length; ++i) {
      if (list[i][0] == 10) list[i][1] -= 2;
      if (list[i][0] == 22) list[i][1] -= 2;
      if (list[i][0] == 25) list[i][1] -= 2;
      if (list[i][0] == 163) list[i][1] += 6;
    }
  }
  // 102 伊势改/伊势改二 空母·铝池
  if (isitaly == 102 && secretary == 2 && layer == 3) {
    for (let i = 0; i < list.length; ++i) {
      if (list[i][0] == 19) list[i][1] -= 2;
      if (list[i][0] == 207) list[i][1] += 2;
    }
  }
  // 103 日向改/日向改二 空母·弹池
  if (isitaly == 103 && secretary == 2) {
    if (layer == 1) {
      for (let i = 0; i < list.length; ++i) {
        if (list[i][0] == 19) list[i][1] -= 2;
        if (list[i][0] == 207) list[i][1] += 2;
      }
    } else if (layer == 3) {
      for (let i = 0; i < list.length; ++i) {
        if (list[i][0] == 19) list[i][1] -= 2;
        if (list[i][0] == 207) list[i][1] += 2;
      }
    }
  }
  //104 Ark Royal 空母
  if (isitaly == 104 && secretary == 2) {
    if (layer == 3) {
      for (let i = 0; i < list.length; ++i) {
        if (list[i][0] == 16) list[i][1] -= 2;
        if (list[i][0] == 20) list[i][1] -= 2;
        if (list[i][0] == 21) list[i][1] -= 2;
        if (list[i][0] == 23) list[i][1] -= 2;
        if (list[i][0] == 25) list[i][1] -= 2;
        if (list[i][0] == 242) list[i][1] += 6;
        if (list[i][0] == 249) list[i][1] += 4;
      }
    } else if (layer == 1) {
      for (let i = 0; i < list.length; ++i) {
        if (list[i][0] == 16) list[i][1] -= 2;
        if (list[i][0] == 23) list[i][1] -= 2;
        if (list[i][0] == 25) list[i][1] -= 2;
        if (list[i][0] == 242) list[i][1] += 4;
        if (list[i][0] == 249) list[i][1] += 2;
      }
    }
  }
  // 105 Warspite/Nelson 炮战·铝池
  if (isitaly == 105 && secretary == 0 && layer == 3) {
    for (let i = 0; i < list.length; ++i) {
      if (list[i][0] == 10) list[i][1] -= 2;
      if (list[i][0] == 20) list[i][1] -= 2;
      if (list[i][0] == 21) list[i][1] -= 2;
      if (list[i][0] == 250) list[i][1] += 6;
    }
  }
  // 106 Commandant Teste 空母
  if (isitaly == 106 && secretary == 2) {
    if (layer == 3) {
      for (let i = 0; i < list.length; ++i) {
        if (list[i][0] == 16) list[i][1] -= 2;
        if (list[i][0] == 18) list[i][1] -= 2;
        if (list[i][0] == 20) list[i][1] -= 2;
        if (list[i][0] == 21) list[i][1] -= 2;
        if (list[i][0] == 194) list[i][1] += 8;
      }
    } else if (layer == 1) {
      for (let i = 0; i < list.length; ++i) {
        if (list[i][0] == 16) list[i][1] -= 2;
        if (list[i][0] == 18) list[i][1] -= 2;
        if (list[i][0] == 194) list[i][1] += 4;
      }
    }
  }
  // 107 Z1/Z3 水雷
  if (isitaly == 107 && secretary == 1) {
    if (layer == 0 || layer == 2) {
      for (let i = 0; i < list.length; ++i) {
        if (list[i][0] == 14) list[i][1] -= 2;
        if (list[i][0] == 78) list[i][1] += 2;
      }
    } else if (layer == 1) {
      for (let i = 0; i < list.length; ++i) {
        if (list[i][0] == 14) list[i][1] -= 2;
        if (list[i][0] == 34) list[i][1] -= 2;
        if (list[i][0] == 44) list[i][1] -= 2;
        if (list[i][0] == 78) list[i][1] += 6;
      }
    } else if (layer == 3) {
      for (let i = 0; i < list.length; ++i) {
        if (list[i][0] == 34) list[i][1] -= 2;
        if (list[i][0] == 44) list[i][1] -= 2;
        if (list[i][0] == 78) list[i][1] += 4;
      }
    }
  }
  // 108 秋月/照月/凉月/初月 水雷
  if (isitaly == 108 && secretary == 1) {
    if (layer == 0 || layer == 2) {
      for (let i = 0; i < list.length; ++i) {
        if (list[i][0] == 1) list[i][1] -= 2;
        if (list[i][0] == 4) list[i][1] -= 2;
        if (list[i][0] == 30) list[i][1] += 4;
      }
    } else if (layer == 3) {
      for (let i = 0; i < list.length; ++i) {
        if (list[i][0] == 20) list[i][1] -= 2;
        if (list[i][0] == 25) list[i][1] -= 2;
        if (list[i][0] == 46) list[i][1] -= 2;
        if (list[i][0] == 30) list[i][1] += 6;
      }
    }
  }
  // 109 阿贺野/能代/矢矧/酒匂
  if (isitaly == 109 && secretary == 1) {
    if (layer == 0 || layer == 2) {
      for (let i = 0; i < list.length; ++i) {
        if (list[i][0] == 1) list[i][1] -= 2;
        if (list[i][0] == 2) list[i][1] -= 2;
        if (list[i][0] == 66) list[i][1] += 4;
      }
    } else if (layer == 1) {
      for (let i = 0; i < list.length; ++i) {
        if (list[i][0] == 10) list[i][1] -= 2;
        if (list[i][0] == 16) list[i][1] -= 2;
        if (list[i][0] == 66) list[i][1] += 4;
      }
    } else if (layer == 3) {
      for (let i = 0; i < list.length; ++i) {
        if (list[i][0] == 10) list[i][1] -= 2;
        if (list[i][0] == 16) list[i][1] -= 2;
        if (list[i][0] == 66) list[i][1] += 4;
      }
    }
  }
  // 110 Saratoga/Hornet
  if (isitaly == 110 && secretary == 2) {
    if (layer == 1) {
      for (let i = 0; i < list.length; ++i) {
        if (list[i][0] == 18) list[i][1] -= 2;
        if (list[i][0] == 23) list[i][1] -= 2;
        if (list[i][0] == 26) list[i][1] -= 2;
        if (list[i][0] == 195) list[i][1] += 6;
      }
    } else if (layer == 3) {
      for (let i = 0; i < list.length; ++i) {
        if (list[i][0] == 18) list[i][1] -= 2;
        if (list[i][0] == 23) list[i][1] -= 2;
        if (list[i][0] == 26) list[i][1] -= 2;
        if (list[i][0] == 19) list[i][1] -= 2;
        if (list[i][0] == 20) list[i][1] -= 4;
        if (list[i][0] == 195) list[i][1] += 6;
        if (list[i][0] == 197) list[i][1] += 6;
      }
    }
  }
  //比叡改二/比叡改二丙
  if (isitaly == 111 && secretary == 0) {
    if (layer == 3) {
      for (let i = 0; i < list.length; ++i) {
        if (list[i][0] == 19) list[i][1] -= 2;
        if (list[i][0] == 23) list[i][1] -= 2;
        if (list[i][0] == 26) list[i][1] -= 2;
        if (list[i][0] == 74) list[i][1] += 6;
      }
    }
  }
  //神通改二
  if (isitaly == 112 && secretary == 1) {
    if (layer == 3) {
      for (let i = 0; i < list.length; ++i) {
        if (list[i][0] == 19) list[i][1] -= 2;
        if (list[i][0] == 25) list[i][1] -= 2;
        if (list[i][0] == 46) list[i][1] -= 2;
        if (list[i][0] == 74) list[i][1] += 6;
      }
    }
  }
  //神风
  if (isitaly == 113 && secretary == 1) {
    if (layer == 0 || layer == 2) {
      for (let i = 0; i < list.length; ++i) {
        if (list[i][0] == 3) list[i][1] -= 2;
        if (list[i][0] == 12) list[i][1] -= 2;
        if (list[i][0] == 19) list[i][1] -= 2;
        if (list[i][0] == 16) list[i][1] -= 2;
        if (list[i][0] == 37) list[i][1] += 8;
      }
    } else if (layer == 1) {
      for (let i = 0; i < list.length; ++i) {
        if (list[i][0] == 12) list[i][1] -= 2;
        if (list[i][0] == 37) list[i][1] += 2;
      }
    }
  }
  //睦月
  if (isitaly == 114 && secretary == 1) {
    if (layer == 0 || layer == 2) {
      for (let i = 0; i < list.length; ++i) {
        if (list[i][0] == 5) list[i][1] -= 2;
        if (list[i][0] == 11) list[i][1] -= 2;
        if (list[i][0] == 20) list[i][1] -= 2;
        if (list[i][0] == 23) list[i][1] -= 2;
        if (list[i][0] == 65) list[i][1] -= 2;
        if (list[i][0] == 38) list[i][1] += 10;
      }
    } else if (layer == 1) {
      for (let i = 0; i < list.length; ++i) {
        if (list[i][0] == 5) list[i][1] -= 2;
        if (list[i][0] == 11) list[i][1] -= 2;
        if (list[i][0] == 65) list[i][1] -= 2;
        if (list[i][0] == 38) list[i][1] += 6;
      }
    }
  }
  //吹雪
  if (isitaly == 115 && secretary == 1) {
    if (layer == 0 || layer == 2) {
      for (let i = 0; i < list.length; ++i) {
        if (list[i][0] == 4) list[i][1] -= 2;
        if (list[i][0] == 11) list[i][1] -= 4;
        if (list[i][0] == 25) list[i][1] -= 2;
        if (list[i][0] == 65) list[i][1] -= 2;
        if (list[i][0] == 49) list[i][1] += 10;
      }
    } else if (layer == 1) {
      for (let i = 0; i < list.length; ++i) {
        if (list[i][0] == 65) list[i][1] -= 2;
        if (list[i][0] == 11) list[i][1] -= 2;
        if (list[i][0] == 49) list[i][1] += 4;
      }
    }
  }

  //あきつ丸,神州丸,宗谷特务舰
  if (isitaly == 116 && secretary == 2) {
    if (layer == 0 || layer == 2) {
      for (let i = 0; i < list.length; ++i) {
        if (list[i][0] == 68) list[i][1] += 6;
        if (list[i][0] == 37) list[i][1] += 4;
        if (list[i][0] == 38) list[i][1] += 4;
        if (list[i][0] == 69) list[i][1] += 4;
        if (list[i][0] == 70) list[i][1] += 2;
        if (list[i][0] == 221) list[i][1] += 2;
        if (list[i][0] == 445) list[i][1] += 4;
        if (list[i][0] == 20) list[i][1] -= 2;
        if (list[i][0] == 21) list[i][1] -= 2;
        if (list[i][0] == 181) list[i][1] -= 2;
        if (list[i][0] == 25) list[i][1] -= 6;
        if (list[i][0] == 26) list[i][1] -= 2;
        if (list[i][0] == 41) list[i][1] -= 6;
        if (list[i][0] == 33) list[i][1] -= 2;
        if (list[i][0] == 34) list[i][1] -= 2;
        if (list[i][0] == 29) list[i][1] -= 2;
      }
    } else if (layer == 1) {
      for (let i = 0; i < list.length; ++i) {
        if (list[i][0] == 68) list[i][1] += 2;
        if (list[i][0] == 37) list[i][1] += 4;
        if (list[i][0] == 38) list[i][1] += 4;
        if (list[i][0] == 69) list[i][1] += 2;
        if (list[i][0] == 70) list[i][1] += 2;
        if (list[i][0] == 221) list[i][1] += 2;
        if (list[i][0] == 445) list[i][1] += 6;
        if (list[i][0] == 17) list[i][1] -= 4;
        if (list[i][0] == 52) list[i][1] -= 2;
        if (list[i][0] == 57) list[i][1] -= 2;
        if (list[i][0] == 60) list[i][1] -= 2;
        if (list[i][0] == 25) list[i][1] -= 4;
        if (list[i][0] == 26) list[i][1] -= 2;
        if (list[i][0] == 35) list[i][1] -= 4;
        if (list[i][0] == 41) list[i][1] -= 2;
      }
    } else if (layer == 3) {
      for (let i = 0; i < list.length; ++i) {
        if (list[i][0] == 37) list[i][1] += 2;
        if (list[i][0] == 38) list[i][1] += 2;
        if (list[i][0] == 69) list[i][1] += 4;
        if (list[i][0] == 70) list[i][1] += 4;
        if (list[i][0] == 221) list[i][1] += 6;
        if (list[i][0] == 445) list[i][1] += 10;
        if (list[i][0] == 17) list[i][1] -= 4;
        if (list[i][0] == 22) list[i][1] -= 2;
        if (list[i][0] == 25) list[i][1] -= 2;
        if (list[i][0] == 26) list[i][1] -= 2;
        if (list[i][0] == 52) list[i][1] -= 2;
        if (list[i][0] == 54) list[i][1] -= 4;
        if (list[i][0] == 55) list[i][1] -= 2;
        if (list[i][0] == 57) list[i][1] -= 2;
        if (list[i][0] == 60) list[i][1] -= 2;
        if (list[i][0] == 61) list[i][1] -= 2;
        if (list[i][0] == 35) list[i][1] -= 4;
      }
    }
  }

  // 117 Sendai K2
  if (isitaly == 117 && secretary == 1 && layer == 3) {
      for (let i = 0; i < list.length; ++i) {
        if (list[i][0] == 20) list[i][1] -= 2;
        if (list[i][0] == 102) list[i][1] += 2;
    }
  }

  //去除出率0
  for (let i = 0; i < list.length; ++i) {
    if (list[i][1] <= 0) {
      list.splice(i, 1);
      --i;
    }
  }
  let succ = [],
    fail = [];
  let failprob = 100;
  for (let i = 0; i < list.length; ++i) {
    let result = new developResult(
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
