"use strict";
let string = document.getElementById("string");
let win_width = window.innerWidth * 0.8;//this var will work as 80vw 
let light_lamp = window.innerWidth * 0.5 // this is center of window
string.style.transform = `translate(${win_width}px, -400px)`;//setting the posistion of string on screeen
// light is on or not
let lightON = false

class string_boll {
    string_click = false
    y_string_pos = 0
    init() {
        let string = document.getElementById("string");
        string.addEventListener('mousedown', ()=>{
            // console.log("Mouse Down");
            this.string_click = true
        })
        window.addEventListener('mousemove', (e)=>{
            // console.log("Mouse Move");
            if(this.string_click){
                this.y_string_pos = e.clientY - 700
                if(this.y_string_pos > -300){
                    this.y_string_pos = -300;
                }
                else if(this.y_string_pos < -500){
                    this.y_string_pos = -500;
                }
                string.style.transform = `translate(${win_width}px, ${this.y_string_pos}px)`
            }
            
        })
        window.addEventListener("mouseup", (e)=>{
            // console.log("Mouse Up");
            if(this.string_click){
                lightON = (!lightON)
            console.log(`light is on ${lightON}`);
            }
            string.style.transform = `translate(${win_width}px, ${-400}px)`
            
            this.string_click = false;
        })
    }
}

function change_light(){
    let light = document.getElementById('main-lamp');
    if(lightON){
        light.style.backgroundImage = 'url(light.png)';
    }
    else{
        light.style.backgroundImage = 'url(dark.png)';
    }
}
function setLampContainer_height_and_width(){
    let light = document.getElementById('main-lamp');
    let width = window.innerWidth;
    light.style.width =  `${width * 0.75}px`;
    light.style.height = `${window.innerHeight}px`;
}
function set_Message_pos(){
    let message = document.getElementById("LoveYou");
    // message.style.display = 'none'
    message.style.transform = `translate(${(window.innerWidth / 2) - 100}px, 400px)`
    message.className = 'message_vis'
    if(message && lightON){
        message.style.display = 'block'
        message.className = 'message_animation';
        message.style.transform = `translate(${(window.innerWidth / 2) - 100}px, 400px)`
    }
}

function main(){
    change_light();
    setLampContainer_height_and_width();
    set_Message_pos();
}
setInterval(main, 0);
const str = new string_boll(); 
str.init();