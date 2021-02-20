import React from 'react';

import Card from '../components/templates/Card';
// import { getById as apiId } from '../services/api';

function SearchResult(props) {
  const { nav, items } = props;

  // const [productById, setProductById] = useState([]);

  // useEffect(() => {
  //   apiId(id).then(response => setProductById(response.data.results));
  // }, [id]);

  function renderItems() {
    const cards = items.map(item => <Card key={item.id} item={item} />);
    return cards;
  }

  // console.log(items);
  // console.log(renderItems());
  return (
    <>
      {nav}
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">{renderItems()}</div>
      </div>
      {/* <section className="product-list">
        {items.length < 1 ? (
          <p>Nenhum produto foi encontrado.</p>
        ) : (
          items.map(item => <Card key={item.id} item={item} />)
        )}
      </section> */}

      {/* <section className="product-list">
        {items.length < 1 ? (
          <p>Nenhum produto foi encontrado.</p>
        ) : (
          items.map(item => <Card key={item.id} item={item} />)
        )}
      </section> */}
    </>
  );
}

export default SearchResult;
