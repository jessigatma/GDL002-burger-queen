import React from 'react';
import * as firebase from 'firebase';

const firebaseConfig = {

    apiKey: "AIzaSyBf2V79ALjboZwY_jWKFaVtMIa68SfgQ3A",
    authDomain: "burgerqueenlab-27204.firebaseapp.com",
    databaseURL: "https://burgerqueenlab-27204.firebaseio.com",
    projectId: "burgerqueenlab-27204",
    storageBucket: "burgerqueenlab-27204.appspot.com",
    messagingSenderId: "740465837276",
    appId: "1:740465837276:web:54cdbfef457cb302"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            menuMeals:[],
            menuBreakfast:[]
        };
    };
    componentDidMount(){
        const wordRef = firebase.database().ref();
        const breakfastRef = wordRef.child('menuBreakfast')
        breakfastRef.on('value',(snapshot)=>{
            let Foods = snapshot.val();
            let newState = [];
            for (let Food in Foods){
                newState.push({
                    id:Food,
                    Food: Foods[Food].Food,
                    price: Foods[Food].price,
                    img: Foods[Food].img
                });
            }
            this.setState({
                menuBreakfast:newState
            });
        });

    const advRef = firebase.database().ref();
    const mealsRef = advRef.child('menuMeals')
    mealsRef.on('value', (snapshot)=>{
        let mealFoods = snapshot.val();
        let newAdvState = [];
        for (let mealFood in mealFoods){
            newAdvState.push({
                id: mealFood,
                Food:mealFoods[mealFood].Food,
                price: mealFoods[mealFood].price,
                img: mealFoods[mealFood].img
            });

        }
        this.setState({
            menuMeals: newAdvState
        });
        });
    };
render(){
    return(
        <div className="User">
            <div>
                <section id="breakfast"> 
                    <div>
                        <h1>Breakfast</h1>
                        {this.state.menuBreakfast.map((Food)=>{
                            return (
                                <div>
                                    <h3>{Food.Food}</h3>
                                    <p>{Food.price}</p>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </div>
        </div>
    )
}

}


export default User;