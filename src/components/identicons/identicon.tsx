// ref: https://github.com/tuhnik/react-identicons/blob/master/README.md
// https://github.com/drhus/awesome-identicons
import React, {useRef, useEffect} from 'react'
import md5 from "crypto-js/md5"

interface IdenticonProps {
  message: string
  className?: string; // "identicon",
  bg?: string; // "transparent",
  count?: number; // 5,
  palette?: any; // null,
  fg?: any; // null,
  padding?: number; // 0,
  size?: number; // 400,
  getColor?: any; // null,
}
let range = function (n, in_min, in_max, out_min, out_max) {
  return (n - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

export const Identicon = (props: IdenticonProps) => {
  const { message, size=50,className="identicon", padding=0, getColor} = props;
  let {fg, bg="transparent", count=5, palette} = props;

  const canvasEl = useRef(null);

  useEffect(()=> {
    updateCanvas();
  }, [fg, bg, message, palette]);

  const updateCanvas = () => {
    const hash = md5(message).toString();

    let block = Math.floor(size/count)
    let hashcolor = hash.slice(0,6)

    if(palette && palette.length) {
        let palette_index = Math.floor(range(parseInt(hash.slice(-3), 16), 0, 4095, 0, palette.length))
        fg = palette[palette_index]
    }

    if(getColor) {
        getColor(fg || hashcolor)
    }

    let pad = padding;
    const canvas = canvasEl;
    canvas.current.width = block*count + pad
    canvas.current.height = block*count + pad
    let arr = hash.split("").map(el=> {
        el = parseInt(el, 16)
        if(el < 8) {return 0}
        else {return 1}
    })

    let map = [];

    map[0] = map[4] = arr.slice(0, 5)
    map[1] = map[3] = arr.slice(5, 10)
    map[2] = arr.slice(10, 15)

    const ctx = canvas.current.getContext('2d');
    ctx.imageSmoothingEnabled = false
    ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);

    map.forEach((row, i) => {
        row.forEach((el, j) => {
            if (el) {
                ctx.fillStyle = fg?fg:"#" + hashcolor  ;
                ctx.fillRect(block * i + pad, block * j + pad, block - pad, block - pad);
            }
            else{
                ctx.fillStyle = bg
                ctx.fillRect(block * i + pad, block * j + pad, block - pad, block - pad);
            }
        })
    })
}
  return (<>
    <canvas ref={canvasEl}
      className={className}
      style={{width: size, height: size}}/>
  </>)
}
