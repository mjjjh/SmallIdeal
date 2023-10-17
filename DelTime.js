// 六个时间段编号
pos = ["A", "B", "C", "D", "E", "F"]

// 具体一天剩余编号
Orderdata = "AE"

// 完整时间段
ls = {
    "上午": ["6", "9", "12"],
    "下午": ["14", "18", "22"]
}

// 排查数据
function check(data) {
    let delnum = [0, 0]
    for (let i = 0; i < pos.length; i++) {
        if (data.indexOf(pos[i]) == -1) {
            if (i < 3) {
                ls["上午"].splice((pos.indexOf(pos[i])) % 3 - delnum[0], 1)
                delnum[0]++;
            }
            else {
                ls["下午"].splice((pos.indexOf(pos[i])) % 3 - delnum[1], 1)
                delnum[1]++;
            }
        }
    }
    console.log(ls);
}

check(Orderdata)
