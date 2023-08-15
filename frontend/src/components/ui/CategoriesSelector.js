import { Component } from "inferno";
import { JOB_CATEGORIES, categories_default } from "./../utils/Categories";

export default class CategoriesSelector extends Component {

    constructor(props){
        super(props);

        const { handleUpdateCategories } = props;
        let { initial_categories } = props;

        if(initial_categories == undefined) {
            initial_categories = categories_default();
        }

        this.state = {
            is_editable: handleUpdateCategories != undefined,
            categories: initial_categories,
            handleUpdateCategories: handleUpdateCategories
        }

        this.handleClickCategory = this.handleClickCategory.bind(this);
    }


    handleClickCategory(category){


        if (this.state.is_editable){
            let new_state = this.state;
            new_state.categories[category] = !this.state.categories[category]
            this.setState(new_state);
            this.state.handleUpdateCategories(this.state.categories);
        }
    }   

    render(){
        let categoriesElements = [];
		for (let index = 0; index < JOB_CATEGORIES.length; index++) {
			const category = JOB_CATEGORIES[index];
			const url = `/static/theme/myimg/categories/${category}.svg`; 
			const is_active = this.state.categories[category];
            const class_active = is_active ? "category-item-active" : ""
            const classes = "category-item p-2 flex-fill " + class_active 

			categoriesElements.push(<div class={classes} onclick={() => this.handleClickCategory(category)}>
                <div>{category}</div>
                <div>
                    <img class="category-icon" src={url} alt={category}></img>
                </div>
            </div>);
		}

		return (<div class="container categories-container">
				<div class="d-flex flex-wrap">
					{categoriesElements}
				</div>
				</div>);
    }

}