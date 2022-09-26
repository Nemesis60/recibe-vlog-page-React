import React from "react";
import '../Style/Ingredients.css'

function Ingredients (props) {

    return(
        <div className="Ingredients">
            <h2>Ingredients</h2>
            <h3>Graham Cracker Crust</h3>
            <div className="steps-ingredients">
                <input type="checkbox"/>
                <p>1 and 1/2 cups (150g) <strong>graham cracker crumbs</strong> (about 10 full sheet graham crackers)</p>
            </div>
            <div className="steps-ingredients">
                <input type="checkbox"/>
                <p>5 Tablespoons (70g) <strong>unsalted butter</strong>, melted </p>
            </div>
            <div className="steps-ingredients">
                <input type="checkbox"/>
                <p>1/4 cup (50g) <strong>granulated sugar</strong></p>
            </div>

            <h3>Cheesecake</h3>

            <div className="steps-ingredients">
                <input type="checkbox"/>
                <p>four 8-ounce blocks (940g) full-fat <strong>cream cheese</strong>, softened to room temperature</p>
            </div>
            <div className="steps-ingredients">
                <input type="checkbox"/>
                <p>1 cup (200g) <strong>granulated sugar</strong></p>
            </div>
            <div className="steps-ingredients">
                <input type="checkbox"/>
                <p>1 cup (240g) full-fat <strong>sour cream</strong>, at room temperature</p>
            </div>
            <div className="steps-ingredients">
                <input type="checkbox"/>
                <p>1 teaspoon <strong>pure vanilla extract</strong></p>
            </div>
            <div className="steps-ingredients">
                <input type="checkbox"/>
                <p>2 teaspoons <strong>fresh lemon juice</strong> (optional, but recommended)</p>
            </div>
            <div className="steps-ingredients">
                <input type="checkbox"/>
                <p>3 large <strong>eggs</strong>, at room temperature</p>
            </div>
            <div className="steps-ingredients italic-content">
                <input type="checkbox"/>
                <p>topping suggestions: <span>salted caramel, lemon curd, strawberry topping, chocolate ganache, red wine chocolate ganache, fresh fruit, whipped cream, or raspberry sauce</span> (recipe in notes)</p>
            </div>
        </div>
    )
}

export default Ingredients;