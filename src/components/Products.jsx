import React,{useState} from "react";
import p1 from '../images/p1.png';
import p2 from '../images/p2.png';
import p3 from '../images/p3.png';
import p4 from '../images/p4.png';
import p5 from '../images/p5.png';
import p6 from '../images/p6.png';
import p7 from '../images/p7.png';
import p8 from '../images/p8.png';
import p9 from '../images/p9.png';
import p10 from '../images/p10.png';
import p11 from '../images/p11.png';
import p12 from '../images/p12.png';
import p13 from '../images/p13.png';
import p14 from '../images/p14.png';
import p15 from '../images/p15.png';
import p16 from '../images/p16.png';
import p17 from '../images/p17.png';
import p18 from '../images/p18.png';
import p19 from '../images/p19.png';
import p20 from '../images/p20.png';
import p21 from '../images/p21.png';
import p22 from '../images/p22.png';
import p23 from '../images/p23.png';
import p24 from '../images/p24.png';
import p25 from '../images/p25.png';
import p26 from '../images/p26.png';
import p27 from '../images/p27.png';
import p28 from '../images/p28.png';
import p29 from '../images/p29.png';
import p30 from '../images/p30.png';
import p31 from '../images/p31.png';
import p32 from '../images/p32.png';
import p33 from '../images/p33.png';
import p34 from '../images/p34.png';
import p35 from '../images/p35.png';
import p36 from '../images/p36.png';
import p37 from '../images/p37.png';
import p38 from '../images/p38.png';
import p39 from '../images/p39.png';
import p40 from '../images/p40.png';
import p41 from '../images/p41.png';
import p42 from '../images/p42.png';
import p43 from '../images/p43.png';
import p44 from '../images/p44.png';
import p45 from '../images/p45.png';
import p46 from '../images/p46.png';
import p47 from '../images/p47.png';
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
        src : p6,
        type : "pt",
        quantity : 343,
        active:false,
      },
      {
        id : 7,
        name : '하겐다즈 로마 티라미수 (스틱바) 80ml',
        price : "₩6,900",
        R_price : 0,
        src : p7,
        type : "mpt",
        quantity : 343,
        active:false,
      },
      {
        id : 8,
        name : '하겐다즈 망고&패션후르츠 (스틱바) 80ml',
        price : "₩6,900",
        R_price : 0,
        src : p8,
        type : "sb",
        quantity : 343,
        active:false,
      },
      {
        id : 9,
        name : '하겐다즈 피치&라즈베리 (스틱바) 80ml',
        price : "₩6,900",
        R_price : 0,
        src : p9,
        type : "sb",
        quantity : 343,
        active:false,
      },
      {
        id : 10,
        name : '하겐다즈 미니컵/스틱바 6+3 세트',
        price : "₩62,100",
        R_price : "₩39,900",
        src : p10,
        type : "gp",
        quantity : 343,
        active:false,
      },
      {
        id : 11,
        name : '하겐다즈 스트로베리&그린티 (멀티바) 75ml x 3',
        price : "₩17,900",
        R_price : 0,
        src : p10,
        type : "gp",
        quantity : 343,
        active:false,
      },
      {
        id : 12,
        name : '하겐다즈 그린티&레몬 (멀티바) 75ml x 3',
        price : "₩6,900",
        R_price : 0,
        src : p12,
        type : "sb",
        quantity : 343,
        active:false,
      },
      {
        id : 13,
        name : '하겐다즈 스트로베리&그린티 (스틱바) 75ml',
        price : "₩6,900",
        R_price : 0,
        src : p13,
        type : "sb",
        quantity : 343,
        active:false,
      },
      {
        id : 14,
        name : '하겐다즈 마카롱 바닐라&블루베리 (스틱바) 80ml',
        price : "₩6,900",
        R_price : 0,
        src : p14,
        type : "sb",
        quantity : 343,
        active:false,
      },
      {
        id : 15,
        name : '하겐다즈 피스타치오 앤 크림 (미니컵) 100ml',
        price : "₩6,900",
        R_price : 0,
        src : p15,
        type : "mpt",
        quantity : 343,
        active:false,
      },
      {
        id : 16,
        name : '하겐다즈 마카롱 스트로베리&라즈베리 (파인트) 403ml',
        price : "₩17,900",
        R_price : 0,
        src : p16,
        type : "pt",
        quantity : 343,
        active:false,
      },
      {
        id : 17,
        name : '하겐다즈 마카롱 더블 초콜릿 가나슈 (파인트) 403ml',
        price : "₩17,900",
        R_price : 0,
        src : p17,
        type : "pt",
        quantity : 343,
        active:false,
      },
      {
        id : 18,
        name : '하겐다즈 카라멜비스킷 & 크림 (파인트) 473ml',
        price : "₩15,500",
        R_price : 0,
        src : p18,
        type : "pt",
        quantity : 343,
        active:false,
      },
      {
        id : 19,
        name : '하겐다즈 커피 (파인트) 473ml',
        price : "₩17,900",
        R_price : 0,
        src : p19,
        type : "pt",
        quantity : 343,
        active:false,
      },
      {
        id : 20,
        name : '하겐다즈 2단 미니 생일축하해요 더블 쇼콜라 아이스크림 케이크',
        price : "₩29,900",
        R_price : 0,
        src : p20,
        type : "ck",
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