interface SearchBarProps {
  value: string;
  onChange: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => (
  <input
    type="text"
    placeholder="Search movies..."
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="form-control mb-4"
  />
);

export default SearchBar;
