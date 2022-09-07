/*
MIT License

Copyright (c) 2017 Pavel Dobryakov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

'use strict';

const canvas = document.getElementsByTagName('canvas')[0];
const context = canvas.getContext('2d');
const {width, height} = canvas;
const claro = new Image();
const oscuro = new Image();

claro.src = 'https://cdn.discordapp.com/attachments/751980478420222022/1016920072041795624/ErqwWzTW4AErlW2.png';
oscuro.src = 'https://cdn.discordapp.com/attachments/751980478420222022/1016920072385732718/ErqwXRxXAAE5tnL.png';

claro.onload = (e)=>{
    context.fillStyle = "#ff0000";
    context.arc(10,10,40,30,50,false)
    // context.drawImage(claro,0,0, Number(width), Number(height));
};


window.addEventListener('mouseup', (e) => {
    let x = e.clientX;
    let y = e.clientY;
    console.log(`${x} eje x`);
    console.log(`${y} eje y`);
});
