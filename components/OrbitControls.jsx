const { extend } = require("@react-three/fiber");
const { default: dynamic } = require("next/dynamic");

const OrbitControls = dynamic(
() => import(three/examples/jsm/controls/OrbitControls).then((mod) => mod.OrbitControls),
{ ssr: false }
);
extend({ OrbitControls })
