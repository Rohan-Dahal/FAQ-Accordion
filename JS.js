const active_bt = document.querySelector('.active');
const openOne_bt = document.querySelector('.open-one');
const openTwo_bt = document.querySelector('.open-two');
const openThree_bt = document.querySelector('.open-three');



const minus_icon = document.querySelector('.minus');


const answer_text = document.querySelector('.answer-active');

// code starts
active_bt.addEventListener('click',()=>{

    if(answer_text.style.display==='none'){
             answer_text.style.display='block';
             minus_icon.src="icon-minus.svg";    
    }
    else{
        answer_text.style.display="none";
        minus_icon.src="icon-plus.svg";
        hr_tag.style.marginBottom="20px"
    }
});

openOne_bt.addEventListener('click',()=>{
    const hidden_text = document.getElementsByClassName('answer-hidden')[0];
    const plus_icon = document.getElementsByClassName('plus')[0];
     if(hidden_text.style.display==="block"){
        hidden_text.style.display="none";
        plus_icon.src="icon-plus.svg";
     }
     else{
        hidden_text.style.display='block';
        plus_icon.src="icon-minus.svg"
        
     }

});

openTwo_bt.addEventListener('click',()=>{
    const hidden_text = document.getElementsByClassName('answer-hidden')[1];
    const plus_icon = document.getElementsByClassName('plus')[1];
     if(hidden_text.style.display==="block"){
        hidden_text.style.display="none";
        plus_icon.src="icon-plus.svg";
     }
     else{
        hidden_text.style.display='block';
        plus_icon.src="icon-minus.svg"
        
     }

});

openThree_bt.addEventListener('click',()=>{
    const hidden_text = document.getElementsByClassName('answer-hidden')[2];
    const plus_icon = document.getElementsByClassName('plus')[2];
     if(hidden_text.style.display==="block"){
        hidden_text.style.display="none";
        plus_icon.src="icon-plus.svg";
     }
     else{
        hidden_text.style.display='block';
        plus_icon.src="icon-minus.svg"
        
     }

});

