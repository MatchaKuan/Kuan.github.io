/* 重置函數 */
function rest01() {
    document.getElementById("01").reset();
}
function rest02() {
    document.getElementById("02").reset();
}

/* 三角形公式 */
function area() {
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var c = parseFloat(document.getElementById("c").value);

    if (a + b > c && b + c > a && c + a > b) {
        s = (a + b + c) / 2;
        area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
        document.getElementById("result").innerHTML = "面積為" + area;
    }
    else
        document.getElementById("result").innerHTML = a + " " + b + " " + c + "三角形無法形成";
}

/* 直線公式1 */
function line1() {
    var i = parseFloat(document.getElementById("i").value);
    var j = parseFloat(document.getElementById("j").value);
    var k = parseFloat(document.getElementById("k").value);
    var l = parseFloat(document.getElementById("l").value);

    x = j - l;
    y = k - i;
    z = i * (j - l) + j * (k - i);

   
    x3 =i + j;
    y3 = k + l;
    area1 = (x3 * y3) / 2;
    if (area1 == 0) {
        document.getElementById("linevar1").innerHTML = "直線公式為= " + x + "x + " + y + "y = " + z;
        document.getElementById("area1").innerHTML = "這無法成為面積喔";
    }
    else {
        document.getElementById("linevar1").innerHTML = "直線公式為= " + x + "x + " + y + "y = " + z;
        document.getElementById("area1").innerHTML = "面積為= " + area1;
    }
                
}
/* 直線公式2 */
function line2() {
    var i2 = parseFloat(document.getElementById("i2").value);
    var j2 = parseFloat(document.getElementById("j2").value);
    var k2 = parseFloat(document.getElementById("k2").value);
    var l2 = parseFloat(document.getElementById("l2").value);
    var m2 = parseFloat(document.getElementById("m2").value);
    var n2 = parseFloat(document.getElementById("n2").value);

    a2 = Math.sqrt((j2 - i2) * (j2 - i2) + (l2 - k2) * (l2 - k2))
    b2 = Math.sqrt((j2 - k2) * (l2 - k2) + (n2 - m2) * (n2 - m2))
    c2 = Math.sqrt((n2 - m2) * (n2 - m2) + (j2 - i2) * (j2 - i2))

    s2 = (a2 + b2 + c2) / 2;
    area2 = Math.sqrt(s2 * (s2 - a2) * (s2 - b2) * (s2 - c2));

    if (a2 == 0 && b2 == 0 && c2 == 0) {
        document.getElementById("area2").innerHTML = "這無法成為面積喔";
        alert("這無法成為面積喔");
    }
    else {
        document.getElementById("area2").innerHTML = "面積為= " + area2;
    }
}

/* 轉動骰子1 */
function rollDice(){
    /* 定義參數 */
    var die1 = document.getElementById("dice_1");
	var die2 = document.getElementById("dice_2");
	var die3 = document.getElementById("dice_3");
	var die4 = document.getElementById("dice_4");
    var status = document.getElementById("status");
    
	/* 亂數參數 */
    var d1 = Math.floor(Math.random() * 6) + 1;
	var d2 = Math.floor(Math.random() * 6) + 1;
	var d3 = Math.floor(Math.random() * 6) + 1;
    var d4 = Math.floor(Math.random() * 6) + 1;
    
	/* 映出參數 */
	document.getElementById("dice_1").src = "images_hw/dice_" + d1 + ".png"
	document.getElementById("dice_2").src = "images_hw/dice_" + d2 + ".png"
	document.getElementById("dice_3").src = "images_hw/dice_" + d3 + ".png"
	document.getElementById("dice_4").src = "images_hw/dice_" + d4 + ".png"
    
    /* 加總參數 */
    var diceTotal = d1 + d2 + d3 + d4;
    die1.innerHTML = d1;
	die2.innerHTML = d2;
	die3.innerHTML = d3;
	die4.innerHTML = d4;
   
	 /* 判斷參數 */
	var form = document.getElementById("radio1");
	if ( choice == 1 ){
        if ( diceTotal%2 == 0 ){
			alert ("你輸了");
			status.innerHTML = "你擲出這個 " + diceTotal + " 是偶數";
        }
        else{
			alert ("你贏了");
			status.innerHTML = "恭喜，你獲得 " + diceTotal + " 分";
        }
    }
    else if (choice == 2 ){
        if ( diceTotal%2 == 0 ){
			alert ("你贏了");
			status.innerHTML = "恭喜，你獲得 " + diceTotal + " 分";
        }
        else{
			alert ("你輸了");
			status.innerHTML = "你擲出這個 " + diceTotal + " 是奇數";
        }
	}
	
}

/* 轉動骰子2 */
function guess(){
    /* 定義參數 */
    var die5 = document.getElementById("dice_5");
	var die6 = document.getElementById("dice_6");
	var die7 = document.getElementById("dice_7");
	var die8 = document.getElementById("dice_8");
    var status = document.getElementById("status1");
    
	/* 亂數參數 */
    var d5 = Math.floor(Math.random() * 6) + 1;
	var d6 = Math.floor(Math.random() * 6) + 1;
	var d7 = Math.floor(Math.random() * 6) + 1;
    var d8 = Math.floor(Math.random() * 6) + 1;
    
	/* 映出參數 */
	document.getElementById("dice_5").src = "images_hw/dice_" + d5+ ".jpg"
	document.getElementById("dice_6").src = "images_hw/dice_" + d6 + ".jpg"
	document.getElementById("dice_7").src = "images_hw/dice_" + d7 + ".jpg"
	document.getElementById("dice_8").src = "images_hw/dice_" + d8 + ".jpg"
    
    /* 加總參數 */
    var diceTotal2 = d5 + d6 + d7 + d8;
    die5.innerHTML = d5;
	die6.innerHTML = d6;
	die7.innerHTML = d7;
	die8.innerHTML = d8;
   
    /* 判斷參數 */
	var form = document.getElementById("radio1");
	if ( choice == 1 ){
        if ( diceTotal2 >= 12 ){
			alert ("猜對啦");
			status1.innerHTML = "恭喜，你獲得 " + diceTotal2 + " 分，是大於沒錯";
        }
        else{
			alert ("猜錯囉");
			status1.innerHTML = "再一次， " + diceTotal2 + "是大於才對";
        }
        
    }
    else if (choice == 2 ){
        if ( diceTotal2 < 12 ){
			alert ("猜對啦");
			status1.innerHTML = "恭喜，你獲得 " + diceTotal2 + " 分，是大於沒錯";
        }
        else{
			alert ("猜錯囉");
			status1.innerHTML = "再一次， " + diceTotal2 + "是大於才對";
        }
	}
}