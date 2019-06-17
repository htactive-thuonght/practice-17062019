// tính diện tích hình thang

// let square = (a,b,h)=>(a+b)*h/2;
// console.log("Diện tích: " +square(2,3,2));
let add=(a,b,cb)=>{
    setTimeout(() =>{
        if(typeof a!='number'|| typeof b != 'number'){
            return cb(new Error('Tham số phải có kiểu number'));
        }
        cb(undefined,a+b);
    },1000);
}
// add(4,5,(e,res)=>{
//     if(e)return console.log("Lỗi"+e);
//     console.log('Kết quả: '+res);   
// });

let multiply = (a,b,cb)=>{
    setTimeout(()=>{
        if(typeof a!='number'|| typeof b != 'number'){
            return cb(new Error('Tham số phải có kiểu number'));
        }
        cb(undefined,a*b );
    },1000)
}

let devide = (a,b,cb)=>{
    setTimeout(()=>{
        if(typeof a!='number'|| typeof b != 'number'){
            return cb(new Error('Tham số phải có kiểu number'));
        }
        if(b==0) return cb(new Error('Chia cho 0'));
        cb(undefined,a/b );
    },1000)
}

let tinhdientichhinhthang =(a,b,h,cb)=>{
    add(a,b, (err,result)=>{
        if(err)return cb(err);
        multiply(result,h,(err,result)=>{
            if(err)return cb(err);
            devide(result,2,(err,square)=>{
                if(err) return cb(err);
                cb(undefined,square);
            });
        });
    });
}

tinhdientichhinhthang(2,3,2,(e,res)=>{
    if(e) return console.log(e.toString());
    console.log('Diện tích hình thang là: '+res);
    
});