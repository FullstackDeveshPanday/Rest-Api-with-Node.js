import { v4 as uuidv4 } from 'uuid';
let users =[];
export const getuser=(req,res)=>
{   //console.log(users);
    res.send(users);
}
export const createuser=(req,res)=>
{
    // console.log('post route reached');
    const user=req.body;
    users.push({ ...user,id: uuidv4()});
    res.send(` Congrates You have Successfully with Your name ${user.name} in to database`);
}
export const getusers=(req,res)=>{
    // create destructure for
    const {id}=req.params;
    const founduser =users.find((user)=>user.id ===id);
    res.send(founduser)
    }
export const deleteusers=(req,res)=>{
    const {id}=req.params; 
    users=users.filter((user)=>user.id !==id);

    res.send(`user with id ${id} deleted into database`);
}
export const updateusers = (req,res)=>{
    const {id}=req.params;
    const {name,age,Qualifiaction }=req.body;
    
    const user = users.find((user)=>user.id===id);

    if(name)
    {
        user.name=name;
    }
    if(age)
    {
        user.age=age;
    }
    if(Qualifiaction)
    {
        user.Qualifiaction=Qualifiaction;
    }
    res.send(`user with id ${id} Updated into database`);
}