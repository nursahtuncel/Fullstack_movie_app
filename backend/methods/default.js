const defaultRequest=(req,res)=>{

    // cevabın durum kodunu belirleyelim
    res.statusCode=404
 
    // cevabın içeriğini belirtelim 
    res.write(JSON.stringify({message:"istek adresi tanımsiz"}))
    return res.end()
}
module.exports= defaultRequest;