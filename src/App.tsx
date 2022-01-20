import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TestComponent from "./TestComponent";
// import Data from "./data.json";

// type USERS = typeof Data;

// interface NAME {
//   first: string;
//   last: string | null;
// }
// const obj: NAME = { first: "test", last: "test1" };

// const func1 = (x: number, y: number): number => {
//   return x + y;
// };

// // Intersection types(タイプ結合)
// type PROFILE = {
//   age: number;
//   city: string;
// };

// type LOGIN = {
//   username: string;
//   password: string;
// };

// type USER = PROFILE & LOGIN;

// const userA: USER = {
//   age: 30,
//   city: "tokyo",
//   username: "test",
//   password: "pass",
// };

// // Union types
// let value: boolean | number;

// value = true;
// value = 0;

// console.log(value);

// let arrayUni: (number | string)[];
// arrayUni = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "hello"];

// // literal
// let company: "facebook" | "Google" | "Amazon";
// company = "facebook";
// // company = "netflex";

// // typeof
// // jsonのデータタイプがあらかじめ定義されており、jsonの構造が複雑な場合にtypeofで引き継ぐ
// let msg: number = 1;
// // let msg2: typeof msg = "Hi2";
// let animal = {
//   cat: "small cat",
// };

// let newAnimal: typeof animal = {
//   cat: "big cat",
// };

// // keyof
// type KEYS = {
//   primary: string;
//   secondary: string;
// };

// let key: keyof KEYS;

// enum OS {
//   Windows,
//   MAC,
//   Linux,
// }

// interface PC {
//   id: number;
//   OSType: OS;
// }

// const PC1: PC = {
//   id: 1,
//   OSType: OS.Linux,
// };

// const PC2: PC = {
//   id: 2,
//   OSType: OS.MAC,
// };

// // 型の互換性

// const comp1 = "test";
// let comp2: string = comp1;

// // Generics
// interface GEN<T> {
//   item: T;
// }

// const gen0: GEN<string> = { item: "hello" };
// // const gen1: GEN = { item: "hello" };
// const gen2: GEN<number> = { item: 0 };

// interface GEN1<T = string> {
//   item: T;
// }
// const gen1: GEN1 = { item: "hello" };

// interface GEN2<T extends string | number> {
//   item: T;
// }
// const item3: GEN2<string> = { item: "hello" };
// const item4: GEN2<number> = { item: 0 };
// // const item5: GEN2<boolean> = { item: false };

// function funcGen<T>(props: T) {
//   return { item: props };
// }

// const gen6 = funcGen<string>("test");
// const gen7 = funcGen<string | null>("test");

// function funcGen1<T extends string | null>(props: T) {
//   return { value: props };
// }

// // const gen8 = funcGen1(0);

// function funcGen3<T extends Props>(props: T) {
//   return { value: props.price };
// }

// const gen10 = funcGen3({ price: 10 });

// const funcGen4 = <T extends Props>(props: T) => {
//   return { value: props.price };
// };

// interface Props {
//   price: number;
// }

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent text="hello from app" />
      </header>
    </div>
  );
};

export default App;
