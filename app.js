const btn = document.querySelector('#generate-color-btn');
const output = document.querySelector('#colorHex');
const root = document.documentElement;
const copyIcon = document.querySelector('#copy-icon');

const toast = document.querySelector('#toast');
const toastMsg = toast.querySelector('#toast-msg');
const toastIcon = toast.querySelector('#toast-icon');


const hexColorGenerator = () => {
    let hexColor = '#';
    let hexCode = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
        hexColor += hexCode.charAt(Math.floor(Math.random() * hexCode.length));
        }
        return hexColor;
}


const updateDom = (hexColor)  => { 
    output.textContent = hexColor;
    root.style.setProperty('--primary', hexColor);
    
}

const showToast = (state,msg) => {
    toast.classList.remove('hidden');
    state === 'success' ? toastIcon.src = './img/check.svg' : toastIcon.src = './img/error.svg';
    toastMsg.textContent = msg;
    setTimeout( () => {
        toast.classList.add('hidden');
    },2000)

}

const clipboard = () => {
    if (navigator.clipboard) {
    navigator.clipboard.writeText(output.textContent).then(() => {
        console.log('success','Copied to clipboard!');
        showToast('success','Copied to clipboard!');
      }).catch((error) => {
            showToast('error','Error copying to clipboard');
            console.error('Error copying to clipboard:', error);
      });
    }else{
        showToast('error','Clipboard API not supported');
    }
}


btn.addEventListener('click',() => updateDom(hexColorGenerator()) );


copyIcon.addEventListener('click', () => clipboard())

updateDom(hexColorGenerator());
