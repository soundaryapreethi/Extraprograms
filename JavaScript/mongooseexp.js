const m=require('mongoose');

meow().catch((err)=> console.log(err));

async function meow(){

    await m.connect('mongodb+srv://admin:preethi8@cluster0.qqw3p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

    const meowS=m.Schema({
        _id:Number,
        name:String,
        breed:String,
        star:Number

    });

    const meowModel=m.model('meow',meowS);

    const doc=new meowModel();
    doc._id=2;
        doc.name="billo";
        doc.breed='cat';
        doc.star=4;

        await doc.save();

}