import rectangle1 from '../../images/Rectangle13-1.png'
import rectangle2 from '../../images/Rectangle13-2.png'
import rectangle3 from '../../images/Rectangle13-3.png'
import rectangle4 from '../../images/Rectangle13-4.png'
import rectangle5 from '../../images/Rectangle13-5.png'

const disabled =false

export const buyNft = [{
    id:1,
    title:"Builder's chest",
    img:rectangle1,
    price:"30.000 $METO",
    aviable: "Available",
    count: '-',
    disable: disabled
},

{
    id:2,
    title:"Farmer's chest",
    img:rectangle2,
    price:"30.000 $METO",
    aviable: "Available",
    count: '-',
    disable: disabled
},

{
    id:3,
    title:"Lumberjack's chest",
    img:rectangle3,
    price:"30.000 $METO",
    aviable: "Available",
    count: '-',
    disable: disabled
},
{
    id:4,
    title:"Diggers's chest",
    img:rectangle4,
    price:"30.000 $METO",
    aviable: "Available",
    count: '-',
    disable: disabled
},
{
    id:5,
    title:"Miner's chest",
    img:rectangle5,
    price:"Sold Out",
    aviable: "Available",
    count: '-',
    disable: !disabled
} ] 