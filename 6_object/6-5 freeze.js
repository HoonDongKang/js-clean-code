const STATUS = Object.freeze({
    PENDING: 'PENDING',
    FULFILLED: 'FULFILLED',
    REJECTED: 'REJECTED',
    TEST: {
        A: 1,
        B: 2
    }
})

STATUS.PENDING = 'pending' // TypeError: Cannot assign to read only property 'PENDING' of object '#<Object>'

console.log(STATUS) // { PENDING: 'PENDING', FULFILLED: 'FULFILLED', REJECTED: 'REJECTED' }

Object.isFrozen(STATUS) // true

STATUS.TEST.A = 3

console.log(STATUS) // { PENDING: 'PENDING', FULFILLED: 'FULFILLED', REJECTED: 'REJECTED', TEST: { A: 3, B: 2 } }

Object.isFrozen(STATUS.TEST)

// 깊은 복사 막기

function deepFreeze(obj){
  //객체 순회
  Object.keys(obj).forEach(key => {
    //객체 확인
    const value = obj[key]
    //재귀를 통한 freeze
    if(typeof value === 'object' && value !== null){
      deepFreeze(value)
    }
  })
  //그 외 freeze
    return Object.freeze(obj)
}
