import React,{useState} from "react";
import p1 from '../images/p1.png';
import p2 from '../images/p2.png';
import p3 from '../images/p3.png';
import p4 from '../images/p4.png';
import p5 from '../images/p5.png';
import p6 from '../images/p6.png';

function Product({item, onToggle}){
  return (
      <li
        style={{width:'188px', height:'260px', border:'1px solid #ccc', cursor:'pointer', color:item.active? 'red':'black', backgroundColor:'#fff31f'
        }}onClick={()=>onToggle(item.id)}>
          <img src={item.src} style={{width:'100%', borderBottom:'1px solid #ccc'}}  alt="" />
          <h4 style={{fontSize:'15px', padding:'0 0 0 10px'}}>{item.name}</h4>
          <p style={{fontSize:'10px', padding:'5px 0 0 10px'}}>{item.price}</p>
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

  const list = {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '40px',
    boxSizing: 'border-box' 
  }

  return(
    <>
      <ul style={list}>
        {
          items.map(item=>(
            <Product item={item} key={item.id}  onToggle={onToggle}/>
          ))
        }
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