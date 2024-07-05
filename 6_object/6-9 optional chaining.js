const response = {
  data: {
    userList: [
      {
        name: "kang",
        info: {
          tel: "010-1234-5678",
          address: "seoul"
        }
      }
    ]
  }
}

console.log(response.data.userList[0].info.tel)  // 010-1234-5678

function getUserEmailByIndex(userIndex) {
  return response?.data?.userList?.[userIndex]?.info?.email
} 