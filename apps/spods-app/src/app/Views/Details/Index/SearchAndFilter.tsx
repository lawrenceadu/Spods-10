import { Field, Icon } from '@spods/ui';
import React from 'react';

interface SearchAndFilterProps {
  filter: string;
  search: string;
  setFilter: (value: string) => void;
  setSearch: (value: string) => void;
}

const SearchAndFilter = ({
  filter,
  search,
  setFilter,
  setSearch,
}: SearchAndFilterProps) => (
  <div className="d-flex align-items-center justify-content-between gap-4 mb-6">
    <Field
      name="search"
      wrapperClassName="mb-0"
      containerClassName="gap-2"
      style={{ borderRadius: 500 }}
      prefix={
        <Icon.Search size={16} variant="outline" color="var(--sp-gray-1)" />
      }
    >
      <input
        placeholder="Search for podcast"
        onChange={({
          currentTarget: { value },
        }: React.ChangeEvent<HTMLInputElement>) => setSearch(value)}
      />
    </Field>
  </div>
);

export default SearchAndFilter;
