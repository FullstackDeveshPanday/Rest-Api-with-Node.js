import express from 'express';


const router = express.Router();
const users =[
    {
        "name": "Devesh",
        "age": "24",
        "Qualifiaction":"MCA"
    },
    {
        "name": "Prateek",
        "age": "24",
        "Qualifiaction":"MCA"
    }

]

router.get('/',(req,res)=>
{   //console.log(users);
    res.send(users);
});
router.post('/',(req,res)=>
{
    // console.log('post route reached');
    const user=req.body;
    users.push(user);
    res.send(` Congrates You have Successfully with Your name ${user.name} in to database`)
});

export default router;

