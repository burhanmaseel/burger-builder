import React, { Component } from 'react';
import Aux from '../../hoc/Auxilary';

class BurgerBuilder extends Component {
   state = {}
   render() {
      return (
         <Aux>
            <div>
               Burger
            </div>
            <div>
               Build Control
            </div>
         </Aux>
      );
   }
}

export default BurgerBuilder;