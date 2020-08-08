async function f1 () {
  try {
    await f2()
  } catch (error) {
    console.log('at f1', error)
  }
}

async function f2 () {
  try {
    await f3()
  } catch (error) {
    throw (error)
  }
}

async function f3 () {
  return new Promise((resolve, reject) => {
    const randNum = Math.random()
    console.log('👉: randNum', randNum)
    if (randNum < 0.5) {
      reject(new Error('async error'))
    }
  })
}

f1()
