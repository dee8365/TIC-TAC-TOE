const index=["0","0","0","0","0","0","0","0","0"];
let m =0;
let c=0;
let z =0;
let ind=30;
let win1 =0;
let win2=0;
let n=0;
let x=0;
let y=0;
let draw=0;
let cord1=0;
let cord2=0;
const winset=[[0,1,2],[0,3,6],[0,4,8],[2,4,6],[3,4,5],[6,7,8],[1,4,7],[2,5,8]];
document.querySelector('.pos0').addEventListener('click',() =>{ind=0;
    document.querySelector(`.pos${ind}`).textContent="X";
playing(ind);
});
document.querySelector('.pos1').addEventListener('click',() =>{ind=1;
    document.querySelector(`.pos${ind}`).textContent="X";
    playing(ind);
;});
document.querySelector('.pos2').addEventListener('click',() =>{ind=2;
    document.querySelector(`.pos${ind}`).textContent="X";
playing(ind);
});
document.querySelector('.pos3').addEventListener('click',() =>{ind=3;
        document.querySelector(`.pos${ind}`).textContent="X";
playing(ind);
});
document.querySelector('.pos4').addEventListener('click',() =>{ind=4;
    document.querySelector(`.pos${ind}`).textContent="X";
playing(ind);
});
 
document.querySelector('.pos5').addEventListener('click',() =>{ind=5;
    document.querySelector(`.pos${ind}`).textContent="X";
playing(ind);
});
document.querySelector('.pos6').addEventListener('click',() =>{ind=6;
    document.querySelector(`.pos${ind}`).textContent="X";
playing(ind);
});
document.querySelector('.pos7').addEventListener('click',() =>{ind=7;
    document.querySelector(`.pos${ind}`).textContent="X";
playing(ind);
});
document.querySelector('.pos8').addEventListener('click',() =>{ind=8;
    document.querySelector(`.pos${ind}`).textContent="X";
 playing(ind);
});
function playing (cord1){
        if(plays[ind]==""){
c++
m=0;
z=0;
let play0=document.querySelector('.pos0').textContent;
let play1=document.querySelector('.pos1').textContent;
let play2=document.querySelector('.pos2').textContent;
let play3=document.querySelector('.pos3').textContent;
let play4=document.querySelector('.pos4').textContent;
let play5=document.querySelector('.pos5').textContent;
let play6=document.querySelector('.pos6').textContent;
let play7=document.querySelector('.pos7').textContent;
let play8=document.querySelector('.pos8').textContent;
const plays=[play0,play1,play2,play3,play4,play5,play6,play7,play8];
if (c==1){
    for(let i=0;i<9;i++){
        if(( i==0 ||  i==2 ||i==6 ||i==8 || i==3||i==5)&& plays[i]=="X")
                {
                    plays[4]="O";
                }
                if(plays[4]=="X")
                {
                    plays[0]="O";
                }
         if(plays[i]=="X" &&    ( i!=0 &&  i!=2 && i!=6 && i!=8 && i!=3 && i!=5) && i!=4){
            
            plays[i+1]="O";
            break;
    
        }            
    }
} 

else{

    console.log(c);

    let cord2=10;
    for(let i=0;i<9;i++){
        if(plays[i]=="X"){
index[i]=1;
        }}
    for(let i=0;i<9;i++){
        if(z==1)
            break;
    if(index[i]==1 && i!=cord1){
        cord2=i; 
    for(let j=0;j<8;j++){
            let q=0;
               for(let k=0;k<3;k++){
                
if(cord1==winset[j][k]){
        for(let l=0;l<3;l++){
    if(cord2==winset[j][l]){
         for(let u=0;u<3;u++){
            console.log(cord1,cord2) ;
            if(plays[winset[j][u]]==""){
             plays[winset[j][u]]="O";
             z=1;
              m++;
            break;
            }
            
         } }}}}
}
    
 } }

   if( m==0 && c>1 && z==0){
                if(plays[cord1+1]=="" && z==0)
                 { cord2= [cord1+1];
                     plays[cord2]="O";
                     console.log(z);
                z++;
            }
                if(plays[cord1-1]=="" && z==0)
                    {cord2= [cord1-1];
                         plays[cord2]="O";
                             z++;}
                             if(plays[cord1+3]=="" && z==0)
                    {cord2= [cord1+3];
                         plays[cord2]="O";
                             z++;}
                             if(plays[cord1-3]=="" && z==0)
                    {cord2= [cord1-3];
                         plays[cord2]="O";
                             z++;}
            
        }
                draw=0;
                       for(let i=0;i<8;i++){
        win1=0;
        win2=0;
    for(let j=0;j<3;j++){
        if(plays[winset[i][j]]=="X")
{            win1++;}
    if(plays[winset[i][j]]=="O")
{            win2++;}
     if(plays[i][j]=="O" || plays[i][j]=="X" )
{            draw++;}

}
if(win1==3){
            document.querySelector('.result').textContent="               CONGRATULATIONS      U       WONN     ";
            break;
}
if(win2==3){
            document.querySelector('.result').textContent="                      BETTER      LUCK     NEXT     TIME        ";
break;
}
                       }
}        
   if(draw==8){
     document.querySelector('.result').textContent="                     MATCH             DRAW        ";
    }         
for(let i=0; i<9; i++){
 document.querySelector(`.pos${i}`).textContent=plays[i];
}}
}
