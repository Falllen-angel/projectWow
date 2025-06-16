import React, {useReducer, createContext, useContext} from "react";
import p1 from './images/p1.png';
import p2 from './images/p2.png';
import p3 from './images/p3.png';
import p4 from './images/p4.png';
import p5 from './images/p5.png';
import p6 from './images/p6.png';
// useReducer : 상태값에 따라 컴포넌트 분할
// createContext : 전역에


const Data = [
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
  
]

function proReducer(Data, action){}

const ProStateContext = createContext();

export function ProProvider({children}){
  const [state, dispatch] = useReducer(proReducer, Data);
  return(
    <ProStateContext.Provider value={state}>
      {children}
    </ProStateContext.Provider>
  )
}

export function useProState(){
  const context = useContext(ProStateContext);
  if(!context){
    throw new Error();
  }
  return context;
}
