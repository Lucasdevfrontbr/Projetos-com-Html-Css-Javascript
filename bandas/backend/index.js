const app=require('express')()
const cors=require('cors')

app.listen(8800)
app.use(cors())
app.get('/',(req,res)=>{
    res.json(
      
         [
            {name:'Beatles',
         img:'https://hqrock.files.wordpress.com/2020/01/images-17734304960397465809..jpg?w=554',
         country:'Inglaterra'
            },
            {
               name:'Tame impala',
               img:'https://beatopolis.files.wordpress.com/2015/08/currents-tame-impala-album-cover-art-2015-500x500.jpg',
               country:'Australia'
            },
            {
               name:'White Stripes',
               img:'https://i.scdn.co/image/ab67616d0000b273a69f71a8794e2d867a52f98f',
               country:'EUA '
            }
         ]

    )})