import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Student from './Student.jsx'
import List from './List.jsx'
import Button from  './Button.jsx'
import Effect from './Effect.jsx'
import Ref from './Ref.jsx'
import Reduce from './Reduce.jsx'
import Layout from './Layout.jsx'
import Memo from './Memo.jsx'
import Practice from './Practice.jsx'
import Test from './Test.jsx'
import Mult from './Mult.jsx'
import Dropdown from './Dropdown.jsx'
import LoginForm from './LoginForm.jsx'
import Forms from './Forms.jsx'
import CustomCount from './CustomCount.jsx'
import Cartform from './Cartform.jsx'
function App() {
  const user = ({
    email : 'kssreelakshmi2211@gmail.com',
    password : 'Sree2211'
})
//  const fruits = [{id :1,name :'banana',calories :120},
//                   {id :2,name :'apple',calories :85},
//                   {id :3,name :'mango',calories :65},
//                   {id :4,name :'berry', calories:50}]
//  const  veg= [{id :5,name :'carrot',calories :12},
//                   {id :6,name :'beetroot',calories :55},
//                   {id :7,name :'raddish',calories :4},
//                   {id :8,name :'tomato', calories:150}]

  return(
    <>
    {/* <Forms user={user}/> */}
    {/* <CustomCount/> */}
    <Cartform />
    {/* <Dropdown/> */}
    

    {/* <Header></Header> */}
    {/* <Food></Food> */}
    {/* <Card></Card> */}
    {/* <Footer></Footer> */}

    {/* <Student name='Sponge Bob' age= {30} isStudent= {true}/>
    <Student /> */}
    {/* <List props ={fruits} category ='Fruits'/> */}
    {/* <List props ={veg} category ='vegtables'/> */}


     </>
  )
}

export default App
