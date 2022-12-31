const app=require('express')()
const cors=require('cors')

app.listen(8800)
app.use(cors())
app.get('/',(req,res)=>{
    res.json(
      
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
               img:'https://upload.wikimedia.org/wikipedia/pt/thumb/8/81/Mutantes_1968.jpg/220px-Mutantes_1968.jpg',
               country:'Brasil'
            }
         ]

    )})