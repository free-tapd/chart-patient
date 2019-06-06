export const getAge = (identityCard) => {
  var len = (identityCard + "").length;
  if (len == 0) {
    return "";
  } else {
    if ((len != 15) && (len != 18)) {
      return "";
    }
  }
  var strBirthday = "";
  if (len == 18) {
    strBirthday = identityCard.substr(6, 4) + "/" + identityCard.substr(10, 2) + "/" + identityCard.substr(12, 2);
  }
  if (len == 15) {
    strBirthday = "19" + identityCard.substr(6, 2) + "/" + identityCard.substr(8, 2) + "/" + identityCard.substr(10, 2);
  }
  //时间字符串里，必须是“/”
  var birthDate = new Date(strBirthday);
  var nowDateTime = new Date();
  var age = nowDateTime.getFullYear() - birthDate.getFullYear();
  //再考虑月、天的因素;.getMonth()获取的是从0开始的，这里进行比较，不需要加1
  if (nowDateTime.getMonth() < birthDate.getMonth() || (nowDateTime.getMonth() == birthDate.getMonth() && nowDateTime.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export const isSex=(idCard)=>{
  // 1 男 2女
    //获取性别
    if (parseInt(idCard.substr(16, 1)) % 2 == 1) {
        //男
  return 1;
    } else {
        //女
  return 2;
    }
}
