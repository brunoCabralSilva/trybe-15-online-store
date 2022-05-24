import React, { Component } from 'react';
import { getCategories } from '../services/api';

class Categories extends Component {
  state = {
    categories: [],
  }

  async componentDidMount() {
    const categoriesList = await getCategories();
    this.setState({ categories: [...categoriesList] });
  }

  render() {
    const { categories } = this.state;
    return (
      <aside>
        <ul>
          Categorias:
          {
            categories.map((categorie) => (
              <input
                data-testid="category"
                key={ categorie.id }
                type="button"
                value={ categorie.name }
              />
            ))
          }
        </ul>
      </aside>
    );
  }
}

export default Categories;
