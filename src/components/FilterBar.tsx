import { Genre } from "../types/Movie";

interface FilterBarProps {
  options: Genre[];
  selected: Genre;
  onChange: (genre: Genre) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  options,
  selected,
  onChange,
}) => (
  <select
    value={selected}
    onChange={(e) => onChange(e.target.value as Genre)}
    className="filter-bar"
  >
    {options.map((genre) => (
      <option key={genre} value={genre}>
        {genre}
      </option>
    ))}
  </select>
);

export default FilterBar;
