'use client'
import { Container } from "postcss";
import { Profiler, useEffect, useMemo, useRef, useState } from "react";
import styles from '../app/mainPage.module.css'
import { userAgent } from "next/server";


export default function Home() {
  const [password, setPassword] = useState('');
  const [color1, setColor1] = useState('azure');
  const [color2, setColor2] = useState('azure');
  const [color3, setColor3] = useState('azure');
  const [color4, setColor4] = useState('azure');
  let count = 0;
  let flag1 = true;

  const passwordRef = useRef('')
  function containsUppercase(str) {
    return /[A-Z]/.test(str);
  }


  function isUpperCase(str) {
    if (str === str.toLowerCase()) {
      return 0;
    } else {
      return 1;
    }
  }



  function hasNumber(str) {
    const arrayStr = str.split("");
    let result = 0;

    arrayStr.forEach((item) => {
      for (let i = 0; i <= 9; i++) {
        if (Number(item) === i) {
          result = 1;
          break;
        }
      }
    })
    return result
    // return /\d/.test(str);
  }

  function containsSpecialChars(str) {

    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    // const specialChars = ["/","[", "\"","\'","`","!","@",'#','$','%','^','&','*','(',')','_','+','\\','-','=','[','\\',']','{','}',';',':',',"',',','.','<','>','\','/','?','~',']','/'];
    // const arrayStr = str.split("");
    // console.log(typeof specialChars);
    // const arraySpc = specialChars.split("");
    // let result = 0;

    // arrayStr.forEach((item) => {
    //   arraySpc.forEach((el) => {
    //     if (item === el) {
    //       result = 1;

    //     }
    //   })
    // })
    // return result
    return specialChars.test(str);
  }

  let a = 'A'
  // console.log(a.charCode());
  const handleChange = () => {
    let upperCase = false;
    let number = false;
    let special = false;

    // upperCase = containsUppercase(passwordRef.current.value) ? true : false;
    let up = isUpperCase(passwordRef.current.value);
    // console.log(up);
    // number = hasNumber(passwordRef.current.value) ? true : false;
    hasNumber(passwordRef.current.value)
    special = containsSpecialChars(passwordRef.current.value) ? true : false;

    if (!(passwordRef.current.value === '')) {

      setColor1('green');
    } else {
      setColor1('azure');
    }


    if (upperCase) {
      if (flag1) {
        count++;
        flag1 = false;
      }
      setColor2('green');
    } else {
      setColor2('azure');
    }
    if (number) {
      setColor3('green');
    } else {
      setColor3('azure');
    }
    if (special) {
      setColor4('green');
    } else {
      setColor4('azure');
    }

    // console.log(`Up: ${upperCase}, Num: ${number}, Num: ${special}`);
    // if (!upperCase || !number || !special) return;
    // passwordRef.current = password;
    // console.log(passwordRef.current);
  }

  // const x = useEffect(
  //   () => {
  //     const boxes = document.querySelectorAll(`${styles.box}`)
  //     console.log(boxes);
  //     boxes.forEach((item) => {
  //       console.log(`a`);
  //       item.style.backgroundColor = color1;
  //     })
  //   }, [])


  const DisplayP = () => {
    let a = '';
    // if (passwordRef.current == undefined) {
    //   a = 'undefined'
    // } else {
    //   a = passwordRef.current
    // }
    return <div> Your password is: {a}</div>
  }

  return (
    <Profiler id="Navigation" onRender={() => {
      console.log('render')
    }}>
      <div className={styles.container} >
        <h1>Password Input</h1>
        <input
          ref={passwordRef}
          type={'text'}
          onChange={handleChange}
        />
        <div className="flex ">
          <div id="box1" className={styles.box} style={{ backgroundColor: color1 }}></div>
          <div id="box2" className={styles.box} style={{ backgroundColor: color2 }}></div>
          <div id="box3" className={styles.box} style={{ backgroundColor: color3 }}></div>
          <div id="box4" className={styles.box} style={{ backgroundColor: color4 }}></div>
        </div>
        <button
          className="border-[5px] rounded w-[100px]"
          onClick={
            () => {
              setPassword(passwordRef.current);
            }
          }>Set</button>
        {console.log(passwordRef.current.value)}

        <DisplayP></DisplayP>

        {/* {console.log(`rendering`)} */}



      </div >
    </Profiler>
  )
}
