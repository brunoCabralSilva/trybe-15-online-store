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
      <aside className="div-categories">
        <ul>
          Categorias:
          {
            categories.map((categorie) => (
              <li key={ categorie.id } className="cada-categoria">
                <input
                  className="btn-categoria"
                  data-testid="category"
                  type="button"
                  value={ categorie.name }
                />
              </li>
            ))
          }
        </ul>
      </aside>
    );
  }
}

export default Categories;
