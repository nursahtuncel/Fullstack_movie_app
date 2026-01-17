const optionsRequest =(req,res)=>{

    // frontendden bir post,put,patch,delete isteği atıldığında tarayıcı öncelikle serverın bu istek tiplerini kabul ettiğini kontrol etmek amacıyla OPTIONS http methoduyla istek atar.


// Eğer Optıons isteğine cevap göndermezsek yukarıdaki istek türlerinin API'nın kabul etmediğini zannediyor ve asıl isteği hiçbir zaman atmıyor

// options isteği gelince doğru headerla cevap gönderirsek options'un arkasından asıl isteği atıyor.

  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type"
  );

  res.statusCode = 204; 
  res.end();
};

module.exports = optionsRequest;
