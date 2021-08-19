import "./Card.scss";

let Deck = [
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-a1.png",
    name: "a1",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-a2.png",
    name: "a2",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-a3.png",
    name: "a3",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-a4.png",
    name: "a4",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-a5.png",
    name: "a5",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-a6.png",
    name: "a6",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-a7.png",
    name: "a7",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-a8.png",
    name: "a8",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-b1.png",
    name: "b1",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-b2.png",
    name: "b2",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-b3.png",
    name: "b3",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-b4.png",
    name: "b4",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-b5.png",
    name: "b5",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-b6.png",
    name: "b6",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-b7.png",
    name: "b7",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-b8.png",
    name: "b8",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-c1.png",
    name: "c1",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-c2.png",
    name: "c2",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-c3.png",
    name: "c3",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-c4.png",
    name: "c4",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-c5.png",
    name: "c5",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-c6.png",
    name: "c6",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-c7.png",
    name: "c7",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-c8.png",
    name: "c8",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-d1.png",
    name: "d1",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-d2.png",
    name: "d2",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-d3.png",
    name: "d3",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-d4.png",
    name: "d4",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-d5.png",
    name: "d5",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-d6.png",
    name: "d6",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-d7.png",
    name: "d7",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-d8.png",
    name: "d8",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-e1.png",
    name: "e1",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-e2.png",
    name: "e2",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-e3.png",
    name: "e3",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-e4.png",
    name: "e4",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-e5.png",
    name: "e5",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-e6.png",
    name: "e6",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-e7.png",
    name: "e7",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-e8.png",
    name: "e8",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-f1.png",
    name: "f1",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-f2.png",
    name: "f2",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-f3.png",
    name: "f3",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-f4.png",
    name: "f4",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-f5.png",
    name: "f5",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-f6.png",
    name: "f6",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-f7.png",
    name: "f7",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-f8.png",
    name: "f8",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-g1.png",
    name: "g1",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-g2.png",
    name: "g2",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-g3.png",
    name: "g3",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-g4.png",
    name: "g4",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-g5.png",
    name: "g5",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-g6.png",
    name: "g6",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-g7.png",
    name: "g7",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-g8.png",
    name: "g8",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-h1.png",
    name: "h1",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-h2.png",
    name: "h2",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-h3.png",
    name: "h3",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-h4.png",
    name: "h4",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-h5.png",
    name: "h5",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-h6.png",
    name: "h6",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-h7.png",
    name: "h7",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-h8.png",
    name: "h8",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-i1.png",
    name: "i1",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-i2.png",
    name: "i2",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-i3.png",
    name: "i3",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-i4.png",
    name: "i4",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-i5.png",
    name: "i5",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-i6.png",
    name: "i6",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-i7.png",
    name: "i7",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-i8.png",
    name: "i8",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-j1.png",
    name: "j1",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-j2.png",
    name: "j2",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-j3.png",
    name: "j3",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-j4.png",
    name: "j4",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-j5.png",
    name: "j5",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-j6.png",
    name: "j6",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-j7.png",
    name: "j7",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-j8.png",
    name: "j8",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-k1.png",
    name: "k1",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-k2.png",
    name: "k2",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-k3.png",
    name: "k3",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-k4.png",
    name: "k4",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-k5.png",
    name: "k5",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-k6.png",
    name: "k6",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-k7.png",
    name: "k7",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-k8.png",
    name: "k8",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-l1.png",
    name: "l1",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-l2.png",
    name: "l2",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-l3.png",
    name: "l3",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-l4.png",
    name: "l4",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-l5.png",
    name: "l5",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-l6.png",
    name: "l6",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-l7.png",
    name: "l7",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-l8.png",
    name: "l8",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-m1.png",
    name: "m1",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-m2.png",
    name: "m2",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-m3.png",
    name: "m3",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-m4.png",
    name: "m4",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-m5.png",
    name: "m5",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-m6.png",
    name: "m6",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-m7.png",
    name: "m7",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-n1.png",
    name: "n1",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-n5.png",
    name: "n5",
  },
  {
    image: process.env.PUBLIC_URL + "/images/vo1t-distingmk4-n8.png",
    name: "n8",
  },
];

export default Deck;
