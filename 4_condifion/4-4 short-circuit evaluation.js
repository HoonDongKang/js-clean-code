true && true && "도달O";
true && false && "도달X";

false || false || "도달O";
true || true || "도달X";

function favoriteDog(someDog) {
  return (someDog || "냐용") + "이 좋아요";
}

const getActiveUser = (user, isLogin) => {
  if (isLogin) {
    if (user) {
      if (user.name) {
        return user.name;
      } else {
        return "이름없음";
      }
    }
  }
};
const getActiveUser2 = (user, isLogin) => {
  if (isLogin && user) {
    return user.name || "이름없음";
  }
};
