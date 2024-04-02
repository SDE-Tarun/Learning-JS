let KalMilenge = true;

function KalMilengeYaNahi() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(KalMilenge){
                resolve();
            }
            else{
                reject();
            }
        }, 3000);
    })
}

KalMilengeYaNahi().then(()=>{
    console.log('Mil Gaye');
}).catch(()=>{
    console.log('Nahi Mil Paye');
})

