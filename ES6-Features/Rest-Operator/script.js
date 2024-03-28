// MANLO MERE PAAS EK FUNCTION HAI SUM KA USME KCH PARAMETERS HAI UNKO ADD KRNA HAI?

// MANLO A AUR B HAI PEHLE TOH VO VALUE RETURN KRDENGE A + B

// ## AGR FUNCTION CALL KRNE PR MANLO PARAMETERS ZYDA BHEJH DIYE TOH ?

// TOH HUM FUNCTION JAHA BANA HAI USME EK …NUMS BHEJH DENGE JISE VO EK ARRAY BANA DEGA NUMS KA AUR USME REMAINING PARAMETERS STORE KRLEGA AUR BAAD MEIN USKI VALUE EK VALUE RETURN KRDEGA JO MEIN USE KRPAUNGA

function sum(x, y) {
    let z = x + y;
    console.log(z);
}
sum(1, 2);

// YAHA SIRF YEH 1 AUR 3 HI LEGA PARAMETERS MEIN
function sum(x, y) {
    let z = x + y;
    console.log(z);
}
sum(1, 2, 3, 4);


// YAHA YEH EK NUMS EK ARRAY MEIN BAAKI PARAMETERS KO STORE KR RHA HAI NUMS = [3, 4]
function add(x, y, ...nums) {
    // YAHA YEH SINGLE VALUE RETURN KR RHA HAI
    let a = nums.reduce((acc,nums)=>{
        return acc + nums
    },0)
    // YAHA HUM VO SINGLE VALUE KO USE KR RHE HAI
    let z = x + y + a;
    console.log(z);
    // YAHA NUMS ARRAY MEIN KYA STORE HUA VO DEKH SKTE HAI
    console.log(nums);
}
add(1, 2, 3 ,4);



















