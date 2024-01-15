import React, { useState } from 'react';
import { QueryBuilder, formatQuery } from 'react-querybuilder';
import { fields } from './components/Field';
import 'react-querybuilder/dist/query-builder.css';
import './index.css';
import { QueryBuilderDnD } from '@react-querybuilder/dnd';
import * as ReactDnD from 'react-dnd';
import * as ReactDndHtml5Backend from 'react-dnd-html5-backend';
import { QueryBuilderBootstrap } from '@react-querybuilder/bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.scss';
import 'bootstrap/scss/bootstrap.scss';

const initialQuery = { combinator: 'and', rules: [] };

const App = () => {
  const [query, setQuery] = useState(initialQuery);

  return (
    <QueryBuilderDnD dnd={{ ...ReactDnD, ...ReactDndHtml5Backend }}>
        <QueryBuilderBootstrap>
      <QueryBuilder
      controlClassnames={{ queryBuilder: 'queryBuilder-branches' }}
        fields={fields}
        query={query}
        onQueryChange={setQuery}
        showNotToggle
      />
      <code>{formatQuery(query, 'json')}</code>
    </QueryBuilderBootstrap>
  </QueryBuilderDnD>
  );
};

export default App;
