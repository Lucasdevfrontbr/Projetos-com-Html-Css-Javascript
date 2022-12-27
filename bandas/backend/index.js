const app=require('express')()
const cors=require('cors')

app.listen(8800)
app.use(cors())
app.get('/',(req,res)=>{
    res.send(
        
         [
            {name:'The beatles',
         img:'https://hqrock.files.wordpress.com/2020/01/images-17734304960397465809..jpg?w=554',
         country:'Inglaterra'
            },
            {
               name:'Tame impala',
               img:'https://beatopolis.files.wordpress.com/2015/08/currents-tame-impala-album-cover-art-2015-500x500.jpg',
               country:'Australia'
            },
            {
               name:'Os mutantes',
               img:'https://www.muzplay.net/sites/default/files/styles/artista-slideshow/public/posts/fotos/mutantes-01604.jpg',
               country:'Brasil'
            }
         ]
        
    
    )})