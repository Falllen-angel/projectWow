import React,{useState} from "react";
import p1 from '../images/p1.png';
import p2 from '../images/p2.png';
import p3 from '../images/p3.png';
import p4 from '../images/p4.png';
import p5 from '../images/p5.png';
import p6 from '../images/p6.png';
import { ProProvider } from "../HContext";
import styles from './Products.module.css';
import {Route, Link} from 'react-router-dom';

function Product({item, onToggle}){
  return (
      <li className={styles.box}
        style={{color:item.active? 'red':'black'}} onClick={()=>onToggle(item.id)}>
          <div className={styles.in_box}>
            <img src={item.src} style={{width:'100%', borderBottom:'1px solid #ccc'}}  alt="" />
            <h4 style={{ padding:'0 0 0 10px'}}>{item.name}</h4>
            <p style={{ padding:'5px 0 0 10px'}}>{item.price}</p>

          </div>
      </li>

  )
}
export default function ProductList(){
  const [items, setItLi] = useState([
      {
        id : 1,
        name : '하겐다즈 샌드위치 말차베리 (3입)',
        price : '₩17,900',
        R_price : 0,
        src : p1,
        type : "sb",
        quantity : 343,
        active:false,

      },
      {
        id : 2,
        name : '하겐다즈 마드리드 츄로스 (미니컵) 100ml',
        price : "₩6,900",
        R_price : 0,
        src : p2,
        type : "mpt",
        quantity : 343,
        active:false,
      },
      {
        id : 3,
        name : '하겐다즈 로마 티라미수 (미니컵) 100ml',
        price : "₩6,900",
        R_price : 0,
        src : p3,
        type : "mpt",
        quantity : 343,
        active:false,
      },
      {
        id : 4,
        name : '하겐다즈 블루베리 앤 크림 (파인트) 473ml',
        price : "₩17,900",
        R_price : 0,
        src : p4,
        type : "pt",
        quantity : 343,
        active:false,
      },
      {
        id : 5,
        name : '하겐다즈 로마 티라미수 (파인트) 403ml',
        price : "₩17,900",
        R_price : 0,
        src : p5,
        type : "pt",
        quantity : 343,
        active:false,
      },
      {
        id : 6,
        name : '하겐다즈 로마 티라미수 (파인트) 403ml',
        price : "₩17,900",
        R_price : 0,
        src : p4,
        type : "pt",
        quantity : 343,
        active:false,
      },
      {
        id : 7,
        name : '하겐다즈 마드리드 츄로스 (파인트) 403ml',
        price : "₩6,900",
        R_price : 0,
        src : p2,
        type : "mpt",
        quantity : 343,
        active:false,
      },
      
  ]);
  const onToggle = (id) => {
    setItLi(items.map(item=>item.id===id?{...item, active:!item.active}:item))
  };


  const [filteredItems, setFilteredItems] = useState(items);

  const handleFilter = (type) => {
    if (type === 'all') {
      setFilteredItems(items);
    } else {
      const filtered = items.filter((item) => {
        // 타입 문자열에 포함되는지 체크
        if (type === 'pt') return item.type === 'pt';
        if (type === 'mpt') return item.type === 'mpt';
        if (type === 'sb') return item.type === 'sb';
        if (type === 'ck') return item.type === 'ck';
        return true;
      });
      setFilteredItems(filtered);
    }
  };
  
  return(
    <>
      <ul className={styles.L_box}>
        <div className={styles.type_nav}>
          <ul>
            <li onClick={() => setFilteredItems(items)}>All</li>
            <li onClick={() => handleFilter('pt')}>Pint</li>
            <li onClick={() => handleFilter('mpt')}>Mini</li>
            <li onClick={() => handleFilter('sb')}>Stick</li>
            <li onClick={() => handleFilter('ck')}>Cake</li>
          </ul>
        </div>
        {/* <div className={styles.products}>
          {
            items.map(item=>(
              <Product item={item} key={item.id}  onToggle={onToggle}/>
            ))
          }
        </div> */}
        <div className={styles.products}>
          {
            filteredItems.map(item => (
              <Product item={item} key={item.id} onToggle={onToggle} />
            ))
          }
        </div>

      </ul>
    </>
  )
}


// {
//   id : '4',
//   name : '[하겐다즈]파인트&멀티바 딸기+마카다미아넛+스트로벨리앤크림/34ㅐ 세트 외 13종',
//   price : 53700,
//   R_price : 35900,
//   src : "/images/p3.png",
//   type : "gp",
//   quantity : 343,
// active:false,
// },
// {
//   id : '5',
//   name : '하겐다즈 마카롱 스트로베리&라즈베리 (파인트) 403ml',
//   price : 17900,
//   R_price : 0,
//   src : "/images/p4.png",
//   type : "stick bar",
//   quantity : 343,
// active:false,
// },